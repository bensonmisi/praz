<template>
    <div>
        <v-btn color="blue"  small depressed fab class="white--text" @click="editCompanyDialog=true" ><v-icon>fa fa-pencil</v-icon></v-btn>
                               
     <v-dialog
   v-model="editCompanyDialog"
   max-width="500">
   <v-form v-model="valid" ref="form" lazy-validation>
   <v-card>
       <v-card-title>
           <div>Edit Account</div>
           <v-spacer></v-spacer>
           <div>
               <v-btn icon @click="editCompanyDialog=false"><v-icon>mdi-times</v-icon></v-btn>
           </div>
       </v-card-title>
       <v-card-text>
          <v-text-field outlined label="Name" v-model="name" :rules="nameRule"></v-text-field>
          <v-select outlined label="Country" :items="countrylist" v-model="country" :rules="countryRule"></v-select>
          <v-select outlined label="Account type" :items="getTypes" item-text="name" item-value="id" v-model="type" :rules="typeRule"></v-select>
    
       </v-card-text>
       <v-card-actions>
           <v-btn outlined color="red" @click="editCompanyDialog=false">
               Cancel
           </v-btn>
            <v-btn outlined color="green" @click="updateCompany">
              Submit
           </v-btn>
       </v-card-actions>
   </v-card>
   </v-form>
  </v-dialog>

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
import * as company from '../../../services/company_service'
export default {
    props:['company'],
    data(){
        return{
            show:false,
            editCompanyDialog:false,
            loading:false,
            name:this.company.name,
            nameRule:[v=> !!v || 'Name required'],
            surnameRule:[v=> !!v || 'Surname required'],
            countrylist:['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],            
            country:this.company.country,
            countryRule:[v=> !!v || 'Country is required'],
            type:this.company.accounttype_id,
            typeRule:[v => !!v || 'Type required'],
            valid:true
        }
    },methods:{
          updateCompany(){
           var formData = new FormData()
           formData.append('name',this.name)
           formData.append('accounttype',this.type)
           formData.append('country',this.country)
           formData.append('id',this.company.id)
           if(this.$refs.form.validate()){
               this.loading = true
               company.updateCompany(formData).then(response=>{
                   this.loading = false
                   this.snackbar = true
                   this.color ="green"
                   this.message ="Successfully updated Company Details"
                   this.comp = response.data.company
                   this.editCompanyDialog=false
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
        getTypes(){
            return this.$store.state.types
        }
    }
}
</script>