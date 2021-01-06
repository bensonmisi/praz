<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Registrations</div>
              </v-card-title>
         <v-card-text>
          <v-simple-table>
              <thead>
                  <tr>
                      <th>
                      Date
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
                      Print
                     </th> 
                     <th></th>                 
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.registrations">
                <tr v-for="online in comp.registrations" :key="online.id">
               
                       <td>{{online.created_at | formatDate}}</td>
                       <td>{{online.category.code}}</td>
                        <td>{{online.expire_year}}</td>
                        <td>{{online.status}}</td>
                        <td>{{online.printed}}</td>
                        <td>
                            <template v-if="online.status =='PENDING'">
                                <editregistration :registration="online.id"></editregistration>
                            </template>
                        </td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="5" class="red--text text-center px-10">No Registrations found Found</td>
                    </tr>
                </template>
            </tbody>
          </v-simple-table>
         </v-card-text>
         </v-card>
     
         </div>
</template>
<script>
import editregistration from './edit'
export default {
    props:['comp'],
    components:{
       editregistration
    },
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