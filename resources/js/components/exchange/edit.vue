<template>
    <div>
        <v-btn fab class="blue lighten-4 white--text" small outlined @click="addModel = true"><v-icon>mdi-pencil</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Update Exchange Rate</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select outlined label="Primary Currency" v-model="primary" :items="getCurrencylist" item-text="name" item-value="id" :rules="primaryRule"></v-select>
                     <v-select outlined label="Secondary Currency" v-model="secondary" :items="getCurrencylist" item-text="name" item-value="id" :rules="secondaryRule"></v-select>
                    <v-text-field outlined label="Supplier Rate" v-model="supplier" :rules="supplierRule"> </v-text-field>
                     <v-text-field outlined label="General Rate" v-model="general" :rules="generalRule"> </v-text-field>
        
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="saveExchange">Submit</v-btn>
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
import * as exchange from '../../services/exchange_service'
export default {
    name:'editExchange',
    props:['exchange'],
    data(){
        return{
            addModel:false,
            primary:this.exchange.base_id,
            primaryRule:[v => !!v || 'Primary Currency Required'],
            secondary:this.exchange.other_id,
            secondaryRule:[v => !!v || 'Secondary Currency Required'],
            supplier:this.exchange.value,
            supplierRule:[v => !!v || 'Supplier Rate is required'],
            general:this.exchange.general,
            generalRule:[v => !!v || 'General Rate is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        saveExchange(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData();
                formData.append('primary',this.primary)
                formData.append('secondary',this.secondary)
                formData.append('supplier',this.supplier)
                formData.append('general',this.general)
                exchange.updateExchange(formData,this.exchange.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Exchange Rate successfully update"
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