<template>
    <div>
         
             <v-btn fab icon small class="blue lighten-4" @click="addModel = true"><v-icon>mdi-pencil</v-icon></v-btn>

              <v-dialog v-model="addModel" max-width="400">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Update Submodule</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-text-field outlined label="Name" v-model="name" :rules="nameRule"> </v-text-field>
                     <v-text-field outlined label="Url" v-model="url" :rules="urlRule"> </v-text-field>
                      <v-text-field outlined label="Icon" v-model="icon" :rules="iconRule"> </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="updateSubmodule">Submit</v-btn>
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
import * as submodule from '../../services/submodule_service'
export default {
    props:['submodule'],
    data(){
        return{
            loading:true,
            message:'',
            color:'',
            snackbar:false,
            addModel:false,
            name:this.submodule.name,
            nameRule:[v => !!v || 'Name required'],
            icon:this.submodule.icon,
            iconRule:[v => !!v || 'Icon required'],
            url:this.submodule.url,
            urlRule:[v => !!v || 'Url required'],
            isvalid:true
        }
    },methods:{
        updateSubmodule(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData()
                formData.append('name',this.name)
                formData.append('url',this.url)
                formData.append('icon',this.icon)
                formData.append('module',this.id)
                submodule.updateSubmodule(formData,this.submodule.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Submdule successfully update"
                    this.color="green"
                    this.addModel = false
                    this.$emit('reloadsubmodule')
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