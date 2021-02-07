<template>
    <div>
        <v-btn icon color="green" @click="showModel=true"><v-icon>fa fa-search</v-icon></v-btn>
        <v-dialog v-model="showModel" max-width="700">
            <v-card >
                <v-card-title>
                     <v-text-field v-model="referencenumber" outlined label="Search for transfer"  v-on:keyup.enter="retriveStatement"></v-text-field>
                
                </v-card-title>
                <v-card-text>
                       <v-simple-table>
                        <thead>
                            <tr>
                                <th>transaction Details</th>
                                <th>Claimee </th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="statement.length > 0 ">
                            <tr v-for="state in statement" :key="state.id">
                                <td>
                                    <div>{{state.description}}</div>
                                    <div>{{state.source_reference}}</div>
                                    <div>{{state.currency}}{{state.amount}}</div>
                                    
                                </td>
                                <td>
                                    <div>{{state.regnumber}}</div>
                                     <div>{{state.company}}</div>
                                </td>
                                <td>
                                    {{state.status}}
                                </td>
                                <td>
                                    <template v-if="state.status=='PENDING'">
                                      <v-btn outlined rounded color="primary" @click="submitStatement(state.id)">USE</v-btn>
                                    </template>
                                   
                                </td>
                            </tr>
                            </template>
                            <template v-else>
                                 <tr>
                                     <td colspan="4" class="text-center red--text pa-10"> No transfers found as yet</td>
                                 </tr>
                            </template>
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
import * as rtgs from '../../services/rtgs_service'
export default {
    props:['invoicenumber'],
    data(){
        return{
            referencenumber:'',
            statement:[],
            showModel:false,
            loading:false,
            snackbar:false,            
            color:'',
            message:''
        }
    },
    methods: {
        retriveStatement(){
         this.loading = true
         //var formData = new FormData();
         //  formData.append('referencenumber',this.referencenumber)
           rtgs.getStatement(this.referencenumber).then(response=>{
               this.loading = false
               this.statement = response.data.data
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
           }) 
       },
        submitStatement(id){
        this.loading = true
        var formData = new FormData()
        formData.append('bank',id)
        formData.append('invoicenumber',this.invoicenumber)
        rtgs.submitStatement(formData).then(response=>{       
        this.showModel = false
         this.loading = false
         this.snackbar = true
         this.message ="Transaction successfully approved"
         this.color ="green"
         location.reload()
        }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
        })
       },
       reserveRegistration(id){
        this.loading = true
        var formData = new FormData()
        formData.append('id',id)
        rtgs.reverse(formData).then(response=>{       
        this.showModel = false
         this.loading = false
         this.snackbar = true
         this.message ="Transaction successfully Rervesed"
         this.color ="green"
         location.reload()
        }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
        })
       }
    },
}
</script>