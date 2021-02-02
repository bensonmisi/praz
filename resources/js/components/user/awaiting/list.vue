<template>
    <div>
     <template v-if="invoices.length">
                  <v-card>
                      <v-card-title class="cyan lighten-1 white--text">
                          Invoices Awaiting Verification
                      </v-card-title>
                      <v-card-text>                         
                        
                          <v-simple-table>
                              <thead>
                                  <tr>
                                      <th>Invoice Number</th>                                    
                                      <th>Total Due</th>
                                      <th>Total Paid</th>
                                      <th></th>
                                  </tr>                                  
                              </thead>
                              <tbody>
                                 
                                       <tr v-for="inv in invoices" :key="inv.id">
                                   
                                       <td>{{inv.invoice_number}}</td>
                                       <td>{{inv.total}}</td>
                                       <td>{{inv.receipted}}</td>
                                       <td>
                                           <show :inv="inv"></show>
                                      </td>
                                   
                                     </tr>
                             
                              </tbody>
                          </v-simple-table>
                         
                        
                      </v-card-text>
                  </v-card>
     </template>
    </div>
</template>
<script>
import show  from './show.vue'
export default {
    props:['invoices'],
    components:{
        show
    }
}
</script>