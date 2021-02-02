<template>
  <div>
   <v-card class="ma-5">

       <v-card-title>
           <div>Invoicing</div>
           <v-spacer></v-spacer>
           <add></add>
       </v-card-title>
       <v-card-text>
               <v-row class="grey darken-4">
                   <v-col  sm="2">
                       <div class="font-weight-bold white--text">Date</div>
                   </v-col>
                      <v-col  sm="8">
                       <div class="font-weight-bold white--text">Descriptin</div>
                     </v-col>
                     <v-col  sm="2">
                       <div class="font-weight-bold white--text">Amount</div>
                     </v-col>
               </v-row>

               <template v-if="getInvoices.length >0">
                     <div v-for="invoice in getInvoices" :key="invoice.id">
                       <item :invoice="invoice" v-on:startloader="loading=true" v-on:endloader="loading=false"></item>
                     </div>
                       <v-row>
                       <v-col sm="10">
                           <div class="headline">Total Due</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{total}}</div>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col sm="10">
                           <div class="headline">Total Paid</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{totalpaid}}</div>
                             <v-divider class="black"></v-divider>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col sm="10">
                           <div class="headline">Balance</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{total-totalpaid}}</div>
                             <v-divider class="black"></v-divider>
                       </v-col>
                   </v-row>
                   <div class="d-flex mt-2">
                    <print :inv="getInvoices[0].invoice_number"></print>
                    <v-spacer></v-spacer>
                    <payment :currency="finalcurrency" :total="balance"></payment>
                   </div>
               </template>
               <template v-else>

                   <div class="pa-15 text-center red--text">
                       <div class="subtitle-1">
                           No categories added to invoice as yet
                       </div>
                       
                   </div>
               </template>
       </v-card-text>

   </v-card>
   <loading :show="loading"></loading>
   <notification :color="color" :message="message" :snackbar="snackbar"></notification>          
  </div>    
</template>
<script>
import * as invoicing from '../../../services/invoicing_service'
import add from './add.vue'
import item from './item.vue'
import print from './print.vue'
import payment from './payment/options.vue'
import loading from '../../general/loading.vue'
import notification from '../../general/notification.vue'
export default {
    data(){
        return{
         loading:false,
         snackbar:false,
         color:'',
         message:''
        }
    },
    components:{
    add,
    item,
    loading,
    notification,
    print,
    payment
    },
    methods:{
      
        getInvoice(){
               this.loading = true
         invoicing.getInvoice().then(response=>{
            this.loading = false
            this.$store.dispatch('setInvoice',response.data.data)
         }).catch(error=>{
              this.loading= false
              this.snackbar = true
              this.color='red'
              this.message = error.response.data.message
         })
        },
          checkDocuments()
        {
           var uploaded=0;

               this.getDocuments.forEach((value,index)=>{
              if(value.uploaded){
                  uploaded++
              }
            })
               if(this.getDocuments.length ==0)
               {
                   this.$router.push({name:'Dashboard'}) 
               }
               else
               {
               if(this.getDocuments.length > uploaded){
                   this.$router.push({name:'Registration_Documents'})
               }
               }

              if(localStorage.getItem('invoice_tutorial')==null && !localStorage.getItem('invoice_tutorial'))
               {
                  this.tutorialDialog = true
               }
        }
    },mounted(){
        this.checkDocuments()
        this.getInvoice()
    },computed:{
        getDocuments(){
           return this.$store.state.companydocuments        
        },
        getInvoices(){
            return this.$store.state.invoice
        },
         total(){
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
         },
         finalcurrency(){
             return this.getInvoices[0].currency
         },balance(){
             return this.total -this.totalpaid
         }
    }
}
</script>