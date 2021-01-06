<template>
    <div>
         <v-btn fab class="blue lighten-4 white--text" small depressed @click="addModel = true"><v-icon>mdi-pencil</v-icon></v-btn>
  
        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Update Establishment Fees</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select outlined label="Currency" v-model="currency" :items="getCurrencylist" item-text="name" item-value="id" :rules="currencyRule"></v-select>
                     <v-text-field outlined label="Lower" v-model="lower"  :rules="lowerRule"></v-text-field>
                     <v-text-field outlined label="Upper" v-model="upper"></v-text-field> 
                      <v-select outlined label="Validity Period(days)" v-model="validity" :items="validitylist" :rules="validityRule"></v-select>
                               
                    <v-text-field outlined label="Value" v-model="value" :rules="valueRule"> </v-text-field>
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
import * as  fee from '../../../services/establishment_service'
export default {
    name:'editFee',
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
            validity:this.fee.validity,
            validityRule:[v => !!v || 'validity is required'],
            validitylist:['30','60','90'],
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
                formData.append('lower',this.lower)
                formData.append('currency',this.currency)
                formData.append('upper',this.upper)
                formData.append('value',this.value)
                formData.append('validity',this.validity)
                fee.updateFee(formData,this.fee.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Fee successfully Updated"
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