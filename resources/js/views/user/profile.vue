<template>
    <v-container>
     
  <v-form ref="updateForm" lazy-validation v-model="valid">
                        <v-card>
                            <v-card-title>
                               Update Profile
                            </v-card-title>
                            <v-card-text>
                            <v-row>
                            <v-col cols="12" sm="6">
                                        <v-text-field v-model="user.name" outlined :rules="nameRule" label="Name"></v-text-field>  
                                </v-col>
                                <v-col cols="12" sm="6">
                                        <v-text-field v-model="user.surname" outlined :rules="surnameRule" label="Surname"></v-text-field>  
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="user.email" outlined :rules="emailRule" label="Email"></v-text-field>  
                                    
                                </v-col>
                                <v-col cols="12" sm="6">
                                        <v-text-field v-model="user.phone" outlined :rules="phoneRule" label="Phone"></v-text-field>  
                                    
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
                                label="Confirm Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="show2 = !show2"
                            >
                       </v-text-field>
                             </v-col>
                            </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn outlined color="red">Cancel</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn outlined color="green" @click="updateUser">Submit</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>



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
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
                <v-dialog persistent v-model="successDialog" max-width="300">
                    <v-card>
                        <v-card-text class="text-center green--text">
                            <h1>Successful</h1>
                            <p>Profile details were successully changed please logout and login for the changes to take effect</p>
                            <v-btn outlined color="green" @click=" logout">Logout</v-btn>
                        </v-card-text>
                    </v-card>
                </v-dialog>
    </v-container>
</template>
<script>
import * as general from '../../services/general_service'
import * as auth from '../../services/auth_service'

export default {
    data(){
        return{
         
            loading:false,
            valid:true,
            show1:false,
            show2:false,
            addDialog:false,
            updateDialog:false,
            snackbar:false,
            successDialog:false,
            color:'',
            message:'',
            valid:true,
            errors:[],
            user_id:auth.getCompany().user.id,
            user:{
              name:auth.getCompany().user.name,
              surname:auth.getCompany().user.surname,
              email:auth.getCompany().user.email,
              phone:auth.getCompany().user.phone,
              password:'',
              password_confirmation:''
            },
             emailRule:[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',

            ],
             rules: {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 8 || 'Min 8 characters',
                  passwordMatch: v =>(!!v && v)=== this.user.password || `The passwords you entered don't match`,
              },
            nameRule:[
               v=> !!v || 'Name is required'
            ], 
            surnameRule:[
               v=> !!v || 'Surname is required'
            ], 
            phoneRule:[
               v=> !!v || 'Phone is required'
            ],

        }
    },methods:{
       updateUser()
       {
           if(this.$refs.updateForm.validate())
           {
               this.loading = true;
               general.updateUser(this.user_id,this.user).then(response=>{
                this.loading = false
               this.successDialog = true
               }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message ="The email that you entered is already taken"
               })
           }
       },
      logout(){
         auth.logout().then(response=>{
           if(response.status ==200){
             auth.removeItem();
             this.$router.push({name:'Login'});
           }
         })
      }
    }
}
</script>