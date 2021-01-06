<template>
      <v-container>
        <v-card>
            <v-card-text>
                 <v-breadcrumbs
                    :items="items"
                    large
                    ></v-breadcrumbs>
            </v-card-text>
        </v-card>
          <v-card class="mt-10">
            <v-card-title>
                <div>Categories</div>
                <v-spacer></v-spacer>
                <addCategory v-on:reload="getCategorylist"></addCategory>
            </v-card-title>
            <v-card-text>
                 <v-row>
         
           <v-col sm="12">
             <v-text-field v-model="filter" outlined label="Search Category" prepend-inner-icon="fa fa-search"></v-text-field>
           </v-col>
          </v-row>
               <v-simple-table class="mt-4">
                    <thead>
                        <tr>
                            <th>Section</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in searchCategory" :key="category.id">
                            <td>
                                {{category.section}}
                            </td>
                            <td>
                                {{category.code}}
                            </td>
                            <td>
                                {{category.name}}
                            </td>
                            <td>
                                {{category.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editCategory :category="category" v-on:reload="getCategorylist"></editCategory>
                                <deleteCategory :category="category" v-on:reload="getCategorylist"></deleteCategory>                               
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
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
import * as category from '../../services/category_service'
import addCategory from '../../components/category/add'
import editCategory from '../../components/category/edit'
import deleteCategory from '../../components/category/delete'
export default {
    components:{
         addCategory,
         editCategory,
         deleteCategory
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
                text: 'Category',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            categorylist:[],
            filter:''
        }
      },methods: {
          getCategorylist(){
            this.loading = true
            category.getCategorylist().then(response=>{
                this.loading = false
                this.categorylist= response.data.category
                this.$store.dispatch('setSections',response.data.sections)
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
          }
      },mounted(){
          this.getCategorylist()
      },computed:{
           searchCategory(){
              return this.categorylist.filter(category=>(!category.code.toUpperCase().indexOf(this.filter.toUpperCase())||!category.name.toUpperCase().indexOf(this.filter.toUpperCase())))
       
        }
      }
}
</script>