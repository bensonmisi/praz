<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                    <div>Users</div>
                    <v-spacer></v-spacer>
                    <v-btn fab dark color="green" @click="addDialog=true"><v-icon>fa fa-plus</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
            <v-simple-table>
                 
                    <thead>
                        <tr>
                         <th class="text-left">
                          Name
                        </th>
                        <th class="text-left">
                         Email
                        </th>
                        <th class="text-left">
                           Status
                        </th>
                         <th class="text-center">
                         
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in users"
                        :key="item.id"
                        >
                        <td>{{ item.name }} {{ item.surname }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.status}}</td>
                        <td class="d-flex">
                                <v-btn rounded outlined icon color="blue" @click="editUser(item)"><v-icon>fa fa-edit</v-icon></v-btn>
                                <v-btn rounded outlined icon color="red" @click="changeStatus(item.id,'DEACTIVATE')" v-if="item.status=='ACTIVATED'"><v-icon>mdi-eye-off</v-icon></v-btn>
                                <v-btn rounded outlined icon color="green" @click="changeStatus(item.id,'ACTIVATED')" v-else><v-icon>mdi-eye</v-icon></v-btn>

                        </td>
                        </tr>
                    </tbody>
                
                </v-simple-table>   
                </v-card-text>
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

             <v-dialog
              v-model="addDialog"
              max-width="600"
             >
             <v-form ref="addForm" lazy-validation v-model="valid">
                 <v-card>
                     <v-card-title>
                         Add User
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
                                 name="input-10-2"
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
                                 name="input-10-2"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
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
                         <v-btn outlined color="red" @click="addDialog=false">Cancel</v-btn>
                         <v-spacer></v-spacer>
                         <v-btn outlined color="green" @click="addUser">Submit</v-btn>
                     </v-card-actions>
                 </v-card>
             </v-form>
            </v-dialog>
                   <v-dialog
                        v-model="updateDialog"
                        max-width="600"
                    >
                    <v-form ref="updateForm" lazy-validation v-model="valid">
                        <v-card>
                            <v-card-title>
                                Edit User
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
    </v-container>
</template>
<script>
import * as general from '../../services/general_service'

export default {
    data(){
        return{
            users:[],
            snackbar:false,
            color:'',
            message:'',
            user_id:'',
            loading:false,
            valid:true,
            show1:false,
            show2:false,
            addDialog:false,
            updateDialog:false,
            user:{
              name:'',
              surname:'',
              email:'',
              phone:'',
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
    },mounted() {
       this.getUsers() 
    },methods:{
        getUsers(){
            this.loading = true
            general.getUsers().then(response=>{
                this.loading = false
                this.users = response.data.users
            }).catch(error=>{
                this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
            })
        },
        addUser(){
          if(this.$refs.addForm.validate()){
              this.loading = true
              general.addUser(this.user).then(response=>{
                this.loading = false
                this.users = response.data.users
              }).catch(error=>{
                  this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
          }
        },
        editUser(user){
            this.user.name = user.name
            this.user.surname = user.surname
            this.user.email= user.email
            this.user.phone = user.phone
            this.user_id = user.id
            this.updateDialog = true
       },
       updateUser()
       {
           if(this.$refs.updateForm.validate())
           {
               this.loading = true;
               general.updateUser(this.user_id,this.user).then(response=>{
                this.loading = false
                this.users = response.data.users
               }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message =error.response.data.message
               })
           }
       },
       changeStatus(id,status){
        let formData = new FormData()
         formData.append('status',status)
         this.loading = true
         general.changeStatus(id,formData).then(response=>{
                this.loading = false
                this.users = response.data.users
                this.snackbar = true
                this.color="green"
                this.message ='Successfully change user status'
               }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message =error.response.data.message
               })
       }



    }
}
</script>