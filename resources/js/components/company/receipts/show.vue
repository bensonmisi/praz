<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Receipts</div>
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
                     Receipt Number
                     </th>
                     <th>
                     Description
                     </th>
                     <th>
                      Method
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
                <template v-if="comp.receipts">
                <tr v-for="rpt in comp.receipts" :key="rpt.id">
               
                       <td>{{rpt.created_at | formatDate}}</td>
                       <td>{{rpt.invoicenumber}}</td>
                        <td>{{rpt.receiptnumber}}</td>
                        <td>{{rpt.description}}</td>
                        <td>{{rpt.method}}</td>
                       <td>{{rpt.currency}}</td>
                        <td>{{rpt.amount}}</td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="7" class="red--text text-center px-10">No Receipts found Found</td>
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