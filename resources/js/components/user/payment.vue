<template>
<div>
    <v-btn
      color="green"
      dark
      rounded
      @click.stop="dialog = true"
    >
     Make Payment
    </v-btn>

   <v-dialog
      v-model="dialog"
      max-width="700"
    
    >
      <v-card>
        <v-card-title class="blue lighten-1 white--text">
          <div>Payment Options</div>
          <v-spacer></v-spacer>
          <div>{{currency}}{{total}}</div>
        </v-card-title>

        <v-card-text>
          <v-row>
                <v-col cols="12" sm="6" v-if="currency=='ZWL'">
                    <v-card dark class=" blue" @click="showMobile('ecocash')">
                        <v-card-text  class="text-center">
                            <div class="heading white--text">
                             Ecocash
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12" sm="6" v-if="currency=='ZWL'">
                    <v-card dark class="orange"  @click="showMobile('onemoney')">
                        <v-card-text  class="text-center">
                             <div class="heading white--text">
                                 One Money
                             </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
                <v-row>
                <v-col cols="12" sm="6">
                    <v-card dark class="green" @click="getInternal">
                        <v-card-text  class="text-center">
                            <div>
                                <div class="heading white--text">
                           Internal Balance
                                </div>
                                <div>
                                    Zipit,Transfers,Direct Deposits
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12" sm="6" v-if="currency=='USD'">
                    <v-card  dark class="orange" @click="onlinepayment">
                        <v-card-text class="text-center">
                            <div>
                                <div class="heading white--text">
                           Online payment gateway
                                </div>
                                <div>
                                    Visa,Master Card
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>


       </v-card-text>       
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="mobileDialog"
      max-width="290"
    >
    <v-form
     ref="form"
     v-model="valid"
    lazy-validation
    >
      <v-card>
        <v-card-title class="headline">
           {{mode}}
        </v-card-title>

        <v-card-text>
            <v-text-field
                    outlined
                    label="Ecocash Number"
                    prepend-icon="fa fa-phone"
                    v-model="phone"
                    :rules="phoneRule"
                    >
            </v-text-field>
             <v-text-field
                    outlined
                    label="Amount"
                    prepend-icon="fa fa-dollar"
                    v-model="amount"
                    :rules="amountRule"
                    >
            </v-text-field>
         </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            outlined
            rounded
            @click="mobileDialog = false"
          >
            Close
          </v-btn>

          <v-btn
            color="green darken-1"
             outlined
             rounded
            @click="makepayment"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
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
                  <v-dialog
            v-model="confirmDialog"
            persistent
            max-width="600px"
          >
            <v-card>
        <v-card-title>
          <span>Confirm Payment</span>
         
        </v-card-title>
        <v-card-text>
                  <p class="text-lg font-weight-bold">1 PLEASE CHECK YOUR PHONE AND ENTER YOUR PIN TO AUTHORIZE THE TRANSACTION</p>
                  <p class="text-lg font-weight-bold">2 WHEN YOU HAVE AUTHORIZED THE TRANSACTION PLEASE PRESS BUTTON BELOW TO COMPLETE THE TRANSACTION</p>
                  <p class="text-lg font-weight-bold">3 IF PRESSING THE BUTTON BELOW DOES NOT COMPLETE THE TRANSACTION PLEASE DAIL Dial *151*2*4# ENTER YOUR ECOCASH PIN AND THEN PRESS THE BUTTON BELOW AGAIN</p>
                   <v-btn
            color="green darken-1 white--text"
            v-if="confirmbtn"
            @click="confirmPayment"
          >
            Confirm Payment
          </v-btn>
        </v-card-text>
            </v-card>
     </v-dialog>
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
            <div class="text-center" v-if="balance > 0">
              Are you sure you want to use funds you  transfered into our account to settle your current supplier registreation  invoice 
            <div class="text-center">
              <v-btn class="red white--text" @click="internalDialog=false">Cancel</v-btn>
              <v-btn class="green white--text" @click="internalRegistration">Proceed</v-btn>
            </div>
            </div>
            <div class="text-center" v-else>
               <p class="red--text">INSUFFICIENT FUNDS</p>
               <div>If you have done a bank transfer, direct deposite,zipit please get transaction reference number from your bank and click button below</div>
                <v-btn rounded class="blue white--text" @click="claim">Claim bank transfer</v-btn>
            </div>
           
        </v-card-text>
            </v-card>
     </v-dialog>
          <v-dialog
            v-model="referenceDialog"
            persistent
            max-width="600px"
          >
          <v-form v-model="reform" ref="reform" lazy-validation>
            <v-card>
              <v-card-title>Claim bank transfer</v-card-title>
              <v-card-text>
                  <v-row v-if="confirmref">
                  <v-col cols="12" class="mt-2">
                  <div class="pa-10 red lighten-3 white--text" >
                      We could not find your reference number,If you have correctly capture your reference number click CONFIRM and our system will put your registration on AWAITING MODE and it will automatically change the status to APPROVED once the transaction as come through
                  </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="mt-2">
                  <v-text-field
                         v-model="refnumber"
                         label="Reference Number"
                          outlined
                         :rules="refRule"
                          >
                  </v-text-field>
                  </v-col>
                </v-row>
              
                <v-row  v-if="confirmref">
                  <v-col cols="12" class="mt-2">
                   <v-file-input                
                    show-size
                    counter
                    outlined
                    label="Attach Proof of Payment"
                    prepend-icon="mdi-pdf-box"
                    accept=".pdf"
                    v-model="fileupload"
                    :rules="fileRule"
                    >
                </v-file-input>
                  </v-col>
                </v-row>
                <v-row  v-if="confirmref">
                  <v-col cols="12" class="mt-2">
                  <v-text-field
                         v-model="bank"
                         label="Bank name"
                          outlined
                         :rules="bankRule"
                          >
                  </v-text-field>
                  </v-col>
                </v-row>
                  
              </v-card-text>
              <v-card-actions>
                <v-btn rounded class="red white--text" @click="referenceDialog= false">Cancel</v-btn>
                <v-spacer></v-spacer>
                    <v-btn rounded class="green white--text" @click="claimRef" v-if="!confirmref">Submit</v-btn>
                    <v-btn rounded class="green white--text" @click="confirm" v-else>Confirm</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-dialog>
      <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
       </v-snackbar>
       <v-dialog
            v-model="successDialog"
            persistent
            max-width="600px"
          >
          <v-card>
            <v-card-title>Success Completion</v-card-title>
            <v-card-text class="text-center">
              
                <h1>Successfull</h1>
                <div>
                  <v-icon x-large>mdi-check</v-icon>
                </div>
                <div>
                     {{message}}
                </div>

                 <div>
                   <v-btn outlined class="green white--text" :to="{name:'Dashboard'}">OK</v-btn>
                 </div>

            </v-card-text>
          </v-card>
       </v-dialog>
          <v-dialog
            v-model="transferDialog"
            persistent
            max-width="600px"
          >
          <v-card>
            <v-card-title> Upload Success</v-card-title>
            <v-card-text class="text-center">
              
                <h1>Successfull</h1>
                <div>
                  <v-icon x-large>mdi-check</v-icon>
                </div>
                <div>
                  You proof of payment was successfully uploaded,Do you wish to upload another proof of payment
                </div>

                 <div>
                  <v-btn outlined class="green white--text" @click="referenceDialog=true">Yes</v-btn> <v-btn outlined class="red white--text" :to="{name:'Dashboard'}">NO</v-btn>
                 </div>

            </v-card-text>
          </v-card>
       </v-dialog>
