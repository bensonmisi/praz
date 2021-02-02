<template>
    <div>
          <v-container>
              <v-row>
                  <v-col  
                    cols="12"
                     md="6"
                     offset-md="3"
                     >
              <v-form
               ref="form"
               v-model="valid"
               lazy-validation>
                <v-card>
                    <v-card-title>
                        <h3>Login</h3>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>                    
                           <v-text-field
                         v-model="user.email"
                         label="Email"
                          outlined
                         :rules="EmailRules"
                         >

                         </v-text-field>
                         <v-text-field
                                v-model="user.password"
                                outlined
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules= PasswordRules
                                :type="show1 ? 'text' : 'password'"
                                label="Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                            >
                       </v-text-field>
                         <v-checkbox
                        v-model="user.remember_me"
                        label="Remember me"
                        >
                    </v-checkbox>
                         
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <div>
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
                             :loading="loading"
                            :disabled="loading"
                        >
                            Submit
                        </v-btn>
                        </div>
                    </v-card-actions>

                </v-card>
                <div  class="text-center mt-4 mb-2">
                <router-link to="Register">Do not have an acount ??</router-link>
                </div>
                <div class="text-center">
                <router-link to="forgot">Forgot Passowrd ??</router-link>
                </div>
              
              
              </v-form>
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
                v-model="dialog"
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
    </div>
</template>
<script>
import * as auth from '../../services/auth_service'
export default {
    name:'Login',
    data(){
        return{
            loader: null,
            loading: false,
            valid:true,
             show1: false,
            EmailRules:[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',

            ],
            PasswordRules:[
               v=> !!v || 'Password is required'
            ],
            user:{
                email:'',
                password:'',
                remember_me:''
            },
            snackbar:false,
            message:'',
            color:'',
            dialog:false
        }
    },methods:{
        submitForm(){
            
            if(this.$refs.form.validate()){
                this.dialog = true
               auth.login(this.user).then(response=>{
                   this.dialog = false
                   
                           if(response.status ==200) 
                           { 
                          
                         auth.setToken(response.data.data);                     
                          this.$router.push({name:'Dashboard'});
                           }
                           else{
                            this.message= response.data.message
                          this.snackbar=true
                          this.color="red"   
                           }
               }).catch(error=>{
                    this.dialog = false
                   switch (error.response.status) {
                       case 401:
                          this.message= error.response.data.message
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
    }
}
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>