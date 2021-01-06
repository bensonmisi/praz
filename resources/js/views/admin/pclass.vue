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
                <div>Procurement Classes</div>
                <v-spacer></v-spacer>
                <add v-on:reload="Retreive"></add>
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
                        <tr v-for="dt in data" :key="dt.id">
                            <td>
                                {{dt.name}}
                            </td>
                            <td>
                                {{dt.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <edit :pclass="dt" v-on:reload="Retreive"></edit>
                                <destroy :pclass="dt" v-on:reload="Retreive"></destroy>
                                
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
import * as  api  from '../../services/pclass_service'
import add from '../../components/pclass/add'
import edit from '../../components/pclass/edit'
import destroy from '../../components/pclass/delete'
export default {
    components:{
     add,
     edit,
     destroy
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
                text: 'Procurement Class',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            data:[]
        }
    },methods:{
        Retreive(){
            this.loading = true
            api.retrive().then(response=>{
                this.loading = false
                this.data = response.data.pclass
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.Retreive();
    }
}
</script>