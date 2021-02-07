<template>
    <div>
         <v-btn rounded outlined color="green" @click="getInvoice">View</v-btn>
         <v-dialog v-model="showModel" max-width="1200">
             <template v-if="invoices.length >0">
             <v-card >
                 <v-card-title><div>Invoice Details</div>
                 <v-spacer></v-spacer>
                 <div class="d-flex">
                 <search :invoicenumber="invoices[0].invoice_number" v-on:reload="getInvoice"></search>  
                 <v-btn icon @click="showModel=false"><v-icon>fa fa-times</v-icon></v-btn>
                 </div>
                 </v-card-title>
                 <v-card-text>
                  
                     <v-simple-table>
                          <thead>
                                    <tr>
                                    <th class="text-left">
                                    Invoice number
                                    </th>
                                    <th class="text-left">
                                    Category
                                    </th>
                                    <th class="text-left">
                                    Year
                                    </th>
                                    <th class="text-left">
                                    Cost
                                    </th>
                                    </tr>
                          </thead>
                          <tbody>
                              <tr v-for="inv in invoices" :key="inv.invoice_number">
                                  <td>{{inv.invoice_number}}</td>
                                   <td>{{inv.category.code}}</td>
                                   <td>{{inv.year}}</td>
                                   <td>{{inv.cost}}</td>
                              </tr>
                             
                          </tbody>
                     </v-simple-table>
                      <div class="title mt-5 ml-1"><b>Payments</b></div>
                      <v-simple-table>
                          <thead>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                    Receipt number
                                    </th>
                                    <th class="text-left">
                                    Description
                                    </th>
                                    <th class="text-left">
                                    Method
                                    </th>
                                    <th class="text-left">
                                    Cost
                                    </th>
                                    </tr>
                          </thead>
                          <tbody>
                              <template v-if="invoices[0].receipts.length>0">
                               <tr v-for=" rpt in invoices[0].receipts" :key="rpt.id">
                                  <td>{{rpt.receiptnumber}}</td>
                                   <td>{{rpt.description}}</td>
                                   <td>{{rpt.method}}</td>
                                   <td>{{rpt.amount}}</td>
                              </tr>
                              </template>
                              <template v-else>
                                  <tr>
                                      <td colspan="4" class="text-center red--text">No Payments Found</td>
                                  </tr>
                              </template>
                          </tbody>
                      </v-simple-table>
                      <div class="title mt-5 ml-1"><b>Reference Numbers</b></div>
                      <v-simple-table>
                          <thead>
                          <tr>
                              <th>Reference Number</th><th>Description</th><th>Account number</th><th>Currency</th><th>Amount</th><th>Status</th><th>Claimee</th><th></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="transfer in invoices[0].transfers" :key="transfer.id">
                              <td>{{transfer.referencenumber}}</td>
                              <td>
                                  <template v-if="transfer.transaction">
                                      {{transfer.transaction.description}}
                                  </template>
                                  <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>
                              </td>
                              <td>
                                  <template v-if="transfer.transaction">
                                      {{transfer.transaction.accountnumber}}
                                  </template>
                                   <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>

                              </td>
                              <td>
                                  <template v-if="transfer.transaction">
                                      {{transfer.transaction.currency}}
                                  </template>
                                    <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>
                              </td>
                              <td>
                                  <template v-if="transfer.transaction">
                                      {{transfer.transaction.amount}}
                                  </template>
                                    <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>
                              </td>
                              <td>
                                  <template v-if="transfer.transaction">
                                      {{transfer.transaction.status}}
                                  </template>
                                     <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>
                              </td>
                               <td>
                                  <template v-if="transfer.transaction">
                                      <template v-if="transfer.transaction.company">
                                     <div>{{transfer.transaction.company.name}}</div>
                                     <div>{{transfer.transaction.company.regnumber}}</div>
                                      </template>
                                  </template>
                                     <template v-else>
                                      <div class="text-center red--text">
                                     Not Found
                                      </div>
                                  </template>
                              </td>
                              <td></td>
                          </tr>
                          </tbody>
                      </v-simple-table>
                       <div class="title mt-5 ml-1"><b>Proof of Payment</b></div>
                       <v-simple-table>
                           <thead>
                               <tr>
                                  <th>Bank</th>
                                  <th>Action</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr v-for="rtg in invoices[0].rtgs" :key="rtg.invoice_number">
                                   <td>{{rtg.name}}</td>
                                   <td><v-btn rounded outlined color="primary" small @click="showPop(rtg.filename)">Download</v-btn></td>
                               </tr>
                           </tbody>
                       </v-simple-table>

                 </v-card-text>
             </v-card>
             </template>
         </v-dialog>
          <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"               
                >
                <v-card
                 height="200"
                >
                    <v-card-text class="text-center pa-20">
                        
                        <div  class="mt-10">
                    Please wait ....
                        </div>
                        <div class="mt-5">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                    >
                </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>
                </v-dialog>
                   <v-snackbar
                v-model="snackbar"
                timeout=3000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import search from './search.vue'
import * as rtgs from '../../services/rtgs_service'
export default {
    props:['invoice'],
    components:{
        search
    },
    data(){
        return{
            showModel:false,
            loading:false,
            snackbar:false,
            color:"",
            message:"",
            invoices:[]
        }
    },methods: {
        getInvoice(){
          this.loading = true
          rtgs.retrieveInvoice(this.invoice.invoice_number).then(response=>{
              this.loading = false
              this.invoices = response.data.data
              this.showModel = true
          }).catch(error=>{
              this.loading = false
              this.snackbar = true
              this.color="red"
              this.message=error.response.data.message
          })
        },
        showPop(filename){
           var url = this.$store.state.serverUrl+filename
           window.open(url, "_blank");
       }
    },
}
</script>