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
                <div>Account types</div>
                <v-spacer></v-spacer>
                <addAccounttype v-on:reload="getTypes"></addAccounttype>
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
                        <tr v-for="type in accounttypes" :key="type.id">
                            <td>
                                {{type.name}}
                            </td>
                            <td>
                                {{type.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editAccounttype :type="type" v-on:reload="getTypes"></editAccounttype>
                                <deleteAccounttype :type="type" v-on:reload="getTypes"></deleteAccounttype>
                                <template v-if="type.status =='CREATED'">
                                 <showDocuments :type="type"></showDocuments>
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
import * as accounttype from '../../services/accounttype_service'
import addAccounttype from '../../components/accounttype/add'
import editAccounttype from '../../components/accounttype/edit'
import deleteAccounttype from '../../components/accounttype/delete'
import showDocuments from '../../components/accounttype/documents/show'
export default {
    components:{
     addAccounttype,
     editAccounttype,
     deleteAccounttype,
     showDocuments
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
                text: 'Account Types',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            accounttypes:[]
        }
    },methods:{
        getTypes(){
            this.loading = true
            accounttype.getaccounttypelist().then(response=>{
                this.loading = false
                this.accounttypes = response.data.types
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getTypes();
    }
}
</script>