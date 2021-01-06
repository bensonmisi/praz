<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Online Payments</div>
              </v-card-title>
         <v-card-text>
          <v-simple-table>
              <thead>
                  <tr>
                      <th>
                      Date
                      </th>
                      <th>
                      Invoice Number
                     </th>                    
                     <th>
                      Method
                     </th>
                     <th>
                       Status
                     </th>
                      <th>
                      Amount
                     </th>                  
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.onlinepayments">
                <tr v-for="online in comp.onlinepayments" :key="online.id">
               
                       <td>{{online.created_at | formatDate}}</td>
                       <td>{{online.invoice_number}}</td>
                        <td>{{online.mode}}</td>
                        <td>{{online.status}}</td>
                        <td>{{online.amount}}</td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="5" class="red--text text-center px-10">No Online paymets found Found</td>
                    </tr>
                </template>
            </tbody>
          </v-simple-table>
         </v-card-text>
         </v-card>
     
         </div>
</template>
<script>
export default {
    props:['comp'],
    data(){
        return{
            snackbar:false,
            loading:false,
            message:'',
            color:''
        }
    },methods: {
      cancelInvoice(id){
        }
    }
}
</script>