<template>
<div>

    <div v-if="document.uploaded" >
                             <v-btn rounded outlined  depressed class="blue white--text" v-if="document.status =='PENDING'"  @click="dialog=true">
                                    Edit
                            </v-btn>
                            <div v-else class="green--text">Approved</div>
    </div>
                    <div v-else>
                      <v-btn rounded outlined  depressed class="green white--text" @click="dialog=true">
                        Upload
                     </v-btn>
    </div>

      <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <v-form
    ref="form"
     v-model="valid"
    lazy-validation
    >
     <v-card>
        <v-card-title>
          <span class="headline">{{document.name}}</span>
        </v-card-title>
        <v-card-text>
           <v-container>
               <v-file-input
                    show-size
                    counter
                    outlined
                    label="File input"
                    prepend-icon="mdi-pdf-box"
                    accept=".pdf"
                    v-model="fileupload"
                    :rules="fileRule"
                    >
                </v-file-input>
           </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded outlined class="red white--text">Cancel</v-btn>
              <v-btn rounded outlined class="green white--text"  @click="uploadFile">Upload</v-btn>
        </v-card-actions>
     </v-card>
    </v-form>
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
import * as registrations  from '../../services/dashboard_service'
export default {
    props:['document'],
    name:'upload',
    data(){
        return{
           dialog:false,
           valid:true,
           loading:false,
           snackbar:false,
           color:'',
           message:'',
           fileRule:  [
               v => !v|| v.size < 5000000 || 'File size should be less than 5 MB!',
               v => !!v || 'File is required is required',
               ],
           fileupload:null

        }
    },methods:{
        uploadFile(){
          if(this.$refs.form.validate()){
           let formData = new FormData()
           formData.append('filename',this.fileupload)
           formData.append('document',this.document.id)
           this.loading = true;
            registrations.uploadDocument(formData).then(response=>{
              this.loading = false;
                this.dialog= false
                this.snackbar=true,
                this.color='green',
                this.message ='Successfully Updated '+this.document.name
                this.$store.dispatch('setCompanyDocuments',response.data.data)
                this.$emit('refreshDashboard')
            }).catch(error=>{
               this.loading= false
              this.snackbar = true
              this.color="red"
              this.message =error.response.data.message  
            })
          }
        }
    }
}
</script>