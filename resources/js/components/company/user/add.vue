<template>
<div>
    <v-btn fab small depressed color="primary" @click="adduserDialog=true"><v-icon>fa fa-plus</v-icon></v-btn>
     <v-dialog
   v-model="adduserDialog"
   max-width="500">
   <v-form v-model="valid" ref="userForm" lazy-validation>
   <v-card>
       <v-card-title>
           <div>Add User</div>
           <v-spacer></v-spacer>
           <div>
               <v-btn icon @click="adduserDialog=false"><v-icon>mdi-times</v-icon></v-btn>
           </div>
       </v-card-title>
       <v-card-text>
          <v-text-field outlined label="Name" v-model="name" :rules="nameRule"></v-text-field>
           <v-text-field outlined label="Surname" v-model="surname" :rules="surnameRule"></v-text-field>
            <v-text-field outlined label="email" v-model="email" :rules="emailRule"></v-text-field>
       
       </v-card-text>
       <v-card-actions>
           <v-btn outlined color="red" @click="adduserDialog=false">
               Cancel
           </v-btn>
            <v-btn outlined color="green" @click="addUser">
              Submit
           </v-btn>
       </v-card-actions>
   </v-card>
   </v-form>
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
import * as company from '../../../services/company_service'
export default {
    props:['comp'],
    data(){
        return{
            name:'',
            surname:'',
            email:'',
            emailRule:[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',

            ],
            nameRule:[v=> !!v || 'Name required'],
            surnameRule:[v=> !!v || 'Surname required'],
            valid:true,
            adduserDialog:false,
            snackbar:false,
            loading:false,
            message:'',
            color:''

        }
    },methods:{
         addUser(){
            if(this.$refs.userForm.validate()){
                var formData = new FormData()
                formData.append('name',this.name)
                formData.append('surname',this.surname)
                formData.append('email',this.email)
                formData.append('id',this.comp)
               this.loading = true
                company.adduser(formData).then(response=>{
                  this.loading = false
                  this.adduserDialog = false;
                    this.snackbar = true
                 this.color = "green"
                 this.message="USer successfully created"
                }).catch(error=>{
                          this.loading = false
                          this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red" 
             })
            }
        }
    }
}
</script>