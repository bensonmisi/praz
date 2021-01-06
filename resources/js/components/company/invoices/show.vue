<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Invoices</div>
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
                      Category
                     </th>
                        <th>
                     Year
                     </th>
                     <th>
                      Status
                     </th>
                     <th>
                      Amount
                     </th>
                     <th>

                     </th>
                  
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.invoices">
                <tr v-for="inv in comp.invoices" :key="inv.id">
               
                       <td>{{inv.created_at | formatDate}}</td>
                       <td>{{inv.invoice_number}}</td>
                        <td>{{inv.category.code}}</td>
                          <td>{{inv.year}}</td>
                        <td>{{inv.status}}</td>
                        <td>{{inv.cost}}</td>
                       <td></td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="6" class="red--text text-center px-10">No Invoices found Found</td>
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