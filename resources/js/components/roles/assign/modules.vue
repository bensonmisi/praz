<template>
    <div>
        <v-btn fab class="green white--text" depressed small @click="getModules"><v-icon>mdi-lock</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
          
            <v-card>
               
                   <v-toolbar dense>
            <v-toolbar-title>Modules</v-toolbar-title>
           
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
                           <tr v-for="module in modules" :key="module.id">
                             
                               <td>
                                   {{module.name}}
                               </td>                             
                               <td class="d-flex justify-end py-2">
                                   <template v-if="module.assigned">
                                        <v-btn outlined color="red" small rounded dense @click="assignModule(module.id,'detach')">unassign</v-btn>
                                         <submodule :role="role.id" :module="module.id"></submodule>
                                   </template>
                                   <template v-else>
                                        <v-btn outlined dense  small rounded color="blue" @click="assignModule(module.id,'attach')">assign</v-btn>
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
import submodule from '../../../components/roles/assign/submodules'
export default {
    props:['role'],
    name:'assignRole',
    components:{
       submodule
    },
    data(){
        return{
            modules:[],
            loading:false,
            message:'',
            snackbar:false,
            color:'',
            addModel:false
        }
    },methods:{
        getModules(){
            this.loading = true
            role.getModules(this.role.id).then(response=>{
                this.loading = false
                this.modules = response.data.modules
                this.addModel = true
            }).catch(error=>{
                          this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
            })
        },
        assignModule(id,action){
            this.loading = true
             var formdata = new FormData();
              formdata.append('module_id',id)
              formdata.append('role_id',this.role.id)
              formdata.append('action',action)
              role.assignModule(formdata).then(response=>{
               this.loading = false
               this.modules = response.data.modules
               this.message= 'Module successfully assigned to role'
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