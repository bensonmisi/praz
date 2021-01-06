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
                <div>Refactor Transactions</div>
                <v-spacer></v-spacer>
                  <v-btn outlined rounded color="green" @click="process"> Refactor {{data.length}}</v-btn>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Invoice number</th>
                            <th>Total Invoiced</th>
                            <th>Total Receipted</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dt in data" :key="dt.id">
                            <td>
                                {{dt.invoicenumber}}
                            </td>
                            <td>
                                {{dt.totalinvoice}}
                            </td>
                             <td>
                                {{dt.totalpaid}}
                            </td>
                             <td>
                                {{dt.totalinvoice-dt.totalpaid}}
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
import * as  refactor from '../../../services/refactor_service'
export default {
    data(){
        return{
            items:[
                {
                text: 'Dashboard',
                disabled: false,
                href: '/administrator/dashboard',
                },
                {
                text: 'Refactor Transactions',
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
        Retrieve(){
            this.loading = true
            refactor.retrieve().then(response=>{
                this.loading = false
                this.data= response.data.data
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        },
        process(){           
           
            this.loading = true
            refactor.process().then(response=>{
                this.loading = false
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })

        }
    },mounted(){
        this.Retrieve();
    }
}
</script>