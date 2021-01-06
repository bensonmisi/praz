<template>
    <div>
        <v-btn fab class="green white--text" depressed small @click="getSubmodules"><v-icon>mdi-link</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
          
            <v-card>
               
                   <v-toolbar dense>
            <v-toolbar-title>Submodules</v-toolbar-title>
           
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                    <template v-slot:extension>
                            <add :moduleid="module.id" v-on:reloadsubmodule="getSubmodules"></add>
                    </template>
          
          </v-toolbar>
                <v-card-text>                     
                   <v-simple-table class="mt-10">
                       <thead>
                           <tr>
                               <th>Icon</th>
                                <th>Name</th>
                                 <th>Url</th>
                                 <th></th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr v-for="submodule in submodules" :key="submodule.id">
                               <td>
                                   <v-icon>{{submodule.icon}}</v-icon>
                               </td>
                               <td>
                                   {{submodule.name}}
                               </td>
                               <td>
                                   {{submodule.url}}
                               </td>
                               <td class="d-flex justify-end">
                                <edit :submodule="submodule" v-on:reloadsubmodule="getSubmodules"></edit>
                                <deleteSubmodule :submodule="submodule" v-on:reloadsubmodule="getSubmodules"></deleteSubmodule>
                                <permissions :submodule="submodule"></permissions>
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
import * as submodule from '../../services/submodule_service'
import add from '../../components/submodules/add'
import edit from '../../components/submodules/edit'
import deleteSubmodule from '../../components/submodules/delete'
import permissions from '../../components/permissions/view'
export default {
    name:'viewsubModule',
    props:['module'],
    components:{
      add,
      edit,
      deleteSubmodule,
      permissions
    },
    data(){
        return{
            addModel:false,
            submodules:[],           
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        getSubmodules(){          
                this.loading = true
                submodule.getSubmodules(this.module.id).then(response=>{
                    this.loading = false
                    this.submodules = response.data.submodules
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