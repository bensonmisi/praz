<template>
<div>
       <v-btn outlined color="green"  small rounded dense @click="getPermissions">permissions</v-btn>
     <v-dialog v-model="addModel" max-width="500">          
            <v-card>
               
                   <v-toolbar dense>
            <v-toolbar-title>Permissions</v-toolbar-title>
           
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
                           <tr v-for="permission in permissions" :key="permission.id">
                             
                               <td>
                                   {{permission.name}}
                               </td>                             
                               <td class="d-flex justify-end py-2">
                                   <template v-if="permission.assigned">
                                        <v-btn outlined color="red" small rounded dense @click="assignPermission(permission.id,'detach')">unassign</v-btn>
                                         
                                   </template>
                                   <template v-else>
                                        <v-btn outlined dense  small rounded color="blue" @click="assignPermission(permission.id,'attach')">assign</v-btn>
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
                absolute
                right
                
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
export default {
    props:['role','submodule'],
    data(){
        return{
            permissions:[],
            loading:false,
            message:'',
            snackbar:false,
            color:'',
            addModel:false
        }
    },
    methods:{
        getPermissions(){
            this.loading = true
            role.getPermissions(this.role,this.submodule).then(response=>{
             this.loading = false
             this.permissions = response.data.permissions
             this.addModel = true
            }).
            catch(error=>{
                        this.loading = false
                        this.message= error.response.data.message
                        this.snackbar=true
                        this.color="red"
            })

        } ,
         assignPermission(id,action){
            this.loading = true
             var formdata = new FormData();
              formdata.append('submodule',this.submodule)
              formdata.append('permission_id',id)
              formdata.append('role',this.role)
              formdata.append('action',action)
              role.assignPermission(formdata).then(response=>{
               this.loading = false
                  this.snackbar=true
               this.permissions = response.data.permissions
               this.message= 'Permission successfully assigned to role'
            
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