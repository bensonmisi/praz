<template>
   <div>
       <v-row>
                        <v-col  sm="2">
                            <div>{{invoice.created_at| formatDate }}</div>
                            <div>{{invoice.invoice_number}}</div>
                        </v-col>
                            <v-col  sm="8">
                                <div>
                                  <div class="font-weight-bold black--text">{{invoice.category.code}}</div>
                                  <div class="hidden-sm-and-down">{{invoice.category.name}}</div>
                                  <div>{{invoice.year}}</div>
                                </div>
                            </v-col>
                            <v-col  sm="2">
                                <div class="d-flex justify-between">
                                    <div class="subtitle-1">{{invoice.currency}}{{invoice.amount}}</div>
                                    <div>
                                        <v-btn icon small class="red--text" @click="removeItem(invoice.id)"><v-icon>fa fa-times</v-icon></v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                            
  </div> 
</template>
<script>
import * as invoicing from '../../../services/invoicing_service'
export default {
    props:['invoice'],
    methods:{
          removeItem(id){
             this.$emit('startloader')
            invoicing.removeItem(id).then(response=>{
              this.$emit('endloader')             
              this.$store.dispatch('setInvoice',response.data.data)
              
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