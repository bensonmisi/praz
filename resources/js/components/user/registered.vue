<template>
<div>
   <v-container fluid class="white">
    
               <div class="d-flex justify-between">
                   <div>
                       <div class="display-1 hidden-sm-and-down">{{company.name}} </div>
                        <div class=" font-weight-bolder hidden-md-and-up">{{company.name}}</div>
                       <div>{{company.regnumber}}</div>
                   </div>
                   <v-spacer></v-spacer>
                   <div>                       
                    <v-btn
                     depressed
                     color="primary"
                     x-large
                     class=" hidden-sm-and-down"
                     @click="startRegistration"
                    >
                    Register Category
                    </v-btn>
                     <v-btn
                    depressed
                    color="primary"
                     small
                     rounded
                     class=" hidden-md-and-up"
                     @click="startRegistration"
                    >
                     Register Category
                    </v-btn>
                   </div>
               </div>
        
   </v-container>
 <v-container fluid>
    
<div>
    <v-row>

        <!-- 2/3  -->
        <v-col cols="12" sm="8">
            
    <v-card flat>
        <v-card-title class="green lighten-4 mt-4">
            <span>Registered Supplier Categories</span>
            
        </v-card-title>
        <v-card-text>
            <v-row class=" hidden-sm-and-down">
                <v-col   sm="4">
                    <div class="black--text font-weight-bold">Category</div>                    
                </v-col>
                <v-col  sm="2">
                     <div class="black--text font-weight-bold">Year</div>
                </v-col>
                <v-col  sm="2">
                     <div class="black--text font-weight-bold">Status</div>
                </v-col>
                <v-col  sm="2">
                     <div class="black--text font-weight-bold">Tenders</div>
                </v-col>
                <v-col  sm="2">
                    
                </v-col>              
            </v-row>
             <v-divider></v-divider>
                <div v-if="registrations.length > 0">
             <div v-for="reg in registrations" :key="reg.id">
              <v-row>
                <v-col  sm="4">
                    <div class="black--text font-weight-bold" v-if="reg">{{reg.category.code}}</div>
                    <div class=" text-xs hidden-sm-and-down" v-if="reg">{{reg.category.name}}</div>
                </v-col>
                <v-col  sm="2">
                     <div>{{reg.expire_year}}</div>
                </v-col>
                <v-col sm="2">                     
                    
                    <span small>
                      {{reg.status}}
                    </span>
                   
                </v-col>
                <v-col  sm="2">                     
                     <v-badge
                        color="red"
                        :content="reg.category.notices.length ? reg.category.notices.length : 0 "
                        >  
                        <v-btn icon>
                            <v-icon>fa fa-bell-o</v-icon>
                        </v-btn>
                     </v-badge> 
                </v-col>                
                <v-col  sm="2">                     
                    <div class="d-flex justify-center" v-if="reg.status=='APPROVED'"> 
                          <div v-if="reg.expire_year == currentyear">
                          <v-btn rounded depressed class="blue white--text hidden-sm-and-down" @click="downloadCertificate(reg.id)">Download</v-btn>
                          <v-btn rounded  icon class="blue white--text hidden-md-and-up"  @click="downloadCertificate(reg.id)">
                               <v-icon>fa fa-download</v-icon>
                          </v-btn>
                          </div>
                          <div v-else>
                                <v-icon color="red">fa fa-lock</v-icon> Locked
                          </div>
                     </div>
                </v-col>
            </v-row>         
             <v-divider></v-divider>
        
             </div>   
                </div>
                <div v-else>
                      <div class="red--text text-center pa-10">No registrations found for the current year.Please note all registration for previous years have expire please  click button below to register your prefered categories </div>
                       <div class=" d-flex justify-center"><v-btn rounded color="green" small  @click="startRegistration">Register now</v-btn></div>
              </div>     
         
         
        </v-card-text>
    </v-card>
   
        </v-col>


