<template>
    <div>
           <v-dialog
                v-model="show"
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
                                    :items="accounttypes"
                                    label="Account Type"
                                    item-value="id"
                                    item-text="name"
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

                     <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"               
                >
                <v-card
                 height="200"
                >
                    <v-card-text class="text-center pa-20">
                        
                        <div  class="mt-10">
                    Please wait ....
                        </div>
                        <div class="mt-5">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                    >
                </v-progress-circular>
                        </div>
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
    </div>
</template>
<script>
import * as settings from '../../services/dashboard_service'
export default {
    props:['show'],
    data(){
        return{
            countrylist:['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],            
            sectorlist:['Private','Government','Councils','Parastatals','Mining','Health','NGO','Other'],
            provincelist:['Matabeleland South','Mashonaland Central','Mashonaland West','Matabeleland North','Mashonaland East','Masvingo','Midlands','Manicaland','Bulawayo','Harare'],
            typelist:this.$store.state.types,
            dialog:this.show,
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
        valid:true,
        loading:false,
        snackbar:false,
        color:'',
        message:''
    }
},methods:{
    update(){
        if(this.$refs.form.validate()){
                 this.loading = true
              settings.updateProfile(this.user).then(response=>{
                    this.loading = false
                   this.$emit('reload')
               }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
            }
    }
},computed:{
           computeList(){
            var list = [];
            if(this.user.province =='Matabeleland South')
            {
                 list=['Beitbridge','Bulilima','Gwanda','Insiza','Mangwe','Matobo','Umzingwane']
            }
            else if(this.user.province=='Matabeleland North'){
                list =['Binga','Bubi','Hwange','Lupane','Nkayi','Tsholotsho','Umguza']
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
        accounttypes(){
            return this.$store.state.types
        }
    }
}
</script>