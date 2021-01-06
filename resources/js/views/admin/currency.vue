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
                <div>Currency</div>
                <v-spacer></v-spacer>
                <addCurrency v-on:reload="getCurrency"></addCurrency>
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
                        <tr v-for="currency in currencylist" :key="currency.id">
                            <td>
                                {{currency.name}}
                            </td>
                            <td>
                                {{currency.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editCurrency :currency="currency" v-on:reload="getCurrency"></editCurrency>
                                <deleteCurrency :currency="currency" v-on:reload="getCurrency"></deleteCurrency>
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
import * as  current from '../../services/currency_service'
import addCurrency from '../../components/currency/add'
import editCurrency from '../../components/currency/edit'
import deleteCurrency from '../../components/currency/delete'
export default {
    components:{
     addCurrency,
     editCurrency,
     deleteCurrency
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
                text: 'Currency',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
         currencylist:[]
        }
    },methods:{
        getCurrency(){
            this.loading = true
            current.getCurrency().then(response=>{
                this.loading = false
                this.currencylist = response.data.currency
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getCurrency();
    }
}
</script>