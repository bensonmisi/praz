<template>
    <div>
         <v-row>
                <v-col cols="12" v-if="currency=='ZWL'">
                    <v-card dark class="blue lighten-2" flat outlined @click="showMethod('ECOCASH')">
                        <v-card-text  class="text-center">
                            <div class="white--text subtitle-1">
                             Ecocash
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12"  v-if="currency=='ZWL'" @click="showMethod('ONEMONEY')">
                    <v-card dark class="orange" flat>
                        <v-card-text  class="text-center">
                             <div class="subtitle-1 white--text">
                                 One Money
                             </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
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
    v-model="confirmDialog"
    max-width="400"
    persistent
    >
    <v-card>
      <v-card-title>Confirm Payment</v-card-title>
      <v-card-text class="text-center">
        <p>Please check your phone and enter  {{mode}} wallet pin to complete transaction</p>
    
        <div>
        <v-btn color="green" rounded :loading="btnloading" outlined @click="confirm">I Completed Transaction</v-btn>
        </div>
      </v-card-text>
      
    </v-card>

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
                right
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import * as invoicing from '../../../../services/invoicing_service'
export default {
    props:['currency','total'],
    data(){
        return{
            loading:false,
            btnloading:false,
            snackbar:false,
            message:'',
            color:'',
            mode:'',
            mobileDialog:false,
            confirmDialog:false,
            valid:true,
            phone:'',
            amount:'',
            id:'',
            phoneRule:[v=> !!v || 'Phone number required'],
            amountRule:[
                         v=> !!v || 'Amount required',
                         v => (v && v <= this.total) || 'You cannot pay amount more that total Due:'+this.total,
                         v => (v && v <= 4000) || 'Please pay  in batches of  $4000'
                    ],
        }
    },methods: {
         showMethod(mode){
             this.mode = mode
             this.mobileDialog = true
         }  ,
              makepayment(){
                this.snackbar=false
            if(this.$refs.form.validate()){
                let formData = new FormData()
                formData.append('phone',this.phone)
                formData.append('amount',this.amount)
                formData.append('mode',this.mode)
                this.loading = true
                 invoicing.mobilepayment(formData).then(response=>{
                     this.loading = false
                      if(response.status == 200)
                            {
                              this.id = response.data.data
                              this.confirmDialog = true   
                            }
                 }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                   this.message =error.response.data.message  
                 })

            }
       },confirm(){
            this.btnloading = true
        invoicing.confirmPayment(this.id).then(response=>{
         this.confirmDialog = false
         this.mobileDialog = false
         this.btnloading = false
         this.snackbar=true
          this.message=response.data.message
          this.color="green"
         this.$store.dispatch('setInvoice',response.data.data)
         if(this.totalinvoiced == this.totalpaid){
           this.$router.push({name:'Dashboard'})
         }

       }).catch(error=>{
         this.btnloading = false
        this.snackbar = true;
        this.message =error.response.data.message
        this.color ="red"
       })
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