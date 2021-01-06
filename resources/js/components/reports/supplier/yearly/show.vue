<template>
    <div>
            <v-card class="ma-1">
                                    <v-card-title>
                                        <div>
                                            <div>Yearly Comparison</div>
                                            <div></div>
                                         </div>
                                        <v-spacer></v-spacer>
                                    
                                       
                                    </v-card-title>

                                    <v-card-text>
                                <v-row>
                                    <v-col sm="3" v-for="(value,name,index) in data" :key="index">
                                             <v-card>
                                                 <v-card-title class="text--center">{{value.year}}</v-card-title>
                                                 <v-card-text>
                                                     <v-simple-table>
                                                         <thead>
                                                             <tr>
                                                                 <th>Month</th>
                                                                 <th>Total</th>
                                                             </tr>
                                                         </thead>
                                                         <tbody>
                                                 <tr v-for="dt in value.data" :key="dt.id">
                                                     <td>{{dt.month}}</td>
                                                     <td>{{dt.total}}</td>
                                                 </tr>
                                                
                                                         </tbody>
                                                     </v-simple-table>
                                                 </v-card-text>
                                             </v-card>
                                    </v-col>
                                </v-row>
                                  
                                    </v-card-text>
                                </v-card> 
                                  <v-snackbar  v-model="snackbar"  timeout=2000 :color="color" top>
                                    {{ message }}         
                                </v-snackbar>
                                <v-dialog v-model="loading" hide-overlay persistent width="300" height="50" >
                                    <v-card color="primary" dark>
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
                            
    </div>
</template>
<script>

import * as suppliers from '../../../../services/supplier_service'
export default {
   
    data(){
        return{
             data:[],
             message:'',
             loading:false,
             snackbar:false,
             color:'',
             tab:null,
             total:0,
             addModel:false,
             year:'',
             yearRule:[v => !!v || 'Year is required'],
             isvalid:true
        }
    },
      methods:{
         getYearly(){
                this.loading = true
                suppliers.getYearly().then(response=>{
                    this.loading = false
                    this.data= response.data.data
                }).catch(error=>{
                this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
                })
         }
     },
     mounted(){
          this.getYearly();
     },computed:{
         getTotal(){
             var tatol = 0

           

              return tatol
         }
     }
}
</script>