<template>
    <div>
        <v-btn fab class="red lighten-4 white--text" small depressed @click="addModel = true"><v-icon>mdi-delete</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-card>
                <v-card-title>
                    <div>Delete Price</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select outlined label="Currency" v-model="currency" :items="getCurrencylist" item-text="name" item-value="id" :rules="currencyRule"></v-select>
                     <v-text-field outlined label="Lower" v-model="lower"  :rules="lowerRule"></v-text-field>
                     <v-text-field outlined label="Upper" v-model="upper"></v-text-field>                
                    <v-text-field outlined label="Value" v-model="value" :rules="valueRule"> </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="destroy">Submit</v-btn>
                </v-card-actions>
            </v-card>
         
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
import * as  fee from '../../../services/contract_service'
export default {
    name:'updateFee',
    props:['fee'],
    data(){
        return{
            addModel:false,
            lower:this.fee.lower,
            lowerRule:[v => !!v || 'Lower limit required'],
            upper:this.fee.upper,
            upperRule:[v => !!v || 'Upper limit required'],
            currency:'',
            currencyRule:[v => !!v || 'Primary Currency Required'],
            value:this.fee.value,
            valueRule:[v => !!v || 'value is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        destroy(){
                this.loading = true
            
                fee.deleteFee(this.fee.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Fee successfully update"
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
    },
   computed:{
        getCurrencylist(){
            return this.$store.state.currencylist
        }
    }
}
</script>