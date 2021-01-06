<template>
    <div>
          <v-container>
              <v-row>
                  <v-col  
                    cols="12"
                     sm="12"
                     md="10"
                     offset-md="1"
                     >
              <v-form
               ref="form"
               v-model="valid"
               lazy-validation>
                <v-card>
                    <v-card-title>
                        <h3>New Account</h3>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="user.name"
                                    label="Name"
                                    outlined
                                    :rules="NameRules"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                  <v-text-field
                                    v-model="user.surname"
                                    label="Surname"
                                    outlined
                                    :rules="SurnameRules"
                                    >
                                </v-text-field>
                            </v-col>
                        </v-row>
                         

                         <v-row>
                             <v-col cols="12" sm="6">
                                   <v-text-field
                                    v-model="user.email"
                                    label="Email"
                                    outlined
                                    :rules="EmailRules"
                                    >
                                    </v-text-field>

                             </v-col>
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                    v-model="user.phone"
                                    label="Phone"
                                    outlined
                                    :rules="PhoneRules"
                                    >
                                    </v-text-field>  
                             </v-col>
                         </v-row> 
                          <v-row>
                             <v-col cols="12" sm="6">
                         <v-text-field
                                v-model="user.password"
                                outlined
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                label="Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                            >
                       </v-text-field>
                             </v-col>
                             <v-col cols="12" sm="6">
                          <v-text-field
                                v-model="user.password_confirmation"
                                outlined
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min,rules.passwordMatch]"
                                :type="show2 ? 'text' : 'password'"
                                label="ConfirmPassword"
                                hint="At least 8 characters"
                                counter
                                @click:append="show2 = !show2"
                            >
                       </v-text-field>
                             </v-col>
                         </v-row>
                         <h3>Organisation Details</h3>
                           <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="user.company"
                                    label="Company Name"
                                    outlined
                                    :rules="CompanyRules"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                  <v-select
                                    :items="types"
                                    label="Account Type"
                                    outlined
                                    v-model="user.accounttype"
                                    :rules="typeRules"
                                  >
                                </v-select>
                            </v-col>
                        </v-row>
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
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                         <v-btn
                            outlined
                            rounded
                            text
                            class="red lighten-3 white--text"
                        >
                            Cancel
                        </v-btn>
                         <v-btn
                            outlined
                            rounded
                            text
                             class="green lighten-3 white--text"
                             @click="submitForm"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <div class="mt-3">
                <div  class="mt-2">
                <router-link to="signin">Already got an acount ??</router-link>
                </div>
                <div class="mt-2">
                <router-link to="forgot">Forgot Passowrd ??</router-link>
                </div>
                </div>
              </v-form>
                  </v-col>
              </v-row>
          </v-container>
           <v-snackbar
            v-model="snackbar"
            timeout=3000
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
import * as auth from '../../services/auth_service'
export default {
    name:'register',
    mounted(){
    this.getTypes()
    },
    data(){
        return{
            valid:true,
             show1: false,
             show2: false,
             loading:false,
             errors:{},
            NameRules:[
               v=> !!v || 'Name is required'
            ], 
            SurnameRules:[
               v=> !!v || 'Surname is required'
            ], 
            PhoneRules:[
               v=> !!v || 'Phone is required'
            ],
            countryRules:[
               v=> !!v || 'Country is required'
            ],
            CompanyRules:[
               v=> !!v || 'Company name is required'
            ],
            typeRules:[
               v=> !!v || 'Select Account Type'
            ],
            cityRules:[
               v=> !!v || 'City is required'
            ],
            EmailRules:[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',

            ],
            PasswordRules:[
               v=> !!v || 'Password is required'
            ],
             rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                passwordMatch: v =>(!!v && v)=== this.user.password || `The passwords you entered don't match`,
              },
            countrylist:['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],            
            sectorlist:['Private','Government','Councils','Parastatals','Mining','Health','NGO','Other'],
            provincelist:['Matabeleland South','Mashonaland Central','Mashonaland West','Mashonaland North','Mashonaland East','Masvingo','Midlands','Manicaland','Bulawayo','Harare'],
            user:{
                name:'',
                surname:'',
                email:'',
                phone:'',
                city:'',
                country:'',
                company:'',
                accounttype:'',
                password:'',
                password_confirmation:'',
                province:'',
                district:'',

            },
            snackbar:false,
            message:'',
            color:'',
            types:[]
        }
    },methods:{
        getTypes(){
           this.loading = true;
           auth.getTypes().then(response=>{
               this.loading = false
               var list=[];
            response.data.map(function(value, key) {
                list.push(value.name);
            });
                        this.types = list
            })
        },
        submitForm(){
            if(this.$refs.form.validate()){
               auth.register(this.user).then(response=>{
                   this.$router.push({name:'Login'})
                   this.message = response.data.message
                   this.snackbar=true
                   this.color="green"
               }).catch(error=>{
                   switch (error.response.status) {
                       case 422:
                          this.message= error.response.data.errors.email[0] 
                          this.snackbar=true
                          this.color="red"
                      break;
                        case 500:
                          this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red"
                      break;
                   
                   
                       default:
                           break;
                   }
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
        computeTypes(){
            var list =[]
            this.types.foreach()
        }
    }
}
</script>