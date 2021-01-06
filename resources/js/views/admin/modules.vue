<template>
    <v-container>
        <v-card>
            <v-card-text>
                 <v-breadcrumbs
                    :items="items"
                    large
                    ></v-breadcrumbs>
            </v-card-text>
        </v-card>
         <v-card class="mt-10">
            <v-card-title>
                <div>System Modules</div>
                <v-spacer></v-spacer>
                <addModule v-on:reload="getModules"></addModule>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th></th>
                              
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="modules">
                        <tr  v-for="module in modules" :key="module.id">
                          <td><v-icon>{{module.icon}}</v-icon></td>
                           <td>{{module.name}}</td>
                              <td class="d-flex justify-end">
                               <editModule :module="module" v-on:reload="getModules"></editModule>
                                <deleteModule :module="module" v-on:reload="getModules"></deleteModule>
                                 <submodules :module="module"></submodules>
                            </td>
                        </tr>
                        </template>
                        <template v-else>
                           <tr>
                               <td colspan="3" class="text-center red--text">No Modues found</td>
                           </tr>
                        </template>
                    </tbody>
                </v-simple-table>

            </v-card-text>
         </v-card>

          <v-dialog
                v-model="loading"               
                persistent
                width="300"
                height="100"
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

                     <v-snackbar
                        v-model="snackbar"
                        timeout=2000
                        :color="color"
                        top
                        
                        >
                        {{ message }}         
                        </v-snackbar>

    </v-container>
</template>
<script>
import addModule from '../../components/modules/add'
import editModule from  '../../components/modules/edit'
import deleteModule from '../../components/modules/delete'
import submodules from '../../components/submodules/view'
import * as module from '../../services/module_service'

export default {
    components:{
       addModule,
       editModule,
       deleteModule,
       submodules
    },
    data(){
        return{
             items:[
                {
                text: 'Dashboard',
                disabled: false,
                href: '/administrator/dashboard',
                },
                {
                text: 'Modules',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            loading:true,
            color:'',
            modules:[],
            message:'',
            snackbar:false
        }
    },
    methods:{
        getModules(){
             this.loading=true
             
             module.getModules().then(response=>{
                this.loading = false
                this.modules = response.data.modules
             }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                        this.color="red"
             })
        }
    },mounted(){
        this.getModules();
    }
}
</script>