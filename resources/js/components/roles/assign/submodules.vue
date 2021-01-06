<template>
    <div>
        <v-btn outlined color="green"  small rounded dense @click=" getSubmodules">submodule</v-btn>
        <v-dialog v-model="addModel" max-width="500">          
            <v-card>
               
                   <v-toolbar dense>
            <v-toolbar-title>Submodules</v-toolbar-title>
           
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                   
          </v-toolbar>
                <v-card-text>                     
                   <v-simple-table class="mt-10">
                       <thead>
                           <tr>                              
                                <th>Name</th>
                                 <th></th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr v-for="submodule in submodules" :key="submodule.id">
                             
                               <td>
                                   {{submodule.name}}
                               </td>                             
                               <td class="d-flex justify-end py-2">
                                   <template v-if="submodule.assigned">
                                        <v-btn outlined color="red" small rounded dense @click="assignSubmodule(submodule.id,'detach')">unassign</v-btn>
                                         <permission :role="role"  :submodule ="submodule.id"></permission>
                                   </template>
                                   <template v-else>
                                        <v-btn outlined dense  small rounded color="blue" @click="assignSubmodule(submodule.id,'attach')">assign</v-btn>
                                   </template>
                               </td>
                           </tr>
                       </tbody>
                   </v-simple-table>
                </v-card-text>
              
            </v-card>
        
        </v-dialog>
        <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
                 <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"
                height="50"
                >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text>
                    Please wait ....
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
                </v-dialog>
    </div>
</template>
<script>
import * as role from '../../../services/role_service'
import permission from '../../../components/roles/assign/permissions'
export default {
    props:['role','module'],
    components:{
    permission
    },
    data(){
        return{
            submodules:[],
            loading:false,
            message:'',
            snackbar:false,
            color:'',
            addModel:false
        }
    },
    methods:{
        getSubmodules(){
            this.loading = true
            role.getSubmodules(this.role,this.module).then(response=>{
             this.loading = false
             this.submodules = response.data.submodules
             this.addModel = true
            }).catch(error=>{
                        this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
            })

        } ,
         assignSubmodule(id,action){
            this.loading = true
             var formdata = new FormData();
              formdata.append('module',this.module)
              formdata.append('submodule_id',id)
              formdata.append('role',this.role)
              formdata.append('action',action)
              role.assignSubmodule(formdata).then(response=>{
               this.loading = false
               this.submodules = response.data.submodules
               this.message= 'Submodule successfully assigned to role'
               this.snackbar=true
               this.color="green"                

              }).catch(error=>{
                  this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red" 
              })
        }      
   }
}
</script>