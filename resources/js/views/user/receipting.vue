<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                    My receipts
                </v-card-title>
                <v-card-text>
                      <v-simple-table>
                 
                    <thead>
                        <tr>
                         <th class="text-left">
                            Date
                        </th>
                            <th class="text-left">
                            Invoice Number
                            </th>
                            <th class="text-left">
                            Receipt Number
                            </th>
                            <th class="text-left">
                            Type
                            </th>
                            <th class="text-left">
                            Description
                            </th>
                            <th class="text-left">
                            Methods
                            </th>
                            <th class="text-left">
                            Currency
                            </th>
                            <th class="text-left">
                            Amount
                            </th>
                         <th class="text-center">
                         
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in receipts"
                        :key="item.id"
                        >
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.invoicenumber }}</td>
                        <td>{{ item.receiptnumber }}</td>
                        <td>{{ item.type}}</td>
                        <td>{{ item.description}}</td>
                        <td>{{ item.method}}</td>
                        <td>{{ item.currency}}</td>
                        <td>{{ item.amount}}</td>
                        <td>
                              <v-btn rounded outlined color="primary" @click="print(item.receiptnumber)">Print</v-btn>
                        </td>
                        </tr>
                    </tbody>
                
                </v-simple-table> 
                    
                </v-card-text>
            </v-card>
           <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"
                height="50"
                >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text>
                    Please wait ....
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
    </v-container>
</template>
<script>
import * as general from '../../services/general_service'
export default {
   data(){
       return{
           receipts:[],
           loading:false
       }
   },
   mounted(){
        this.getReceipts()
   },
   methods:{
       getReceipts(){
           this.loading = true
           general.getReceipts().then(response=>{
             this.loading = false
             this.receipts = response.data.receipts
           }).catch(error=>{
             this.loading = false
           })
       },
          print(id){
            this.loading = true
            general.downloadReceipt(id).then(response=>{
             this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', id+'.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
             this.loading = false
             console.log(error)
         })
        }
   }
}
</script>