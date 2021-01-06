<template>
    
        <tr>

             <td>{{ company.id }}</td>
                    <td>{{ company.regnumber }}</td>
                    <td>{{ company.name }}</td>
                    <td><v-btn outlined color="green" @click="show">View</v-btn></td>
                     <v-dialog
                    v-model="showDialog"
                    max-width="1000"
                    >
                    <v-card>
                        <v-card-title>
                            <div>Account Details</div>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="showDialog=false"><v-icon>fa fa-times</v-icon></v-btn>
                        </v-card-title>
                        <v-card-text>
                           <v-tabs
                            v-model="tab"
                            left
                            icons-and-text
                            >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab dark href="#tab-1">
                              Company Details
                              <v-icon>fa fa-institution</v-icon>
                            </v-tab>

                            <v-tab href="#tab-2">
                               Users
                                <v-icon>fa fa-users</v-icon>
                            </v-tab>
                            <v-tab href="#tab-3">
                               Documents
                                <v-icon>fa fa-file</v-icon>
                            </v-tab>
                          
                          
                            </v-tabs>

                            <v-tabs-items v-model="tab">                           
                            <v-tab-item value="tab-1" >                               
                               <profile :comp="comp"></profile>                                                        
                            </v-tab-item>
                             <v-tab-item value="tab-2" >
                                <users :comp="comp"></users>
                            </v-tab-item>

                             <v-tab-item value="tab-3">
                               <documents :comp="comp"></documents> 
                             </v-tab-item>
                            </v-tabs-items>

                            <h5 class="headline mt-5">Transactions</h5>

                              <v-tabs
                            v-model="tab2"
                            left
                            icons-and-text
                            >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab dark href="#tab-4">
                             Invoices
                              <v-icon>fa fa-file</v-icon>
                            </v-tab>

                            <v-tab href="#tab-5">
                               Receipts
                                <v-icon>fa fa-file</v-icon>
                            </v-tab>
                            <v-tab href="#tab-6">
                               Online payments
                                <v-icon>fa fa-dollar</v-icon>
                            </v-tab>
                           <v-tab href="#tab-7">
                               Transfers
                                <v-icon>fa fa-exchange</v-icon>
                            </v-tab>
                            <v-tab href="#tab-8">
                               RTGS
                                <v-icon>fa fa-credit-card</v-icon>
                            </v-tab>
                              <v-tab href="#tab-9">
                              Registrations
                                <v-icon>fa fa-check</v-icon>
                            </v-tab>
                            </v-tabs>
                                <v-tabs-items v-model="tab2">  
                                     <v-tab-item value="tab-4">
                                     <invoices :comp="comp"></invoices>
                                     </v-tab-item>  
                                     <v-tab-item value="tab-5">
                                     <receipts :comp="comp"></receipts>
                                     </v-tab-item>  
                                     <v-tab-item value="tab-6">
                                     <onlinepayments :comp="comp"></onlinepayments>
                                     </v-tab-item>
                                       <v-tab-item value="tab-7">
                                     <banktransfers :comp="comp"></banktransfers>
                                     </v-tab-item>  
                                      <v-tab-item value="tab-8">
                                     <rtgs :comp="comp"></rtgs>
                                     </v-tab-item>
                                      <v-tab-item value="tab-9">
                                     <registrations :comp="comp"></registrations>
                                     </v-tab-item>
                                </v-tabs-items>
                          

                        </v-card-text>
                    </v-card>
                    </v-dialog>


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
         </tr>
        
                
    
    
</template>
<script>
import * as company from '../../services/company_service'
import profile from './profile/show'
import users from './user/show'
import documents from './documents/show'
import invoices from './invoices/show'
import receipts from './receipts/show'
import onlinepayments from './onlinepayments/show'
import banktransfers from './transfers/show'
import rtgs from './rtgs/show'
import registrations from './registrations/show'

export default {
     props:['company'],
     components:{
       profile,
       users,
       documents,
       invoices,
       receipts,
       onlinepayments,
       banktransfers,
       rtgs,
       registrations
     },
      data(){
          return{
              showDialog:false,
              tab:null,
              tab2:null,
              comp:'',
              loading:false
          }
      },methods:{
          show(){
              
                this.loading = true
             company.showCompany(this.company.id).then(response=>{
              this.loading = false
              this.comp= response.data.company
              this.$store.dispatch('setRegyear',response.data.years)
              this.$store.dispatch('setCategorylist',response.data.category)
              this.showDialog = true
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