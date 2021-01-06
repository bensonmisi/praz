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
                <div>Procurement Threshold</div>
                <v-spacer></v-spacer>
                <add v-on:reload="Retreive"></add>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Classification</th>
                            <th>Locality</th>
                            <th>Currency</th>
                            <th>Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dt in data" :key="dt.id">
                            <td>
                                {{dt.class}}
                            </td>
                            <td>
                                {{dt.classification}}
                            </td>
                            <td>
                                {{dt.locality}}
                            </td>
                            <td>
                                {{dt.currency}}
                            </td>
                            <td>
                                {{dt.value}}
                            </td>
                            <td>
                                {{dt.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <edit :threshold="dt" v-on:reload="Retreive"></edit>
                                <destroy :threshold="dt" v-on:reload="Retreive"></destroy>
                                
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
import * as  api  from '../../services/threshold_service'
import add from '../../components/threshold/add'
import edit from '../../components/threshold/edit'
import destroy from '../../components/threshold/delete'
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
                text: 'Procurement Threshold',
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
                this.data = response.data.thresholdlist
                this.$store.dispatch('setPclass',response.data.pclass)
                this.$store.dispatch('setPclassifications',response.data.pclassification)
                this.$store.dispatch('setCurrencylist',response.data.currencylist)
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