<template>
         <v-container>
              <v-row>
                  <v-col cols="12" md="6" offset-md="3">
                      <v-card>
                          <v-card-title>Reset Password</v-card-title>
                          <div v-if="!success">
                          <v-form v-model="valid" ref="form" lazy-validation>
                             
                          <v-card-text>                             
                              <v-text-field outlined label="Email" v-model="email" :rules="emailRule"></v-text-field>  
                               <v-text-field
                                v-model="password"
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
                          <v-text-field
                                v-model="confirm_password"
                                outlined
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min,rules.passwordMatch]"
                                :type="show1 ? 'text' : 'password'"
                                label="Confirm Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                            >
                       </v-text-field>                            
                          </v-card-text>
                          <v-card-actions>
                                <v-btn outlined color="red">Cancel</v-btn>
                              <v-btn outlined color="green" @click="resetPassword">Submit</v-btn>
                          </v-card-actions>
                            
                             
                          </v-form>
                          </div>
                          <div v-else class="text-center green--text pa-10">
                              <div>
                             Password successfully  Reset  Click button below to login
                              </div>
                              <div>
                             <v-btn outlined color="green" to="/Login">Login</v-btn> 
                              </div>
                          </div>
                      </v-card>
                  </v-col>
              </v-row>
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
import * as auth from '../../services/auth_service'
export default {
    data(){
        return{
            token:this.$route.params.token,
            valid:true,
            show1:false,
            message:'',
            color:'',
            loading:false,
            snackbar:false,
            email:'',
            emailRule:[v=> !!v || 'Email Required'],
            password:'',
            passwordRule:[v => !!v || 'Password required'],
            confirm_password:'',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                passwordMatch: v =>(!!v && v)=== this.password || `The passwords you entered don't match`,
              },
            success:false

        }

    },methods:{
        resetPassword(){
            if(this.$refs.form.validate()){
                var formData = new FormData()
                formData.append('email',this.email)
                formData.append('password',this.password)
                formData.append('password_confirmation',this.confirm_password)
                formData.append('token',this.token)
                auth.resetPassword(formData).then(response=>{
                     this.loading= false
                     this.success=true
                 }).catch(error=>{
                          this.loading= false
                          this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red"
                 })
            }
        }
    }
}
</script>