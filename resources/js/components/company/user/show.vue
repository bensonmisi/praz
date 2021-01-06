<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Users</div>
                 <v-spacer></v-spacer>
                 <addUser :comp="comp.id"></addUser>
              </v-card-title>
         <v-card-text>
          <v-simple-table>
              <thead>
                  <tr>
                      <th>
                      Name
                      </th>
                  <th>
                      Surname
                  </th>
                  <th>
                      Email
                  </th>
                    <th>
                   
                     </th>
                  </tr>
            </thead>
            <tbody>
                <template v-if="comp.users">
                <tr v-for="user in comp.users" :key="user.id">
               
                       <td>{{user.name}}</td>
                       <td>{{user.surname}}</td>
                       <td>{{user.email}}</td>
                       <td class="text-right"><v-btn outlined rounded class="blue white--text" @click="passwordreset(user.id)">Reset</v-btn></td>
                   
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="4" class="red--text text-center px-10">No Users Found</td>
                    </tr>
                </template>
            </tbody>
          </v-simple-table>
         </v-card-text>
         </v-card>
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
import addUser from './add'
import * as company from '../../../services/company_service'
export default {
    props:['comp'],
    data(){
        return{
            snackbar:false,
            loading:false,
            message:'',
            color:''
        }
    },
    components:{
        addUser
    },
    methods:{
         passwordreset(id){
            this.loading = true;
             company.passwordreset(id).then(response=>{
                 this.loading = false
                 this.snackbar = true
                 this.color = "green"
                 this.message="Password Reset successful"
             }).catch(error=>{
                          this.loading = false
                          this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red" 
             })
        }
    }
}
</script>