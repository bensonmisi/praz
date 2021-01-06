<template>
    <div>
            <v-card class="ma-1">
                                    <v-card-title>
                                        <div>
                                            <div>Report by Category</div>
                                         </div>
                                       
                                    </v-card-title>

                                    <v-card-text>
                                      <v-simple-table>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                   Category
                                                                </th>
                                                                 <th>
                                                                    Total
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(value,name,index) in data" :key="index">
                                                                <td>
                                                                    {{name}}
                                                                </td>
                                                                 <td>
                                                                    {{value.length}}
                                                                </td>
                                                               
                                                            </tr>
                                                        </tbody>
                                                    </v-simple-table>
                                  
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
             total:0
        }
    },
      methods:{
         getReport(){
                this.loading = true
                suppliers.getByCategory().then(response=>{
                    this.loading = false
                    this.data = response.data.data
                }).catch(error=>{
                this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
                })
         }
     },
     mounted(){
          this.getReport();
     }
}
</script>