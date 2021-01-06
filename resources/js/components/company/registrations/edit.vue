<template>
    <div>
        <v-btn fab small class="blue lighten-4 white--text" @click="showDialog=true"><v-icon>fa fa-pencil</v-icon></v-btn>
        <v-dialog v-model="showDialog" max-width="300">
            <v-card>
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title>Update Registrations</v-card-title>
                <v-card-text>
                   <v-select outlined label="Select Year" v-model="regyear" :items="getYears" item-value="year" item-text="year" :rules="regyearRule"></v-select>
                  <v-select outlined label="Select Category" v-model="category" :items="getCategorylist" item-value="id" item-text="code" :rules="categoryRule"></v-select>
           
                </v-card-text>
                <v-card-actions>
                  <v-btn rounded  outlined color="red">Cancel</v-btn>
                   <v-btn rounded  outlined color="green" @click="updated">Update</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        
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
                 <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import * as company from '../../../services/company_service'
export default {
    props:['registration'],
    data(){
        return{
            category:'',
            categoryRule:[v => !!v || 'Select Category'],
            regyear:'',
            regyearRule:[v => !!v || 'Select Registration years'],
            isvalid:true,
            loading:false,
            snackbar:false,
            message:'',
            color:'',
            showDialog:false

        }
    },
    methods:{
            updated() {
                 if(this.$refs.form.validate()){
                        var formData = new FormData()
                        formData.append('category',this.category)
                        formData.append('regyear',this.regyear)
                        company.updateRegistration(formData,this.registration).then(response=>{
                                this.loading = false
                                this.snackbar = true
                                this.color ="green"
                                this.message ="Successfully updated Company Details"
                                this.showDialog=false
               }).catch(error=>{
                          this.loading = false
                             this.showDialog=false
                          this.message= error.response.data.message
                          this.snackbar=true
                          this.color="red"
               })
                 }
            } 
    },computed:{
        getCategorylist(){
             return  this.$store.state.categorylist
        },
        getYears(){
            return this.$store.state.regyear
        }
    }
}
</script>