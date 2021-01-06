<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                  <v-row>
                    <v-col sm="8">
                      <v-text-field
                            outlined
                            v-model="filter"
                            label="Search for notice"
                            >
                       </v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-select v-model="type"
                         :items="typelist" item-text="name" item-value="id" label="Filter By Type" outlined>

                        </v-select>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text>
                  <div v-if="notices.length >0">
                         <v-row class="black lighten-2 white--text pt-2 pb-2 hidden-sm-and-down">
                          <v-col cols="12" sm="4">
                              <div>Entity</div>
                          </v-col>

                          <v-col cols="12" sm="4">
                                <div>Products/Services</div>
                          </v-col>
                          <v-col cols="12" sm="2">
                                <div class="text-center">Closing Date</div>
                          </v-col>
                         </v-row>
                       <div v-for="notice in filterNotices" :key="notice.id">
                      <v-row>
                          <v-col cols="12" sm="4">
                             <div>
                              <div class="black--text font-weight-bold">{{notice.company.name}}({{notice.tendernumber}})</div>
                              <div class="blue--text font-weight-bold">{{notice.type.name}}</div>
                             </div>
                          </v-col>
                           <v-col cols="12" sm="4">
                               <div v-if="notice.products.length >0">
                               <div v-for="product in notice.products" :key="product.id">
                                   <div>{{product.name}}({{product.quantity}})</div>
                               </div>
                               </div>
                               <div v-else class="red--text">
                                   No products found
                               </div> 
                          </v-col>
                           <v-col cols="12" sm="2">
                               <div class="text-center">
                               <div>{{notice.close_date | formatDate}}</div>
                               <div>
                                   <v-btn rounded outlined color="primary" @click="shownotice(notice)">View Details</v-btn>
                               </div>
                               </div>
                          </v-col>
                      </v-row>
                      <v-divider></v-divider>
                       </div>
                
                  </div>
                  <div v-else class="text-center pa-10">
                           No Procurement notices uploaded as yet
                  </div>                     
                 
                    
                </v-card-text>
                   <v-card-actions>
                    
                         <v-btn  outlined color="green" @click="previousPage" v-if="previous">Previous Page<v-icon>mdi-arrow-left-thick</v-icon></v-btn>
                          <v-btn outlined color="green" v-if="morepages" @click="nextPage"> Next Page <v-icon>mdi-arrow-right-thick</v-icon></v-btn>
                    </v-card-actions>
            </v-card>


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
          <v-snackbar
            v-model="snackbar"
            timeout=3000
            :color="color"
            top
            right
            >
            {{ message }}         
            </v-snackbar>

             <v-dialog
                v-model="dialog"
              fullscreen
                hide-overlay
                transition="dialog-top-transition"
                >
                <v-card>
                    <v-card-title class="green lighten-2 white--text">
                       <div>{{notice.tendernumber}}</div>
                       <v-spacer></v-spacer>
                       <v-btn icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-card>
                              <v-card-title class="headline  px-3 py-3">Products/Services</v-card-title>
                              <v-divider></v-divider>
                              <v-card-text>
                            <v-list two-line>
                                <div v-for=" product in notice.products" :key="product.id">
                                <v-list-item>
                                    <v-list-item-content>{{product.name}}</v-list-item-content>
                                    <v-list-item-content>{{product.quantity}}</v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                </div>
                            </v-list>
                               <div class="headline mt-6">Required Categories</div>
                            <v-list two-line>
                                <div v-for="cat in notice.category" :key="cat.id">
                                <v-list-item>
                                    <v-list-item-content>{{cat.category.code}}</v-list-item-content>
                                    <v-list-item-content>{{cat.category.name}}</v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                </div>
                            </v-list>
                              </v-card-text>
                                    </v-card>
                     
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <div>
                                       <v-btn
                                        x-large
                                        outlined
                                        color="success"
                                        dark
                                        block
                                        >
                                       <v-icon>fa fa-download</v-icon> Document
                                        </v-btn>
                                    </div>
                                    <div v-if="notice.ptype_id=='2'" class="mt-6">
                                    <v-card>
                                        <v-card-title class="py-3 px-3 primary white--text">Required Tender Fees</v-card-title>
                                        <v-card-text>                                          
                                            <div v-if="nonrefundable.length >0">
                                                <div v-for="fee in nonrefundable" :key="fee.id">
                                                 <v-row>
                                                     <v-col sm="6">
                                                          <div>
                                                         {{fee.name}}
                                                          </div>
                                                          <div>
                                                            {{fee.status}}
                                                          </div>
                                                     </v-col>
                                                     <v-col sm="6" class="d-flex">
                                                        <div>  {{currency}} {{fee.cost}}</div>
                                                        <v-spacer></v-spacer>
                                                        <div> 
                                                          <v-btn outlined rounded dense color="primary" @click="addInvoice(fee.name)" v-if="!fee.paid">Add</v-btn>
                                                          <div class="green--text" v-else>Paid</div>
                                                         </div>
                                                     </v-col>
                                                    
                                                 </v-row>
                                                 <v-divider></v-divider>
                                                </div>
                                            </div>
                                            <div v-else>
                                              <p class="pa-6 red--text">No Fees Found</p>
                                            </div>
                                           
                                        </v-card-text>
                                        <v-card-actions v-if="invoice">
                                        <v-spacer></v-spacer>
                                          <paynotice v-on:paid="shownotice(notice)" :id="invoice ? invoice.id : 0" :cost="invoice ? invoice.cost : 0" :description="invoice ? invoice.description : ''" :currency="notice.currency.name"></paynotice>
                                       </v-card-actions>
                                        
                                    </v-card>

                                    </div>
                                    <div class="mt-6" v-if="type =='Y'">
                                      <div v-if="!uploaded">
                                        <v-form v-model="valid" ref="qouteForm" lazy-validation>
                                        <v-card>
                                            <v-card-title class="pa-5 blue white--text">
                                                 Upload Quotation
                                            </v-card-title>
                                            <v-card-text>
                                                <p class=" font-weight-bold red--text mt-6">Please note  qoutation should be in {{currency}}</p>
                                            <v-row>
                                                <v-col cols="12">
                                             <v-text-field
                                                label="Total Cost on Qoute"
                                                outlined
                                                v-model="amount"
                                                dense
                                                :rules="amountRule"
                                                prepend-icon="mdi-currency-usd"
                                            ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12">
                                                 <v-file-input
                                                    show-size
                                                    accept=".pdf"
                                                    counter
                                                    v-model="qoute"
                                                    dense
                                                    outlined
                                                    :rules="fileRule"
                                                    prepend-icon="mdi-pdf-box"
                                                    label="Attach Quotation"
                                                ></v-file-input>
                                                </v-col>
                                            </v-row>
                                               
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-btn outlined rounded block color="green" @click="uploadQoute">Upload</v-btn>
                                        </v-card-actions>
                                        </v-card>
                                        </v-form>
                                        </div>
                                        <div v-else class="text-center pa-10  border">
                                               <div class="green--text font-weight-bold headline">Qoutation Uploaded</div>
                                               <v-btn rounded color="primary" @click="uploaded = false">ReUpload</v-btn>
                                        </div>
                                      
                                     
                                    </div>
                                </v-col>
                            </v-row>
                        
                        <h5 class="display-1">Details</h5>
                        <v-divider></v-divider>
                           <p>{{notice.description}}</p>
                           </v-container>
                          
                    </v-card-text>
                </v-card>
             </v-dialog>
    </v-container>
