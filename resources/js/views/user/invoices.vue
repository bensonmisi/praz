<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                    My Invoices
                </v-card-title>
                <v-card-text>
            <v-simple-table>
                 
                    <thead>
                        <tr>
                         <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                         Invoice Number
                        </th>
                        <th class="text-left">
                         Category
                        </th>
                        <th class="text-left">
                         Cost
                        </th>
                        <th class="text-left">
                           Status
                        </th>
                         <th class="text-center">
                         
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in invoices"
                        :key="item.id"
                        >
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.invoice_number }}</td>
                        <td>{{ item.category.code }}</td>
                         <td>{{ item.cost}}</td>
                        <td>{{ item.status}}</td>
                        <td>
                              <v-btn rounded outlined color="primary" @click="printInvoice(item.invoice_number)">Print</v-btn>
                        </td>
                        </tr>
                    </tbody>
                
                </v-simple-table>   
                </v-card-text>
            </v-card>
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
import * as invoices from '../../services/invoices'

export default {
    data(){
        return{
            invoices:[],
            loading:false
        }
    },mounted() {
       this.getInvoices() 
    },methods:{
        getInvoices(){
            this.loading = true
            invoices.getInvoices().then(response=>{
                this.loading = false
                this.invoices = response.data.data
            }).catch(error=>{

            })
        },
        printInvoice(id){
            this.loading = true
            invoices.downloadInvoice(id).then(response=>{
             this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', id+'.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
             this.loading = false
             console.log(error)
         })
        }
    }
}
</script>