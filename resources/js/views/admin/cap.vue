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
                <div>Bid Bond Caps</div>
                <v-spacer></v-spacer>
                <addCap v-on:reload="getCaps"></addCap>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Value(%)</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cap in caps" :key="cap.id">
                            <td>
                                {{cap.value}}
                            </td>
                            <td>
                                {{cap.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editCap :cap="cap" v-on:reload="getCaps"></editCap>
                                <deleteCap :cap="cap" v-on:reload="getCaps"></deleteCap>
                                
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
import * as  cap from '../../services/cap_service'
import addCap from '../../components/bondcap/add'
import editCap from '../../components/bondcap/edit'
import deleteCap from '../../components/bondcap/delete'
export default {
    components:{
     addCap,
     editCap,
     deleteCap
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
                text: 'Bid Bond Cap',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            caps:[]
        }
    },methods:{
        getCaps(){
            this.loading = true
            cap.getCaps().then(response=>{
                this.loading = false
                this.caps = response.data.caplist
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getCaps();
    }
}
</script>