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
                <div>Gazates</div>
                <v-spacer></v-spacer>
                <add v-on:reload="Retreive"></add>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Suppliers</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="data">
                        <tr v-for="dt in data" :key="dt.id" class="pa-3">
                            <td>
                                {{dt.name}}
                            </td>
                             <td>
                                {{dt.count}}
                            </td>
                           
                            <td class="d-flex justify-end pt-2 pb-2">
                               <edit :data="dt" v-on:reload="Retreive"></edit>
                                <destroy :data="dt" v-on:reload="Retreive"></destroy>
                                 <v-btn  fab small depressed color="green" @click="download(dt.id)"><v-icon>fa fa-download</v-icon></v-btn>
                            </td>
                        </tr>
                        </template>
                        <template v-else>
                             <tr>
                                 <td class="text-center red--text pa-5" colspan="4">No Gazzates</td>
                             </tr>
                        </template>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>
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
    </v-container>
</template>
<script>
import * as  api  from '../../services/gazzate_service'
import add from '../../components/gazzate/add'
import edit from '../../components/gazzate/edit'
import destroy from '../../components/gazzate/destroy'
export default {
    components:{
     add,
     edit,
     destroy
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
                text: 'Gazzates',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            data:[]
        }
    },methods:{
        Retreive(){
            this.loading = true
            api.retrive().then(response=>{
                this.loading = false
                this.data = response.data.data
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
                this.snackbar=true
                this.color="red"
            })
        },
        download(id){
            this.loading = true
            api.download(id).then(response=>{
                    this.loading = false
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'gazzate.csv');
                     document.body.appendChild(fileLink);
                     fileLink.click();
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
                this.snackbar=true
                this.color="red"
            })
        }
    },mounted(){
        this.Retreive();
    }
}
</script>