<!--  1/3 -->


        <v-col cols="12" sm="4">
            <div>
            
         <v-list
            two-line
         > 
             <div v-for="document in  checkDocuments" :key="document.id"> 
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title v-if="document">{{document.name}}</v-list-item-title>
                    <v-list-item-subtitle>
                        <div class="green--text" v-if="document.uploaded">Uploaded</div>
                        <div class="red--text" v-else >Pending</div>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                   <upload :document="document" v-on:refreshDashboard="getDashboard"/>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
             </div>
               
         </v-list>
              
            </div>

            <div>
                <v-card flat>
                    <v-card-title class="text-center red lighten-4">Pending invoices</v-card-title>
                    <v-card-text>

                        <v-btn block outlined  color="red" class="mt-5" v-if="invoice.length > 0 "  @click="startRegistration"> Continue</v-btn>
                        <div v-else class=" red--text pa-10 text-center">No Pending Invoices found</div>

                    </v-card-text>
                </v-card>
            </div>

            <div class="mt-5">
                <v-card flat>
                    <v-card-title class="text-center blue lighten-4">Awaiting Verification</v-card-title>
                    <v-card-text>
                        <v-list>
                            <div v-if="awaiting.length >0">
                                  <v-simple-table>
                                        <thead>
                                            <tr><th>Reference Number</th></tr>
                                        </thead>
                                        <tbody>
                                <template v-for="aw in awaiting">
                                    
                                            <template v-for="transfer in aw.transfers">
                                            <tr  :key="transfer.id">
                                                
                                                <td>
                                                    {{transfer.referencenumber}}
                                                </td>
                                                <td class="text-right">
                                                  <v-btn outlined rounded color="green" @click="verify(transfer.id,transfer.referencenumber)">Verify</v-btn>
                                                </td>
                                            </tr>
                                            </template>
                                     
                                </template>
                                   </tbody>
                                    </v-simple-table>
                            </div>
                           <div v-else class="red--text pa-10 text-center">
                                No Payments Awaiting Verification found
                            </div>
                        </v-list>
                    </v-card-text>
                </v-card>
            </div>
      
        </v-col>
    </v-row>
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
                
                >
                {{ message }}         
                </v-snackbar>

                 <v-dialog
                v-model="profileDialog"
                  fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                persistent
                width="700"
                >
               
                <v-card>
                     <v-form ref="form" v-model="valid" lazy-validation>
                     <v-toolbar
                            dark
                            color="primary"
                            flat
                            >
                    <v-toolbar-title> Update Company Profile</v-toolbar-title>
                     
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              color="green"
              @click="update"
            >
            Update
            </v-btn>
          </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                                 <v-row>
                             <v-col cols="12" sm="6">
                                <v-select
                                    :items="countrylist"
                                    label="Country"
                                    outlined
                                    v-model="user.country"
                                    :rules="countryRules"
                                  >
                                </v-select>
                             </v-col>
                             <v-col cols="12" sm="6">
                                   <v-text-field
                                    v-model="user.city"
                                    label="City"
                                    outlined
                                    :rules="cityRules"
                                    >                            
                                    </v-text-field>
                             </v-col>
                         </v-row>
                            <v-row v-if="user.country =='Zimbabwe'">
                             <v-col cols="12" md="6">
                                <v-select
                                    :items="provincelist"
                                    label="Province"
                                    outlined
                                    v-model="user.province"
                                    :rules="countryRules"
                                  >
                                </v-select>
                             </v-col>
                             <v-col cols="12" md="6">
                                     <v-select
                                    :items="computeList"
                                    label="District"
                                    outlined
                                    v-model="user.district"
                                    :rules="countryRules"
                                  >
                                </v-select>
                             </v-col>
                         </v-row>
                         <v-row>
                             <v-col cols="12" sm="6">
                                <v-select
                                    :items="typelist"
                                    label="Account Type"
                                    outlined
                                    v-model="user.accounttype"
                                    :rules="typeRules"
                                  >
                                </v-select>
                             </v-col>
                              <v-col cols="12" sm="6">
                                   <v-text-field
                                    label="Emails"
                                    outlined
                                    v-model="user.email"
                                    :rules="emailRules"
                                  >
                                   </v-text-field>
                             </v-col>
                         </v-row>
                         <v-row>
                             <v-col cols="12" sm="6">
                                  <v-text-field
                                    label="Phones"
                                    outlined
                                    v-model="user.phone"
                                    :rules="phoneRules"
                                  >
                                   </v-text-field>
                             </v-col>
                              <v-col cols="12" sm="6">
                                   <v-text-field
                                    label="address"
                                    outlined
                                    v-model="user.address"
                                    :rules="addressRules"
                                  >
                                   </v-text-field>
                             </v-col>
                         </v-row>
                        
                        </v-container>
                    </v-card-text>
                   
                   </v-form>
                </v-card>
                
                </v-dialog>

                <v-dialog v-model="changeDialog" max-width="300">
                    <v-card>
                        <v-form ref="refform" v-model="refform" lazy-validation>
                        <v-card-title>Update Ref Number</v-card-title>
                        <v-card-text>
                               <div class="pa-10 red lighten-3 white--text" >
                      We could not find your reference number,Please  confirm with your bank if this is the correct reference Number
                                        </div>
                            <v-text-field outlined v-model="refnumber" :rules="refnumberRule"></v-text-field>
                        </v-card-text>
                        <v-card-actions >
                            <v-btn rounded outlined color="red"> Cancel</v-btn>
                            <v-btn rounded outlined color="green" @click="updateReference">Update</v-btn>
                        </v-card-actions>
                        </v-form>
                    </v-card>

                </v-dialog>
