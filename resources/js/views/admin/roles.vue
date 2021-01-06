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
                <div>Roles</div>
                <v-spacer></v-spacer>
                <addRole v-on:reload="getRoles"></addRole>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="role in roles" :key="role.id">
                            <td>
                                {{role.name}}
                            </td>
                            <td>
                                {{role.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editRole :role="role" v-on:reload="getRoles"></editRole>
                                <deleteRole :role="role" v-on:reload="getRoles"></deleteRole>
                                <template v-if="role.status =='CREATED'">
                                <assign :role="role"></assign>
                                </template>
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
import * as  role from '../../services/role_service'
import addRole from '../../components/roles/add'
import editRole from '../../components/roles/edit'
import deleteRole from '../../components/roles/delete'
import assign  from '../../components/roles/assign/modules'
export default {
    components:{
     addRole,
     editRole,
     deleteRole,
     assign
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
                text: 'Roles',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            roles:[]
        }
    },methods:{
        getRoles(){
            this.loading = true
            role.getRoles().then(response=>{
                this.loading = false
                this.roles = response.data.roles
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getRoles();
    }
}
</script>