<template>
    <div>
        <v-btn fab class="blue white--text" @click="addModel = true"><v-icon>mdi-plus</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>New Price</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select outlined label="Currency" v-model="currency" :items="getCurrencylist" item-text="name" item-value="id" :rules="primaryRule"></v-select>
                     <v-select outlined label="Locality" v-model="locality" :items="localitylist"  :rules="localityRule"></v-select>
                     <v-select outlined label="Action" v-model="action" :items="actionlist"  :rules="actionRule"></v-select>                
                    <v-text-field outlined label="Price" v-model="price" :rules="priceRule"> </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="save">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>
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
import * as  fee from '../../../services/supplierfee_service'
export default {
    name:'addFee',
    data(){
        return{
            addModel:false,
            localitylist:['local','foreign'],
            actionlist:['NEW','RENEW'],
            locality:'',
            localityRule:[v => !!v || 'Locality required'],
            action:'',
            actionRule:[v => !!v || 'Action required'],
            currency:'',
            currencyRule:[v => !!v || 'Primary Currency Required'],
            price:'',
            priceRule:[v => !!v || 'Price is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        save(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData();
                formData.append('price',this.price)
                formData.append('currency',this.currency)
                formData.append('action',this.action)
                formData.append('locality',this.locality)
                fee.addFee(formData).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Fee successfully add"
                    this.color="green"
                    this.addModel = false
                    this.$emit('reload')
                }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
            }
        }
    },
   computed:{
        getCurrencylist(){
            return this.$store.state.currencylist
        }
    }
}
</script>