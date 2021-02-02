<template>
    <div>
         <v-btn  color="primary" depressed @click="categoryDialog=true">Choose Category</v-btn>
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
                <v-dialog
                v-model="categoryDialog"
                hide-overlay
                width="600"  
                >
                  <v-card>
                      <v-card-title>
                          <v-text-field 
                          outlined
                          v-model="filter"
                          label="Search for Category"
                          >
                        </v-text-field>
                      </v-card-title>
                      <v-card-text>
                          <v-list two-line>
                              <div v-for="cat in filterCategories" :key="cat.id">
                              <v-list-item>
                                  <v-list-item-content>
                                    <div>{{cat.code}}</div>
                                    <div>{{cat.name}}</div>
                                  </v-list-item-content>
                                  <v-list-item-action>
                                     <v-btn fab depressed class="green  white--text" @click="selectCategory(cat.id)">
                                         <v-icon >fa fa-plus</v-icon>
                                     </v-btn>
                                  </v-list-item-action>
                              </v-list-item>
                              <v-divider></v-divider>
                              </div>
                          </v-list>
                      </v-card-text>
                  </v-card>
                </v-dialog>
                 <v-dialog
                v-model="selectDialog"
                hide-overlay
                width="300"  
                persistent
                >
                    <v-form
               ref="form"
               v-model="valid"
               lazy-validation>
                <v-card>
                    <v-card-title>Select Currency & Year</v-card-title>
                    <v-card-text>
                        <v-select
                        v-model="currency"
                        :items="getCurrencylist"
                        item-value="id"
                        item-text="name"
                        outlined
                        :rules="currencyRules"
                        label="Select Currency"
                        >
                      </v-select>
                          <v-select
                        v-model="year"
                        :items="getRegYear"
                        item-text="year"
                        item-value="year"
                        outlined
                        :rules="yearRules"
                        label="Select Year"
                        >
                      </v-select>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outlined class="red white--text" @click="selectDialog=false">cancel</v-btn>
                        <v-spacer></v-spacer>
                         <v-btn outlined class="green white--text" @click="addCategory">Add</v-btn>
                    </v-card-actions>
                </v-card>
                    </v-form>
                 </v-dialog>
                 <v-dialog
                  v-model="confirmDialog"
                hide-overlay
                width="500"  
                persistent
                 >
                       <v-card>
                        <v-card-title class="headline red white--text">
                        Registration Warning
                        </v-card-title>

                        <v-card-text class="font-weight-bold">
                         Please note your registration will be valid from 1 January {{year}} to 31 December {{year}} , Click confirm if you wish to register for that period
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                             <v-btn
                            color="red"                        
                             depressed
                             @click="confirmDialog=false"
                             >
                            Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                         color="primary"                           
                        depressed
                        @click="saveCategory"
                        >
                            I accept
                        </v-btn>
                        </v-card-actions>
      </v-card>
                 </v-dialog>
                    <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import * as invoicing from '../../../services/invoicing_service'
export default {
    data(){
        return{
            filter:'',
            loading:false,
            categoryDialog:false,
            selectDialog:false,
            confirmDialog:false,
            currencyRules:[v => !!v || 'Select Preferred Currency'],
            yearRules:[v => !!v || 'Select Registration Year'],
            currency:'',
            year:'',
            category_id:'',
            valid:true,
            snackbar:false,
            color:'',
            message:'',
            loading:false

        }
    },methods:{
          selectCategory(id){
          this.category_id = id
          this.selectDialog = true
        },
        addCategory(){
           if(this.$refs.form.validate()){
               this.confirmDialog = true
           }
        },
        saveCategory(){
           let formData = new FormData()
           formData.append('category',this.category_id)
           formData.append('year',this.year)
           formData.append('currency',this.currency)
           this.loading = true
           this.confirmDialog = false
           this.selectDialog = false
           this.categoryDialog = false
           invoicing.addInvoice(formData).then(response=>{
              this.loading = false
              this.$store.dispatch('setInvoice',response.data.data)
              this.snackbar = true
              this.color="green"
              this.message ="Successfully Added Category to invoices"
           }).catch(error=>{
               this.loading = false
                this.snackbar = true
              this.color="red"
              this.message =error.response.data.message
           })
        },
        printInvoice(inv){
            this.loading = true
         invoicing.downloadInvoice(inv).then(response=>{
             this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'invoice.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
             this.loading = false
             console.log(error)
         })
        }
      
    },
    computed:{
        getCurrencylist(){
            return this.$store.state.currencylist
        },
        getRegYear(){
            return this.$store.state.regyear
        },
        filterCategories(){
              var categorylist = this.$store.state.categorylist
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