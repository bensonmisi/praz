<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>RTGS Uploads</div>
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
                      Bank
                     </th>
                       <th>
                     Payment Date
                     </th>
                     <th>
                     Status
                     </th>
                      <th>
                     Commet
                     </th>
                      <th>
                      Amount
                     </th>  
                     <th>
                         </th>                
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.rtgs">
                <tr v-for="bank in comp.rtgs" :key="bank.id">
               
                       <td>{{bank.created_at | formatDate}}</td>
                       <td>{{bank.invoice_number}}</td>
                        <td>{{bank.name}}</td>
                        <td>{{bank.paymentdate}}</td>
                        <td>{{bank.status}}</td>
                        <td>{{bank.comment}}</td>
                        <td>{{bank.amounnt}}</td>
                        <td>
                            <template v-if="bank.comments">
                            <v-tooltip right>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="primary"
                                    dark
                                    fab
                                    depressed
                                    v-bind="attrs"
                                    v-on="on"
                                    icon
                                    >
                                    <v-icon>fa fa-comment</v-icon>
                                    </v-btn>
                                </template>
                                <span v-for="comment in bank.comments" :key="comment.id">{{comment.comment}}</span>
                                </v-tooltip>
                            </template>
                        </td>
                              
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