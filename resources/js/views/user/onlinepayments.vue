<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                    Bank Payments
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
                            Type
                            </th>
                            <th class="text-left">
                            Amount
                            </th>
                            <th class="text-left">
                            Mode
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
                        v-for="item in payments"
                        :key="item.id"
                        >
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.invoice_number }}</td>
                        <td>{{ item.type}}</td>
                         <td>{{ item.amount}}</td>  
                         <td>{{ item.mode}}</td>    
                        <td>{{ item.status}}</td> 
                        <td>
                          <v-btn v-if="item.status=='PENDING'" rounded outlined color="primary" @click="checkpayment(item.id)">check</v-btn>
                     
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
import * as general from '../../services/general_service'

export default {
    data(){
        return{
           payments:[],
            loading:false,
             snackbar:false,
        }
    },mounted() {
       this.getPayments() 
    },methods:{
        getPayments(){
            this.loading = true
            general.getOnlinepayments().then(response=>{
                this.loading = false
                this.payments = response.data.payments
            }).catch(error=>{
                this.loading = false
                this.snackbar = true
              this.color="red"
              this.message =error.response.data.message
            })
        },
        checkpayment(id){
            this.loading = true
            general.checkPayment(id).then(response=>{
                this.loading = false
                this.payments = response.data.payments
            }).catch(error=>{
                this.loading = false
                this.snackbar = true
              this.color="red"
              this.message =error.response.data.message
            })   
        }
    }
}
</script>