</template>
<script>
import paynotice from '../../components/user/paynotice.vue'
import * as notices from '../../services/notices'

export default {
  components: { paynotice },
     data(){
         return{
             notices:[],
             notice:{},
             types:[],
             type:'',
             uploaded:false,
             currency:'',
             snackbar:false,
             loading:false,
             dialog:false,
             invoice:{},
             spoc:'',
             nonrefundable:[],
             bidbond:'',
             type:'N',
             message:'',
             filter:'',
             color:'',
             previous_link:'',
             next_link:'',
             morepages:false,
             previous:false,
             qoute:null,
             valid:true,
             amount:'',
              fileRule:  [
               v => !v|| v.size < 5000000 || 'File size should be less than 5 MB!',
               v => !!v || 'Qoute is required is required',
               ],
             amountRule:[v=> !!v || 'Total on qoutation required']
         }
     },mounted() {
        this.getNotices()  
     },methods:{
         getNotices(){
             this.loading = true
              notices.getNotices().then(response=>{
                  this.loading = false
                  this.notices = response.data.notices.data
                  this.types = response.data.types
                  console.log(response.data.notices.current_page)
                     if(response.data.notices.current_page < response.data.notices.last_page)
                        {
                            this.morepages=true;
                            this.next_link = response.data.notices.next_page_url
                        }
              }).catch(error=>{
                this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
         },
              nextPage(){
             this.loading=true;
            notices.retreiveNotices(this.next_link).then(response=>{
              this.notices = response.data.notices.data
               this.loading=false;
               console.log(response.data.notices.last_page)
                 if(response.data.notices.current_page < response.data.notices.last_page)
                   {
                     this.morepages=true;
                     this.next_link = response.data.notices.next_page_url
                   }
                   else{
                     this.morepages=false
                   }
                   if(response.data.notices.prev_page_url != null){
                     this.previous_link  = response.data.notices.prev_page_url
                     this.previous=true
                   }else{
                     this.previous = false;
                   }
            }).catch(error=>{
                this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
        },
        previousPage(){
            this.loading=true;
              notices.retreiveNotices(this.previous_link).then(response=>{
            this.notices = response.data.notices.data
              this.loading=false;
                 if(response.data.notices.current_page < response.data.notices.last_page)
                   {
                     this.morepages=true;
                     this.next_link = response.data.notices.next_page_url
                   }
                   else{
                     this.morepages=false;
                   }
                   if(response.data.notices.prev_page_url){
                     this.previous_link  = response.data.notices.prev_page_url
                     this.previous=true
                   }else{
                     this.previous = false;
                   }
            }).catch(error=>{
                this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
        },
        shownotice(notice){
                this.loading = true
              notices.getNotice(notice.id).then(response=>{
                  this.loading= false
               
                  this.notice = response.data.notice
                  this.nonrefundable = response.data.nonrefundable
                  this.invoice = response.data.invoice
                  this.currency = response.data.notice.currency.name
                  this.type = response.data.notice.type.allow_upload
             
                  if(response.data.notice.qoutations.length > 0){
                    this.uploaded = true
                  }
                  this.dialog = true
              }).catch(error=>{
                this.loading = false
              })
           
        },
      uploadQoute(){
           if(this.$refs.qouteForm.validate()){
             this.loading = true
            let formData = new FormData()
            formData.append('notice',this.notice.id)
            formData.append('amount',this.amount)
            formData.append('qoute',this.qoute)
            notices.uploadQoutation(formData).then(response=>{
              this.loading = false;
              this.notice = response.data.notice
                this.snackbar = true
                  this.color="green"
                  this.message ='Successfully Uploaded Qoutation'
            }).catch(error=>{
              this.loading = false
              this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
            })
           }
      },
      addInvoice(name){
        let formData = new FormData()
        formData.append('name',name)
        formData.append('notice',this.notice.id)
        this.loading = true;
        notices.addItem(formData).then(response=>{
          this.loading = false
          this.invoice = response.data.invoice
          this.snackbar = true
          this.color="green"
          this.message ='Successfully Add Item to Invoice'
        }).catch(error=>{
            this.loading = false
            this.snackbar = true
            this.color="red"
            this.message =error.response.data.message
        })
      }

     },computed:{
         filterNotices(){
            var filter = this.filter
            console.log(this.type)
            if(filter){
               return this.notices.filter(notice=>{ 
                 return notice.description.toUpperCase().indexOf(filter.toUpperCase()) > -1 ||  notice.ptype_id==this.type
                  })
            }else{
                return this.notices
            }
         },
         typelist(){
           var array = []
           this.types.forEach((value,index)=>{
             array.push({'id':value.id,'name':value.name});
           })
           return array
         }

     }
}
</script>