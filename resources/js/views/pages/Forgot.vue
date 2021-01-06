<template>
     <v-container>
              <v-row>
                  <v-col cols="12" md="6" offset-md="3">
                      <v-card>
                          <v-card-title>Forgot Password</v-card-title>
                          <v-form v-model="valid" ref="form" lazy-validation>
                              <div v-if="!success">
                          <v-card-text>                             
                              <v-text-field outlined label="Email" v-model="email" :rules="emailRule"></v-text-field>                             
                          </v-card-text>
                          <v-card-actions>
                                <v-btn outlined color="red">Cancel</v-btn>
                              <v-btn outlined color="green" @click="forgotPassword">Submit</v-btn>
                          </v-card-actions>
                              </div>
                              <div v-else class="text-center green--text pa-10">
                                  <p>Password reset link successfully send  to your email: {{email}}</p>
                              </div>
                          </v-form>
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
            email:'',
            emailRule:[v => !!v || 'Email is required'],
            valid:true,
            message:'',
            color:'',
            snackbar:false,
            loading:false,
            success:false
        }
    },methods:{
         forgotPassword(){
             if(this.$refs.form.validate()){
                 this.loading = true
                 auth.forgot(this.email).then(response=>{
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