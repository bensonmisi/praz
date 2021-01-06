<template>

    <div>
         <v-btn block class="green white--text" @click="dialog=true"> Make Payment</v-btn>
           <v-dialog
                v-model="dialog"
                max-width="700"                
             >
             <v-card>
                 <v-card-title class="blue white--text">Make Payment</v-card-title>
                 <v-card-text>
                     
                        
                        <v-row>
                             <v-col sm="8">
                                {{description}}
                             </v-col>
                             <v-col sm="4">
                                 <div>
                                     <div>{{currency}}{{cost}}</div>
                                 </div>
                             </v-col>
                         </v-row>
                         <v-divider></v-divider>
                   
                        
                 </v-card-text>
                 <v-card-actions>
                     <v-btn rounded outlined color="primary" @click="initiate">inititate payment</v-btn>
                 </v-card-actions>
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
                  <v-snackbar
                v-model="snackbar"
                timeout=4000
                :color="color"
                top
                right
                
                >
                {{ message }}         
                </v-snackbar>   

                <v-dialog
                v-model="initiateDialog"
                max-width="700"
                hide-overlay
                >
                <v-card>
                    <v-card-title>
                        Confirm Payment
                    </v-card-title>
                    <v-card-text>
                       <v-row>
                           <v-col sm="6">
                               <div class="caption">Total Invoice</div>
                           </v-col>
                           <v-col sm="6">
                               <div class="caption red--text">{{currency}}{{cost}}</div>
                           </v-col>
                       </v-row>
                       <v-row>
                           <v-col sm="6">
                               <div class="caption"> Total Paid</div>
                           </v-col>
                           <v-col sm="6">
                               <div class="caption green--text">{{currency}}{{paid}}</div>
                           </v-col>
                       </v-row>
                        <v-row>
                           <v-col sm="6">
                               <div class="caption"> Balance Due</div>
                           </v-col>
                           <v-col sm="6">
                               <div class="caption red--text">{{currency}}{{cost - paid}}</div>
                           </v-col>
                       </v-row>
                       <v-divider></v-divider>
                       <v-row>
                           <v-col sm="6">Available Internal Funds </v-col>
                           <v-col sm="6">{{currency}}{{wallet}}</v-col>
                       </v-row>
                        <v-expansion-panels flat>
                        <v-expansion-panel>
                        <v-expansion-panel-header class="blue--text text--lighten-2">
                            How to top up your internal funds
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="red--text font-italic">Please deposite funds into our bank using the details below. Obtain the transaction reference number from your bank and click the UPDATE on the Bank transactions module </div>
                       <div>Bank: CBZ</div>
                       <div>Account Name : Procurement Regulatory Authority of Zimbabwe</div>
                       <div>Account number: {{accountnumber}}</div>
                       <div>Branch : Kwame Nkrumah</div>
                       <div>
                         <v-btn color="primary" depressed :to="{name:'Bankpayments'}">Goto My Bank transactions</v-btn>
                       </div>      </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>                    
                     </v-card-text>
                     <v-card-actions>
                         <v-btn outlined rounded color="red" @click="initiateDialog=false">Cancel</v-btn>
                         <v-spacer></v-spacer>
                         <v-btn outlined rounded color="green" @click="pay">Pay</v-btn>
                     </v-card-actions>
                </v-card>
                </v-dialog>                
    </div>
</template>
<script>
import * as notices from '../../services/notices'
export default {
    props:['id','cost','description','currency'],
    data(){
        return{
            dialog:false,
            loading:false,
            initiateDialog:false,
            due:'',
            wallet:'',
            snackbar:false,
            accountnumber:'',
            color:'',
            message:'',
            paid:''
        }
    },mounted() {
       console.log('mounted')   
    },methods:{
        initiate(){
           this.loading = true
           notices.initiate(this.id).then(response=>{
               this.loading = false
               this.due = response.data.due
               this.wallet = response.data.wallet
               this.paid = response.data.paid
               this.accountnumber = response.data.accountnumber
               this.initiateDialog = true
           }).catch(error=>{
               this.loading = false
                    this.snackbar = true
                    this.color="red"
                   this.message =error.response.data.message 
           })   
        },pay(){
           this.loading = true
           notices.pay(this.id).then(response=>{
               this.loading = false  
                 this.snackbar = true
                   this.initiateDialog = false
                   this.dialog = false
                    this.color="green"
                   this.message ='Successfully Made Payment ' 
                   this.$emit('paid')        
             
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