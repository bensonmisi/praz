<template>
    <div>
          <v-card dark class="green" flat link @click="getInternal">
                        <v-card-text  class="text-center">
                            <div>
                                <div class="heading white--text">
                            Bank Payments
                                </div>
                                <div>
                                    Zipit,Transfers,Direct Deposits
                                </div>
                            </div>
                        </v-card-text>
         </v-card>
         <v-dialog
            v-model="internalDialog"
           
            max-width="600px"
          >
            <v-card>
        <v-card-title>
            <div class="heading d-flex">
                      <div>{{currency}}</div>
                      <div> {{balance}}</div>
                     </div>
        
            <v-spacer></v-spacer>
             <v-btn icon @click="internalDialog=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <div>
              Are you sure you want to use funds you  transfered into our account to settle your current supplier registreation  invoice 
            <div class="text-center">
              <v-btn class="red white--text" @click="internalDialog=false">Cancel</v-btn>
              <v-btn class="green white--text" @click="internalRegistration">Proceed</v-btn>
            </div>
            </div>
          
           
        </v-card-text>
            </v-card>
     </v-dialog>
           <v-dialog
            v-model="referenceDialog"
            persistent
            max-width="600px"
          >
          <v-form  ref="reform" lazy-validation>
            <v-card>
              <v-card-title>Enter Bank Reference Number</v-card-title>
              <v-card-text>           
                
               
                  <v-text-field
                         v-model="refnumber"
                         label="Bank Reference Number"
                          outlined
                         :rules="refRule"
                          >
                  </v-text-field>
           
                
                  
              </v-card-text>
              <v-card-actions>
                <v-btn rounded depressed class="red white--text" @click="referenceDialog= false">Cancel</v-btn>
                <v-spacer></v-spacer>                   
                    <v-btn rounded depressed class="green white--text" @click="confirm">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-dialog>

                 <v-dialog
            v-model="uploadDialog"
            persistent
            max-width="600px"
          >
          <v-form ref="reform" lazy-validation>
            <v-card>
              <v-card-title>Upload Proof Of Payment</v-card-title>
              <v-card-text>           
                <div class="red white--text pa-5">
                  <div>Reference number was not found</div>
                  <ol>
                      <li>Please contact your bank and ask for a reference number that usually starts with the bank initials eg NEDBP20027A01807 or CABSP20027A02060</li>
                      <li>If you are registering for a foreign company  please attach a visible proof of  payment</li>
                      <li>If you paid using ZIPIT  please call your bank and ask of 6 digit stan code for your transaction</li>
                  </ol>

                </div>
               
                  <v-text-field

                         v-model="refnumber"
                         label="Reference Number"
                          outlined
                         :rules="refRule"
                         class="mt-5"
                          >
                  </v-text-field>
           
                   <v-file-input                
                    show-size
                    counter
                    outlined
                    label="Attach Proof of Payment"
                    accept=".pdf"
                    v-model="fileupload"
                    :rules="fileRule"
                    >
                </v-file-input>
              
               
                  <v-text-field
                         v-model="bank"
                         label="Bank name"
                          outlined
                         :rules="bankRule"
                          >
                  </v-text-field>
                
                  
              </v-card-text>
              <v-card-actions>
                <v-btn rounded class="red white--text" @click="referenceDialog= false">Cancel</v-btn>
                <v-spacer></v-spacer>
                   
                    <v-btn rounded class="green white--text" @click="uploadFile">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-dialog>

          <v-dialog
            v-model="transferDialog"
            persistent
            max-width="600px"
          >
          <v-card>
            <v-card-title> Upload Success</v-card-title>
            <v-card-text class="text-center">
              
                <h1>Success</h1>
                <div>
                  <v-icon x-large>mdi-check</v-icon>
                </div>
                <div>
                  You proof of payment was successfully uploaded your registration will be approved manually. Please note  this will be processed only when funds reflect in our account,Do you wish to upload another proof of payment
                </div>

                 <div>
                  <v-btn outlined class="green white--text" @click="referenceDialog=true">Yes</v-btn> <v-btn outlined class="red white--text" :to="{name:'Dashboard'}">NO</v-btn>
                 </div>

            </v-card-text>
          </v-card>
       </v-dialog>

         <v-dialog
            v-model="wrongDialog"
            persistent
            max-width="600px"
          >
          <v-card>
            <v-card-title>Error</v-card-title>
            <v-card-text class="text-center red--text">
              
               
                <div>
                  <v-icon x-large class="red--text">mdi-warning</v-icon>
                </div>
                    <div>
                        {{info}}
                    </div>
                 <div>
                  <v-btn outlined class="red white--text" @click="wrongDialog=false">OK</v-btn>
                 </div>

            </v-card-text>
          </v-card>
       </v-dialog>

          <v-dialog v-model="loading" hide-overlay persistent width="300">
                <v-card height="200">
                    <v-card-text class="text-center pa-20">                        
                        <div  class="mt-10">Please wait .... </div>
                        <div class="mt-5">
                         <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" timeout=3000 :color="color" top right>
                {{ message }}         
         </v-snackbar>
    </div>
