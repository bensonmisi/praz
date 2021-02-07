<template>
    <div>
         <v-btn rounded outlined  class="mt-2" color="green" @click="geUsers">Assign</v-btn>
         <v-dialog width="500px" v-model="userDialog">
             <v-card>
                 <v-card-title>Users</v-card-title>
                 <v-card-text>
                     <v-text-field outlined label="Filter User" v-model="filter"></v-text-field>
                     <v-simple-table>
                         <thead>
                             <tr><th>User</th><th>Action</th></tr>
                         </thead>
                         <tbody>
                             <tr v-for="user in searchUsers" :key="user.id">
                                 <td>
                                     <div>{{user.name}}{{user.surname}}</div>
                                      <div>{{user.email}}</div>
                                 </td>
                                 <td>
                                     <v-btn rounded outlined depressed small color="green" @click="assignUser(user.id)">Assign</v-btn>
                                 </td>
                             </tr>
                         </tbody>

                     </v-simple-table>
                 </v-card-text>
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
import * as task from '../../services/task_service'
export default {
    props:['company'],
    data(){
        return{
            userDialog:false,
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            users:[],
            filter:'',
        }
    },methods: {
        geUsers(){
                this.loading = true
                task.getUsers().then(response=>{
                    this.loading = false
                  this.users = response.data.data 
                  this.userDialog = true  
                }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message =error.response.data.message
                })
        },assignUser(id){
            var formdata = new FormData()
            formdata.append('agent',id)
            formdata.append('company',this.company)
            formdata.append('action','INVOICE_APPROVAL')
            this.loading = true

         task.assignUser(formdata).then(response=>{
           this.loading = false
           this.snackbar = true
           this.color="green"
           this.message="User successfully  assigned"
           this.userDialog = false
           this.$emit('reload')  
         }).catch(error=>{
                    this.loading = false
                    this.snackbar = true
                    this.color="red"
                    this.message =error.response.data.message
                })
        }
    },computed:{
        searchUsers(){
              return this.users.filter(user=>(!user.name.toUpperCase().indexOf(this.filter.toUpperCase())));
       
        }
    }
}
</script>