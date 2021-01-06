<template>
    <div>
        <v-btn fab class="blue lighten-4 white--text" depressed small @click="addModel = true"><v-icon>mdi-pencil</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Update Procurement Threshold</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select outlined label="Procurement Classification" v-model="pclassification" :items="getPclassifications" item-value="id" item-text="name" :rules="pclassificationRule"></v-select>
                    <v-select outlined label="Procurement Class" v-model="pclass" :items="getPclass" item-value="id" item-text="name" :rules="pclassRule"></v-select>
                    <v-select outlined label="Locality" v-model="locality" :items="localitylist" item-value="id" item-text="name" :rules="localityRule"></v-select>
                    <v-select outlined label="Currency" v-model="currency" :items="getCurrencylist" item-value="id" item-text="name" :rules="currencyRule"></v-select>               
                    <v-text-field outlined label="value" v-model="value" :rules="valueRule"> </v-text-field>
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
import * as api from '../../services/threshold_service'
export default {
    name:'addThreshold',
    props:['threshold'],
    data(){
        return{
            addModel:false,
            value:this.threshold.value,
            valueRule:[v => !!v || 'Value is required'],
            currency:this.threshold.currency,
            currencyRule:[v => !!v || 'Currency is required'],  
            localitylist:['local','foreign'],          
            locality:this.threshold.locality,
            localityRule:[v => !!v || 'Locality is required'],
            pclass:this.threshold.class,
            pclassRule:[v => !!v || 'Procurement Class is required'],
            pclassification:this.threshold.classification,
            pclassificationRule:[v => !!v || 'Procurement Classification is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        save(){
        
                this.loading = true
                var formData = new FormData();
                formData.append('value',this.value)
                formData.append('pclass',this.pclass)
                formData.append('pclassification',this.pclassification)
                formData.append('locality',this.locality)
                formData.append('currency',this.currency)
                api.update(formData,this.threshold.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Procurement Threshold successfully updated"
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
        },
        getPclassifications(){
            return this.$store.state.pclassifications
        },
        getPclass(){
            return this.$store.state.pclass
        }
     }
}
</script>