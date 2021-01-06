<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Bank transfers</div>
              </v-card-title>
         <v-card-text>
          <v-simple-table>
              <thead>
                  <tr>
                      <th>
                      Date
                      </th>
                      <th>
                     transaction Date
                     </th>                    
                     <th>
                      Description
                     </th>
                       <th>
                     Reference Number
                     </th>
                     <th>
                      Currency
                     </th>
                      <th>
                      Amount
                     </th>                  
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.banktransactions">
                <tr v-for="bank in comp.banktransactions" :key="bank.id">
               
                       <td>{{bank.created_at | formatDate}}</td>
                       <td>{{bank.trans_date}}</td>
                        <td>{{bank.description}}</td>
                        <td>{{bank.source_reference}}</td>
                        <td>{{bank.currency}}</td>
                        <td>{{bank.amount}}</td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="5" class="red--text text-center px-10">No Bank Transfers Claimed</td>
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