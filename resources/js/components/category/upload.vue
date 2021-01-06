<template>
    <div>
      <v-btn
        fab
        dark
        small
        color="red"
        @click="uploadModel=true"
      >
        <v-icon>mdi-upload</v-icon>
      </v-btn> 

        <v-dialog v-model="uploadModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Upload Categories</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="uploadModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                        <v-file-input
                    show-size
                    counter
                    outlined
                    label="File input"
                    v-model="fileupload"
                    :rules="fileRule"
                    >
                </v-file-input>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="uploadCategory">Submit</v-btn>
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
import * as category from '../../services/category_service'
export default {
    name:'addCategory',
    data(){
        return{
           uploadModel:false,
           fileRule:  [v => !!v || 'File is required is required'],
           fileupload:null,
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false,
            
        }
    },methods:{
        uploadCategory(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData();
                formData.append('filename',this.fileupload) 
                category.uploadCategory(formData).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Category successfully add"
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
    
}
}
</script>