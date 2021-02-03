
<template>
    
        <v-container>
          <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
        <v-card>
            <v-card-title>               
             Current Registered Suppliers
            </v-card-title>
            <v-card-text>
                <div>
                        <v-text-field outlined v-model="filter" label="Search for Category"></v-text-field>

                </div>
            <v-expansion-panels>
                <v-expansion-panel
                v-for="cat in  filterCategories"
                :key="cat.id"
                >
                <v-expansion-panel-header>
                    <div>{{cat.name}}({{cat.code}}) <v-chip>{{cat.suppliers.length}}</v-chip></div>     
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-simple-table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Emails</th>
                                <th>Phone numbers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="cat.suppliers.length">
                            <tr v-for="comp in cat.suppliers" :key="comp.id">
                                <td>{{comp.company.name}}</td>
                                <td>{{comp.company.city}}</td>                                
                                <td>
                                    <template v-if="comp.company.contacts">
                                         {{ comp.company.contacts.address}}
                                    </template>
                                   
                            </td>
                                <td>
                                     <template v-if="comp.company.contacts">
                                    {{comp.company.contacts.emails}}
                                     </template>
                            </td>
                                <td>
                                     <template v-if="comp.company.contacts">
                                    {{comp.company.contacts.phones}}
                                     </template>
                                </td>
                            </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="5" class="text-center red-text"> No registered suppliers found</td>
                                </tr>
                            </template>
                        </tbody>
                    </v-simple-table>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-card-text>
        </v-card>
                 <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
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
import * as welcome from '../../services/welcome'
export default {
    data(){
        return{
            categories:[],
            loading:true,
            snackbar:true,
            message:'',
            color:'',
            filter:'',
                 items: [
                        {
                        text: 'Home',
                        disabled: false,
                        href: '/',
                        },
                        {
                        text: 'Current Registered Suppliers',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        },
                    ]
        }
    },methods:{
        getBidders(){
            this.loading = true
            welcome.getSuppliers().then(response=>{
                this.loading = false
                this.categories = response.data.data
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red"
            })
        }
    },mounted(){
        this.getBidders()
    },computed:{
          filterCategories(){
              var categorylist = this.categories
              if(this.filter !='')
               {
                  return categorylist.filter(category=>(!category.name.toUpperCase().indexOf(this.filter.toUpperCase())||!category.code.toUpperCase().indexOf(this.filter.toUpperCase())))
               }else{
                   return categorylist
               }
         }
    }
}
</script>