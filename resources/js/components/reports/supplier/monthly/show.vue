<template>
    <div>
            <v-card class="ma-1">
                                    <v-card-title>
                                        <div>
                                            <div>Monthly Total</div>
                                            <div>{{getTotal}}</div>
                                         </div>
                                        <v-spacer></v-spacer>
                                      <v-btn outlined rounded color="green" @click="addModel=true">Filter</v-btn>
                                       
                                    </v-card-title>

                                    <v-card-text>
                                      <v-simple-table>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Month
                                                                </th>
                                                                 <th>
                                                                    Year
                                                                </th>
                                                                 <th>
                                                                    Total
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="supplier in data" :key="supplier.id">
                                                                <td>
                                                                    {{supplier.month}}
                                                                </td>
                                                                 <td>
                                                                    {{supplier.year}}
                                                                </td>
                                                                <td>
                                                                    {{supplier.total}}
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
                                <v-dialog v-model="addModel" max-width="300">
                                    <v-card>
                                        <v-card-title>
                                            <div>Filter By Year</div>
                                             <v-spacer></v-spacer>
                                            <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                                        </v-card-title>
                                              <v-form ref="form" v-model="isvalid" lazy-validation>
                                        <v-card-text>
                                            <v-text-field outlined label="Year" v-model="year" :rules="yearRule"></v-text-field>
                                        </v-card-text>
                                        <v-card-actions>
                                             <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn outlined rounded class="green" @click="search">Submit</v-btn>
                                        </v-card-actions>
                                              </v-form>
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
         getMonthly(){
                this.loading = true
                suppliers.getMonthly().then(response=>{
                    this.loading = false
                    this.data= response.data.data
                }).catch(error=>{
                this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
                })
         },
         search(){
              if(this.$refs.form.validate()){
                  var formData = new FormData()
                  formData.append('year',this.year)
                  this.loading = true
                  suppliers.searchMonthly(formData).then(response=>{
                    this.loading = false
                    this.data= response.data.data
                }).catch(error=>{
                this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
                })
              }
         }
     },
     mounted(){
          this.getMonthly();
     },computed:{
         getTotal(){
             var tatol = 0

              this.data.forEach(function(dt){
                  tatol = tatol+dt.total
              })

              return tatol
         }
     }
}
</script>