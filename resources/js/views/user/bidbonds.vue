<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                    My Bid Bonds
                </v-card-title>
                <v-card-text>
            <v-simple-table>
                 
                    <thead>
                        <tr>
                         <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                        Tender
                        </th>
                        <th class="text-left">
                        Amount
                        </th>
                        <th class="text-left">
                           Status
                        </th>
                         <th class="text-center">
                         
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in bidbonds"
                        :key="item.id"
                        >
                        <td>{{ item.created_at | formatDate}}</td>
                        <td>
                            <div>{{ item.notice.tender_number }}</div>
                            <div>{{item.notice.company.name}}</div>
                       </td>
                       <td>
                           {{item.receipt.currency}} {{item.receipt.amount}}
                       </td>
                        <td>{{ item.status}}</td>
                        <td>
                              <v-btn rounded outlined color="primary" @click="printBid(item.id)">Download</v-btn>
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
             bidbonds:[],
            loading:false
        }
    },mounted() {
       this.getBids() 
    },methods:{
        getBids(){
            this.loading = true
            general.getBids().then(response=>{
                this.loading = false
                this.bidbonds = response.data.bonds
            }).catch(error=>{

            })
        },
        printBid(id){
            this.loading = true
            general.downloadBidbond(id).then(response=>{
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