</div>
 </v-container>
</div>
</template>
<script>
import * as registrations  from '../../services/dashboard_service'
import * as auth from '../../services/auth_service'
import Upload from './upload.vue'
import claim from '../../components/user/claim'
import {mapGetters} from 'vuex'
export default {
    name:'registered',
    components:{
        Upload,
        claim
    },
    data(){
        return{
            documents:[],
            registrations:[],
            types:[],
            loading:false,
            snackbar:false,
            color:'',
            message:'',
            awaiting:[],
            company:'',
            profileDialog:false,
            valid:true,
            regnumber:'',
            refnumber:'',
            ref_id:'',
            invoice:[],
            currentyear : new Date().getFullYear(),
            countryRules:[
               v=> !!v || 'Country is required'
            ],
            addressRules:[
               v=> !!v || 'Address is required'
            ],
            emailRules:[
               v=> !!v || 'Emails is required'
            ],
             phoneRules:[
               v=> !!v || 'Phone is required'
            ],
            typeRules:[
               v=> !!v || 'Select Account Type'
            ],
            cityRules:[
               v=> !!v || 'City is required'
            ],
            typeRules:[
               v=> !!v || 'is required'
            ],
            countrylist:['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],            
            sectorlist:['Private','Government','Councils','Parastatals','Mining','Health','NGO','Other'],
            provincelist:['Matabeleland South','Mashonaland Central','Mashonaland West','Mashonaland North','Mashonaland East','Masvingo','Midlands','Manicaland','Bulawayo','Harare'],
              user:{
                city:'',
                country:'',
                accounttype:'',
                province:'',
                district:'',
                email:'',
                phone:'',
                address:''

            },
            changeDialog:false,
            refnumberRule:[v => !!v || 'Reference number required'],
            refform:true
        }
    },
    mounted(){
        this.getDashboard()
         
    },methods:{
        getDashboard(){
            this.loading = true
           registrations.getRegistrations().then(response=>{
               this.loading = false
               this.documents = response.data.documents
               this.registrations = response.data.registrations
               this.company = response.data.company
               this.types = response.data.types
               this.awaiting= response.data.awaiting
               this.invoice = response.data.invoice
               this.$store.dispatch('setCategorylist',response.data.category)
               this.$store.dispatch('setInvoice',response.data.invoice)
               this.$store.dispatch('setRegyear',response.data.years)
               this.$store.dispatch('setCurrencylist',response.data.currency)
               if(response.data.company.accounttype_id == '' ||  response.data.company.country == '' || response.data.contacts == null )
               {
                   this.profileDialog = true
               }
           }).catch(error=>{
                        this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
           })
          
        },startRegistration(){
                let count = 0;
             this.documents.forEach((value,index)=>{
               
               if(value.company == null){
                count++
               }   
             
             })
           if(count >0){
               this.snackbar = true
               this.message ="Please upload all required company documents in order to proceed with category registration"
               this.color="red"
           }else{
             this.$store.dispatch('setDocumentstatus',true)
            this.$router.push({name:'Invoicing'})
           }
         
        },
        update(){
            if(this.$refs.form.validate()){
                 this.loading = true
               registrations.updateProfile(this.user).then(response=>{
                    this.loading = false
                    this.documents = response.data.documents
                    this.registrations = response.data.registrations
                     this.profileDialog = false
                     this.snackbar = true
                     this.message ="Successfully updated company profile"
                     this.color="green"
               }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
            }
        },
        verify(id,referencenumber){
                 this.loading = true
               registrations.verify(id).then(response=>{
                    this.loading = false
                    this.refnumber = referencenumber
                    this.ref_id = id
                     if(response.data.status =='PAID')
                       {                
                          this.getDashboard()
                             this.color="green"
                              this.snackbar = true
                        this.color="red"
                     this.message =response.data.message
                       }
                       else if(response.data.status =="NOT_FOUND"){
                              this.changeDialog = true
                       }else{
                     this.snackbar = true
                        this.color="red"
                     this.message =response.data.message
                     }
                  
                      
               }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })    
        },updateReference(){
             if(this.$refs.refform.validate()){
                 var formdata = new FormData()
                 formdata.append('id',this.ref_id)
                 formdata.append('referencenumber',this.refnumber)
                 this.loading = true
                 registrations.updateREF(formdata).then(response=>{
                     this.loading = false
                     this.changeDialog = false
                     this.awaiting= response.data.awaiting
             this.snackbar = true
                        this.color="green"
                     this.message ='Reference number successfully updated please  click the verify button to continue'
                 }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                }) 
             }
        },
        downloadCertificate(id){
          this.loading = true
           registrations.downloadCertificate(id).then(response=>{
             this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'certificate.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
        }  
     

    },computed:{
         checkDocuments(){
             let docs = [];
             this.documents.forEach((value,index)=>{
                 let uploaded = false
                 let status =""
               if(value.company != null){
                  uploaded = true
                  status = value.company.status
               }   
               docs.push({'name': value.name,"id":value.id,"uploaded":uploaded,"status":status})
             })
             return docs
         },
         countDocuments(){
                let count = 0;
             this.documents.forEach((value,index)=>{
               
               if(value.company == null){
                count++
               }   
             
             })
             return count
         },countApproved(){
                  let count = 0;
             this.documents.forEach((value,index)=>{
               
               if(value.company != null){
                  if(value.company.status=='APPROVED'){
                      count
                  }
               }   
             
             })
             return count 
         },
          computeList(){
            var list = [];
            if(this.user.province =='Matabeleland South')
            {
                 list=['Beitbridge','Bulilima','Gwanda','Insiza','Mangwe','Matobo','Umzingwane']
            }
            else if(this.user.province =='Bulawayo'){
                list =['Bulawayo']
            }
            else if(this.user.province=='Mashonaland Central'){
                list=["Bindura","Guruve","Mazowe","Mbire","Mount Darwin","Muzarabani"]
            }
             else if(this.user.province=='Mashonaland West'){
                list=["Chegutu","Chinhoyi","Hurungwe","Kariba","Makonde","Mhondoro-Ngezi","Sanyati","Zvimba"]
            }
             else if(this.user.province=='Mashonaland East'){
                list=["Chikomba","Goromonzi","Marondera","Mudzi","Murehwa","Mutoko","Seke","Uzumba-Maramba-Pfungwe"]
            }
            else if(this.user.province=='Masvingo'){
                list=["Bikita","Chiredzi","Chivi","Gutu","Masvingo","Mwenezi","Zaka"]
            }
            else if(this.user.province=='Midlands'){
                list=["Chirumhanzu","Gokwe North","Gokwe South","Gweru","Kwekwe","Mberengwa","Shurugwi","Zvishavane"]
            }
             else if(this.user.province=='Manicaland'){
                list=[ "Buhera","Chimanimani","Chipinge","Makoni","Mutare","Mutasa","Nyanga"]
            }
            else if(this.user.province=='Harare'){
                list=['Harare']
            }
           
           return list;
        },
        typelist(){
            var list =[]
            this.types.forEach((value,index)=>{
              list.push(value.name)
            })

            return list
        }
    }
}
</script>