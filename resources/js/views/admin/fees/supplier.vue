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
                <div>Supplier Fees</div>
                <v-spacer></v-spacer>
                <addFee v-on:reload="getFees"></addFee>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Locality</th>
                            <th>Action</th>
                            <th>Currency</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fee in fees" :key="fee.id">
                            <td>
                                {{fee.locality}}
                            </td>
                             <td>
                                {{fee.action}}
                            </td>
                            <td>
                                {{fee.currency}}
                            </td>
                             <td>
                                {{fee.price}}
                            </td>
                            <td class="d-flex justify-end">
                               <editFee :fee="fee" v-on:reload="getFees"></editFee>
                                <deleteFee :fee="fee" v-on:reload="getFees"></deleteFee>
                             
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
import * as fee from '../../../services/supplierfee_service'
import addFee from '../../../components/fees/suppliers/add'
import editFee from '../../../components/fees/suppliers/edit'
import deleteFee from '../../../components/fees/suppliers/delete'
export default {
    components:{
     addFee,
     editFee,
     deleteFee
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
                text: 'Supplier Fees',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            fees:[]
        }
    },methods:{
        getFees(){
            this.loading = true
            fee.getFees().then(response=>{
                this.loading = false
                this.fees = response.data.fees
                this.$store.dispatch('setCurrencylist',response.data.currencylist)
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getFees();
    }
}
</script>