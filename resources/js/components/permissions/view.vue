<template>
    <div>
        <v-btn fab class="green white--text" depressed small @click="getPermissions"><v-icon>mdi-lock</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
          
            <v-card>
               
                   <v-toolbar dense>
            <v-toolbar-title>Permissions</v-toolbar-title>
           
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                    <template v-slot:extension>
                            <add :submoduleid="submodule.id" v-on:reloadpermission="getPermissions"></add>
                    </template>
          
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
                               
                               <td class="d-flex justify-end">
                                <edit :permission="permission" v-on:reloadpermission="getPermissions"></edit>
                                <deletePermission :permission="permission" v-on:reloadpermission="getPermissions"></deletePermission>
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
import * as permission from '../../services/permission_service'
import add from '../../components/permissions/add'
import edit from '../../components/permissions/edit'
import deletePermission from '../../components/permissions/delete'
export default {
    name:'viewpermission',
    props:['submodule'],
    components:{
      add,
      edit,
      deletePermission
    },
    data(){
        return{
            addModel:false,
            permissions:[],           
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        getPermissions(){          
                this.loading = true
                permission.getPermissions(this.submodule.id).then(response=>{
                    this.loading = false
                    this.permissions = response.data.permissions
                    this.addModel = true
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