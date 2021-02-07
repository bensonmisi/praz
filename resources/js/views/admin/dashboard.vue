<template>
<div>
    <v-container>
        
                <v-card>
                    <v-card-text>                      
                        <div class="display-1">{{name}}</div>
                    </v-card-text>
                </v-card>
                <v-card class="mt-2">
                 <v-card-title class="grey lighten-4 display-1">My Tasks</v-card-title>
                 <v-card-text>
                   <v-simple-table>
                       <thead>
                           <tr>
                               <th>Assigned On</th>
                               <th>Company</th>
                               <th>Action</th>
                               <th>Status</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                           <template v-if="tasks.length">
                             <tr v-for="task in tasks" :key="task.company_id">
                                 <td>{{task.assigned_on}}</td>
                                 <td>{{task.name}}</td>
                                 <td>{{task.action}}</td>
                                 <td>{{task.status}}</td>
                                 <td>
                                     <template v-if="task.action=='INVOICE_APPROVAL'">
                                         <task-invoice :company="task.company_id"></task-invoice>
                                     </template>
                                     <template v-else>
                                         <task-document></task-document>
                                     </template>
                                 </td>
                             </tr>
                           </template>
                           <template v-else>
                               <tr>
                                   <td colspan="5" class="text-center red--text">No tasks Found</td>
                               </tr>
                           </template>
                       </tbody>
                   </v-simple-table>
                 </v-card-text>
                </v-card>
          
    </v-container>

    <v-dialog width="400" persistent v-model="changeModel">
        <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
            <v-card-title>Change Password</v-card-title>
            <v-card-text>
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
                            
                       </v-text-field>  <v-text-field
                                v-model="password_confirmation"
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

            </v-card-text>
            <v-card-actions>
                <v-btn rounded outlined block color="green" @click="changePassword">Update</v-btn>
            </v-card-actions>
        </v-card>
        </v-form>
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
import * as auth from '../../services/auth_service'
import * as dashboard from '../../services/admin_dashboard_service'
import taskInvoice  from '../../components/tasks/invoice.vue'
import taskDocument from '../../components/tasks/document.vue'
import Password from 'vue-password-strength-meter'
export default {
    components:{
     Password,
     taskInvoice,
     taskDocument
    },
    data(){
      return{
          role:'',
          name:'',
          snackbar:false,
          loading:false,
          message:'',
          color:'',
          valid:true,
          show1: false,
          show2: false,
          changeModel:false,
          password:'',
          password_confirmation:'',
          tasks:[],
          rules:
          {
            required: value => !!value || 'Enter a password',
            min: v => v.length >= 8 || 'Use 8 characters or more for your password',
            passwordMatch: v =>(!!v && v)=== this.password || `The passwords you entered don't match`,
            strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.',
         },
            
         
        
      }
    },
    mounted(){
     this.getProfile()
   
    },methods:{
        getProfile(){
            this.role = auth.getCompany().user.token_scope       
           this.name = auth.getCompany().user.user.name +' '+auth.getCompany().user.user.surname
           if(this.role !== 'administrator'){
            this.$router.push({name:'welcome'})
           }else{
               this.loading = true;
               dashboard.getDashboard().then(response=>{
                  this.loading = false
                  this.tasks = response.data.data.tasks
                  if(response.data.data.status == 'expired'){
                      this.snackbar = true
                      this.color ="red"
                      this.message ="Your password  has expired please  updated"
                      this.changeModel = true
                  }
               }).catch(error=>{
                   this.loading = false
                   this.snackbar = true
                   this.color="red"
                   this.message = error.response.data.message
               })
           }

           
        },changePassword(){
           if(this.$refs.form.validate()){
               var formdata = new FormData();
               
               formdata.append('password',this.password)
               formdata.append('password_confirmation',this.password_confirmation)
                this.loading = true
                dashboard.changepassword(formdata).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="green"
                    this.message = "Password Successfully changed"
                     this.changeModel = false
                }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message = error.response.data.message
                })
           }
        }
    }
}
</script>