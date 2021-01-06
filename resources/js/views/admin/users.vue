<template>
    <v-container>
        <v-card>
            <v-card-text>
                 <v-breadcrumbs
                    :items="items"
                    large
                    ></v-breadcrumbs>
            </v-card-text>
        </v-card>

        <v-card class="mt-10">
            <v-card-title>
                <div>Users</div>
                <v-spacer></v-spacer>
                <addUser v-on:reload="getUsers"></addUser>
            </v-card-title>

            <v-card-text>
                         <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Auth code</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userlist" :key="user.id">
                            <td>
                                {{user.name}}
                                 {{user.surname}}
                            </td>
                            <td>
                                {{user.auth_key}}
                            </td>
                            <td>
                                {{user.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editUser :user="user" v-on:reload="getUsers"></editUser>
                            </td>
                        </tr>
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
    </v-container>
</template>
<script>
import addUser from '../../components/admin/add'
import editUser from '../../components/admin/edit'
import deleteUser from '../../components/admin/delete'
import * as admin from '../../services/admin_service'
import {mapActions} from 'vuex'
export default {
    components:{
     addUser,
     editUser,
     deleteUser
    },
     data(){
        return{
            items:[
                {
                text: 'Dashboard',
                disabled: false,
                href: '/administrator/dashboard',
                },
                {
                text: 'Users',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            loading:false,
            userlist:[],
            roles:[],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
           }
        },methods:{
            getUsers(){
              this.loading = true
               admin.getUsers().then(response=>{
                   this.loading = false
                    this.userlist= response.data.users
                    this.$store.dispatch('setRoles',response.data.roles)
               }).catch(error=>{
                    this.loading = false
                    this.message= error.response.data.message
                    this.snackbar=true
                    this.color="red"
               })
            }
        },mounted(){
            this.getUsers()
        }
}
</script>