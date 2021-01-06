<template>
<v-container>
        <v-card>
            <v-card-text>
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </v-card-text>
        </v-card>
  
  <v-card class="mt-2">
      <v-card-title>
          <v-row>
         
           <v-col sm="12">
             <v-text-field v-model="filter" outlined label="Search Company" prepend-inner-icon="fa fa-search" v-on:keyup.enter="getList"></v-text-field>
           </v-col>
          </v-row>

    </v-card-title>
      <v-card-text>
            <v-simple-table>
                <template>
                <thead>
                    <tr>
                    <th class="text-left">
                    ID
                    </th>
                     <th class="text-left">
                      Reg number
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    </tr>
                </thead>
                <tbody>
                  
                    <showCompany v-for=" company in companies" :key="company.id" :company="company"></showCompany>                    
                    
                </tbody>
                </template>
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
</v-container>
</template>
<script>
import * as company from '../../services/company_service'
import showCompany from '../../components/company/show'
export default {
    components:{
        showCompany
    },
    data(){
        return{
             items:[
                 {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/administrator/dashboard',
                 },
                {
                    text: 'Companies',
                    disabled: true,
                    href: 'admin.company',
                }
            ],
            companies:[],
            comp:'',
            snackbar:false,
            color:'',
            message:'',
            loading:false,
            filter:'',
         
        }
    },methods:{
        getList(){
            this.loading = true
            var formData = new FormData();
            formData.append('search',this.filter)
             company.getList(formData).then(response=>{
              this.loading = false
              this.companies= response.data.company
              this.$store.dispatch('setTypes',response.data.types)
             }).catch(error=>{
                 this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
             })
        }
    }
}
</script>