<template>
    <div>
            <v-card class="ma-1">
                                    <v-card-title>
                                        <div>
                                            <div>Total</div>
                                            <div>{{getTotal}}</div>
                                         </div>
                                        <v-spacer></v-spacer>
                                          <search></search>
                                       
                                    </v-card-title>

                                    <v-card-text>
                                      <v-simple-table>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Company
                                                                </th>
                                                                 <th>
                                                                    Year
                                                                </th>
                                                                 <th>
                                                                    Category
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="supplier in getData" :key="supplier.id">
                                                                <td>
                                                                    {{supplier.company}}
                                                                </td>
                                                                 <td>
                                                                    {{supplier.expire_year}}
                                                                </td>
                                                                <td>
                                                                    {{supplier.category}}
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
import search from './search'
export default {
    components:{
         search
    },
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
                suppliers.getReport().then(response=>{
                    this.loading = false
                    this.$store.dispatch('setGeneralreport',response.data.data)
                   this.$store.dispatch('setGeneralreportTotal',response.data.total)
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
     },computed:{
          getData(){
              return this.$store.state.generalreport
          },
          getTotal(){
              return this.$store.state.generalreportTotal
          }
     }
}
</script>