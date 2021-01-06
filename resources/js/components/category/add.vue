<template>
    <div>
       
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
    
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="addModel = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        @click="uploadModel=true"
      >
        <v-icon>mdi-upload</v-icon>
      </v-btn> 
    </v-speed-dial>
        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>New Category</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-text-field outlined label="Name" v-model="name" :rules="nameRule"> </v-text-field>
                    <v-text-field outlined label="Code" v-model="code" :rules="codeRule"> </v-text-field>
                    <v-select outlined label="Section" v-model="section" :items="getSections" item-value="id" item-text="name" :rules="sectionRule"></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="saveCategory">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>

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
import upload from '../category/upload'
export default {
    name:'addCategory',
    components:{
        upload
    },
    data(){
        return{
            addModel:false,
            name:'',
            nameRule:[v => !!v || 'Name is required'],
            code:'',
            codeRule:[v => !!v || 'Code is required'],
            section:'',
            sectionRule:[v => !!v || 'Section is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false,
             direction: 'bottom',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
       uploadModel:false,
           fileRule:  [v => !!v || 'File is required is required'],
           fileupload:null,
        }
    },methods:{
        saveCategory(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData();
                formData.append('name',this.name)
                formData.append('code',this.code)
                formData.append('section',this.section)
                category.addCategory(formData).then(response=>{
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
        },
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
    },computed:{
        getSections(){
            return this.$store.state.sectionlist
        }
}
}
</script>