<template>
<div>
    <v-container>
        <v-card>
            <v-card-title>
                <div>Register Category</div>
                <v-spacer></v-spacer>
                     <v-btn
                    depressed
                    dense
                    color="primary"
                    class="hidden-sm-and-down"
                    @click="categoryDialog=true"
                     >
                   Select Category
                    </v-btn>
                 <v-btn
                    fab
                    dark
                    small
                    color="indigo"
                    top
                    right
                    class="hidden-md-and-up"
                    @click="categoryDialog=true"
                >
                    <v-icon>fa fa-plus</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container class="mt-3">
            <v-card> 
             <v-card-text>
               <v-row>
                   <v-col  sm="2">
                       <div class="font-weight-bold black--text">Date</div>
                   </v-col>
                      <v-col  sm="8">
                       <div class="font-weight-bold black--text">Descriptin</div>
                     </v-col>
                     <v-col  sm="2">
                       <div class="font-weight-bold black--text">Amount</div>
                     </v-col>
               </v-row>
               <v-divider></v-divider>
               <div v-if="invoicelist.length >0">
                   <div v-for="invoice in invoicelist" :key="invoice.id">
                     <v-row>
                        <v-col  sm="2">
                            <div>{{invoice.created_at| formatDate }}</div>
                        </v-col>
                            <v-col  sm="8">
                                <div>
                                  <div class="font-weight-bold black--text">{{invoice.category.code}}</div>
                                  <div class="hidden-sm-and-down">{{invoice.category.name}}</div>
                                  <div>{{invoice.year}}</div>
                                </div>
                            </v-col>
                            <v-col  sm="2">
                                <div class="d-flex justify-between">
                                    <div>{{invoice.currency.name}}{{invoice.cost}}</div>
                                    <div>
                                        <v-btn icon class="red--text" @click="removeItem(invoice.id)"><v-icon>fa fa-trash</v-icon></v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                   </div>
                   <v-row>
                       <v-col sm="10">
                           <div class="headline">Total Due</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{total}}</div>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col sm="10">
                           <div class="headline">Total Paid</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{totalpaid}}</div>
                             <v-divider class="black"></v-divider>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col sm="10">
                           <div class="headline">Balance</div>
                       </v-col>
                       <v-col sm="2">
                             <div class="headline"> {{finalcurrency}} {{total-totalpaid}}</div>
                             <v-divider class="black"></v-divider>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col cols="12" sm="8"></v-col>
                       <v-col cols="12" sm="4" class="d-flex">
                           <v-btn class="primary" rounded depressed @click="printInvoice(invoicelist[0].invoice_number)">Print Invoice</v-btn>
                           <payment :total="total-totalpaid" :currency="finalcurrency" v-on:reloadInvoice="getInvoices"></payment>
                       </v-col>
                   </v-row>
               </div>
               <div class="pa-10 text-center red--text" v-else>
                  No category selected as yet
               </div>
             </v-card-text>

            </v-card>
    </v-container>
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
                        :items="currencies"
                        outlined
                        :rules="currencyRules"
                        label="Select Currency"
                        >
                      </v-select>
                          <v-select
                        v-model="year"
                        :items="yearslist"
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
</div>
</template>
<script>
import Payment from '../../components/user/payment.vue'
import * as invoicing from '../../services/invoicing_service'
export default {
    components:{
        Payment 
    },
    data(){
        return{
            currencylist:this.$store.state.currencylist,
            invoicelist:this.$store.state.invoice,
            years:this.$store.state.regyear,
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
    },mounted() {
        this.getInvoices() 
    },methods:{
        getInvoices(){
            if(!this.$store.state.documentstatus)
            {
             this.$router.push({name:'Dashboard'}) 
            }
        },
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
              this.invoicelist = response.data.invoice
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
        },
        removeItem(id){
            this.loading = true
            invoicing.removeItem(id).then(response=>{
              this.loading = false
              this.invoicelist = response.data.invoice
              this.snackbar = true
              this.color="green"
              this.message ="Successfully Deleted Item From invoice"
           }).catch(error=>{
               this.loading = false
                this.snackbar = true
              this.color="red"
              this.message =error.response.data.message
           })
        }
    },computed:{
        yearslist(){
            let yearlist =[]
            this.years.forEach((value,index)=>{
                yearlist.push(value.year)
            })
            return yearlist
        },
         currencies(){
            let currencyarray =[]
            this.currencylist.forEach((value,index)=>{
                currencyarray.push(value.name)
            })
            return currencyarray
          },
         total(){
             let cost = 0;
             this.invoicelist.forEach((value,index)=>{
                 cost = cost+value.cost
             })
             return cost;
         },
            totalpaid(){
             let cost = 0;
             this.invoicelist[0].receipts.forEach((value,index)=>{
                 cost = cost+value.amount
             })
             return cost;
         },
         finalcurrency(){
             return this.invoicelist[0].currency.name
         },
         getCategorylist(){
             return  this.$store.state.categorylist
         },filterCategories(){
           
             return this.getCategorylist.filter(category=>(!category.name.toUpperCase().indexOf(this.filter.toUpperCase())||!category.code.toUpperCase().indexOf(this.filter.toUpperCase())))
         }

    }
}
</script>