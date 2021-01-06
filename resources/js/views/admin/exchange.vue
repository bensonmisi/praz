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
                <div>Exchange Rate</div>
                <v-spacer></v-spacer>
                <addExchange v-on:reload="getExchange"></addExchange>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Base</th>
                            <th>Other</th>
                            <th>Supplier Rate</th>
                            <th>General Rate</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="exchange in exchangelist" :key="exchange.id">
                            <td>
                                {{exchange.base}}
                            </td>
                            <td>
                                {{exchange.other}}
                            </td>
                             <td>
                                {{exchange.value}}
                            </td>
                              <td>
                                {{exchange.general}}
                            </td>
                            <td>
                                {{exchange.status}}
                            </td>
                            <td class="d-flex justify-end">
                            <editExchange :exchange="exchange" v-on:reload="getExchange"></editExchange>
                            <deleteExchange :exchange="exchange" v-on:reload="getExchange"></deleteExchange>
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
import * as  exchange from '../../services/exchange_service'
import addExchange from '../../components/exchange/add'
import editExchange from '../../components/exchange/edit'
import deleteExchange from '../../components/exchange/delete'
export default {
    components:{
     addExchange,
     editExchange,
     deleteExchange
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
                text: 'Exchange Rate',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            exchangelist:[]
        }
    },methods:{
        getExchange(){
            this.loading = true
            exchange.getExchange().then(response=>{
                this.loading = false
                this.exchangelist = response.data.exchangelist
                this.$store.dispatch('setCurrencylist',response.data.currencylist)
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        }
    },mounted(){
        this.getExchange();
    }
}
</script>