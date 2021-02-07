<template>
    <div>
       <v-btn outlined rounded @click="getInvoice">OPEN</v-btn>
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            >
            <v-card>
                  <v-toolbar
                    dark
                    color="primary"
                    >                   
                    <v-toolbar-title>Invoice Approval</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                       <v-btn
                        icon
                        dark
                        @click="dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th>Invoice Number</th>
                                    <th>Year</th>
                                    <th>Currency</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="invoice in invoices" :key="invoice.invoie_number">
                                  <td>{{invoice.invoice_number}}</td>
                                  <td>{{invoice.year}}</td>
                                  <td>{{invoice.currency}}</td>
                                  <td>{{invoice.cost}}</td>
                                  <td>{{invoice.paid}}</td>
                                  <td>
                                   <show :invoice="invoice"></show>
                                  </td>
                                </tr>
                            </tbody>
                        </v-simple-table>

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
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import * as invoice from '../../services/rtgs_service'
import show from './show.vue'
export default {
    props:['company'],
    components:{
    show
    },
    data(){
        return{
            dialog:false,
            invoices:[],
            loading:false,
            snackbar:false,
            message:'',
            color:''
      }
    },methods: {
        getInvoice(){
          this.loading = true
          invoice.showRtgs(this.company).then(response=>{
              this.loading = false
              this.invoices = response.data.data
              this.dialog = true
          }).catch(error=>{
              this.loading = false
              this.snackbar= true
              this.message =error.response.data.message
              this.color="red"
          })
        }
    },
}
</script>