</template>
<script>
import * as invoicing  from '../../../../services/invoicing_service'
export default {
    props:['currency'],
    data(){
        return{
            loading:false,
            snackbar:false,
            internalDialog:false,
            referenceDialog:false,
            transferDialog:false,
            uploadDialog:false,
            wrongDialog:false,
            valid:true,
            color:'',
            message:'',
            balance:'',
            bank:'',
            info:'',
            refnumber:'',
            bankRule:[v=> !!v || 'Enter Bank Name'],
            phoneRule:[v=> !!v || 'Phone number required'],
            refRule:[v=> !!v || 'Reference number required'],
            amountRule:[
                         v=> !!v || 'Amount required',
                         v => (v && v <= this.total) || 'Amount must be less than'+this.total,
                    ],
            fileRule:  [
               v => !v|| v.size < 5000000 || 'File size should be less than 5 MB!',
               v => !!v || 'File is required is required',
               ],
           fileupload:null,
        } 
    },
    methods:{
         getInternal(){
              this.loading = true
              invoicing.getInternalBalance(this.currency).then(response=>{
                 this.balance = response.data.data     
                 this.loading = false
                 if(this.balance > 0)
                 {
                    this.internalDialog = true
                 }
                 else
                 {
                     this.referenceDialog = true
                 }
      

       }).catch(error=>{
         this.loading = false
        this.snackbar = true
        this.color="red"
       this.message =error.response.data.message  
       })
      },
    internalRegistration(){
        this.loading = true
        invoicing.registerInternalBalance().then(response=>{
        this.confirmDialog = false
        this.internalDialog = false
         this.loading = false
        this.$store.dispatch('setInvoice',response.data.data)
         if(this.totalinvoiced == this.totalpaid){
           this.$router.push({name:'Dashboard'})
         }
        }).catch(error=>{
          
             this.loading = false
            this.snackbar = true
            this.color="red"
          this.message =error.response.data.message  
        })
      },
      confirm(){
          if(this.$refs.reform.validate()){
              this.loading = true
                let formData = new FormData()
                formData.append('refnumber',this.refnumber)
                invoicing.claimInternalBalance(formData).then(response=>{
                 this.balance = response.data.data     
                 this.loading = false
                   console.log(response.data.message)
                 if(response.data.message =='WRONG_ACCOUNT')
                 {
                     this.wrongDialog = true
                     this.info = "Transfer was found however You made an error of  depositing into  our REFUNDABLE ACCOUNT 10721064850030 which is meant for Bid Security Payments and can not be used for supplier registration process. Please request for a refund and  deposite into our CBZ 10721064850020 account";
                 }
                 else
                 {
                    if(this.balance > 0)
                    {
                        this.internalDialog = true
                    }  
                 } 
                }).catch(error=>{
                    this.loading = false
                    if(error.response.data.message=='NOT_FOUND'){
                      
                        this.uploadDialog = true
                    }
                  
                })
          }
      },
      uploadFile(){
              if(this.$refs.reform.validate()){
              this.loading = true
                let formData = new FormData()
                formData.append('refnumber',this.refnumber)
                formData.append('fileupload',this.fileupload)
                formData.append('bank',this.bank)
                invoicing.confirmTransaction(formData).then(response=>{
                 this.snackbar=true
                 this.color="green"
                 this.message  = response.data.message
                 this.$router.push({name:'Dashboard'})
                }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                   this.message =error.response.data.message  
                })
          }
      }
    },computed:{
           getInvoices(){
            return this.$store.state.invoice
        },
         totalinvoiced(){
             let cost = 0;
             this.getInvoices.forEach((value,index)=>{
                 cost = cost+value.amount
             })
             return cost;
         },
            totalpaid(){
             let cost = 0;
             this.getInvoices[0].receipts.forEach((value,index)=>{
                 cost = cost+value.amount
             })
             return cost;
         }
        }
}
</script>