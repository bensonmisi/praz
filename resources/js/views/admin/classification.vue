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
                <div>Classifiations</div>
                <v-spacer></v-spacer>
                <add v-on:reload="getClassification"></add>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="classification in classifications" :key="classification.id">
                            <td>
                                {{classification.name}}
                            </td>
                            <td>
                                {{classification.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <edit :classification="classification" v-on:reload="getClassification"></edit>
                                <destroy :classification="classification" v-on:reload="getClassification"></destroy>
                                
                            </td>
                        </tr>
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
import * as  classification from '../../services/classification_service'
import add from '../../components/classification/add'
import edit from '../../components/classification/edit'
import destroy from '../../components/classification/delete'
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
                text: 'Classifications',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            classifications:[]
        }
    },methods:{
        getClassification(){
            this.loading = true
            classification.retrive().then(response=>{
                this.loading = false
                this.classifications = response.data.classifications
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getClassification();
    }
}
</script>