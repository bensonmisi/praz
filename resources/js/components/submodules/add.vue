<template>
    <div>
         
              <v-fab-transition>
                <v-btn
                  color="pink"
                  fab
                  dark
                  small
                  absolute
                  bottom
                  left
                  @click="addModel=true"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
              <v-dialog v-model="addModel" max-width="400">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>New Submodule</div>
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
                    <v-btn outlined rounded class="green" @click="saveSubmodule">Submit</v-btn>
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
    props:['moduleid'],
    data(){
        return{
            loading:true,
            message:'',
            color:'',
            snackbar:false,
            addModel:false,
            name:'',
            nameRule:[v => !!v || 'Name required'],
            icon:'',
            iconRule:[v => !!v || 'Icon required'],
            url:'',
            urlRule:[v => !!v || 'Url required'],
            isvalid:true
        }
    },methods:{
        saveSubmodule(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData()
                formData.append('name',this.name)
                formData.append('url',this.url)
                formData.append('icon',this.icon)
                formData.append('module',this.moduleid)
                submodule.addSubmodule(formData).then(response=>{
                  this.loading = false
                    this.snackbar = true
                    this.message = "Submdule successfully add"
                    this.color="green"
                    this.name=""
                    this.icon=""
                    this.url=""
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