</div>
</template>
<script>
import * as invoicing  from '../../services/invoicing_service'
export default {
    props:['total','currency'],
    data(){
        return{
            dialog:false,
            mobileDialog:false,
            confirmDialog:false,
            internalDialog:false,
            transferDialog:false,
            referenceDialog:false,
            successDialog:false,
            confirmref:false,
            loading:false,
            balance:0,
            mode:'',
            phone:'',
            amount:'',
            snackbar:false,
            color:'',
            message:'',
            valid:true,
            online:'',
            refnumber:'',
            reform:true,
            bank:'',
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
           confirmbtn:true
            
        }
    },methods:{
      claimRef(){
          if(this.$refs.reform.validate()){
              this.loading = true
                let formData = new FormData()
                formData.append('refnumber',this.refnumber)
                invoicing.claimInternalBalance(formData).then(response=>{
                    invoicing.getInternalBalance(this.currency).then(response=>{
                       this.balance = response.data.balance
                       this.referenceDialog=false
                       this.loading = false
                       this.internalDialog = true
                    
                    })
                }).catch(error=>{
                    this.loading = false
            this.confirmref = true
                })
          }
      },
      claim(){
               this.referenceDialog = true
      },
      confirm(){
         if(this.$refs.reform.validate()){
              this.loading = true
                let formData = new FormData()
                formData.append('refnumber',this.refnumber)
                formData.append('fileupload',this.fileupload)
                formData.append('bank',this.bank)
                invoicing.confirmTransaction(formData).then(response=>{
                 this.confirmref= false
                 this.referenceDialog = false
                 this.transferDialog = true
                 this.loading = false
                 this.refnumber=""
                 this.fileupload = null
                 this.bank=""
                 this.message  = response.data.message
                }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                   this.message =error.response.data.message  
                })
          }
      },
      internalRegistration(){
        this.loading = true
        invoicing.registerInternalBalance().then(response=>{
        this.confirmDialog = false
        this.internalDialog = false
         this.loading = false
           if(this.balance>=this.total){
            this.successDialog = true
         }else
         {
         this.$emit('reloadInvoice')
         }
        }).catch(error=>{
          
             this.loading = false
            this.snackbar = true
            this.color="red"
          this.message =error.response.data.message  
        })
      },
      getInternal(){
       this.loading = true
       invoicing.getInternalBalance(this.currency).then(response=>{
        this.balance = response.data.balance
         this.loading = false
        this.internalDialog = true

       }).catch(error=>{
         this.loading = false
        this.snackbar = true
        this.color="red"
       this.message =error.response.data.message  
       })
      },
       showMobile(mode){
           this.mode = mode
           this.mobileDialog = true
       },
       makepayment(){
            if(this.$refs.form.validate()){
                let formData = new FormData()
                formData.append('phone',this.phone)
                formData.append('amount',this.amount)
                formData.append('mode',this.mode)
                this.loading = true
                 invoicing.mobilepayment(formData).then(response=>{
                      if(response.status == 200)
                            {
                            this.mobileDialog = false
                            this.dialog = false
                            this.confirmDialog = true
                            this.online = response.data
                            }
                 }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                   this.message =error.response.data.message  
                 })

            }
       },
       confirmPayment(){
       this.loading = true
       this.confirmbtn =false
        invoicing.confirmPayment(this.online.id).then(response=>{
         this.confirmDialog = false
         this.loading = false
          if(this.total==this.amount){
           this.successDialog = true
         }else
         {
         this.$emit('reloadInvoice')
         }


       }).catch(error=>{
         this.loading = false
        this.snackbar = true;
        this.message ="Failed to complete please try again"
        this.color ="red"
       })
      },
      onlinepayment(){
        this.loading = true
        invoicing.paynowPayments().then(response=>{
          this.loading = false
          window.open(response.data.link)
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