<template>
    <div>
        <v-btn fab class="red lighten-4 white--text" depressed small @click="addModel = true"><v-icon>mdi-delete</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-card>
                <v-card-title>
                    <div>Delete Section</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-text-field outlined label="Name" v-model="name" readonly> </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="deleteSection">Submit</v-btn>
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
import * as section from '../../services/section_service'
export default {
    props:['section'],
    name:'editSection',
    data(){
        return{
            addModel:false,
            name:this.section.name,
            nameRule:[v => !!v || 'Name is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        deleteSection(){
                this.loading = true
                section.deleteSection(this.section.id).then(response=>{
                    this.loading = false
                    this.snackbar = true
                    this.message = "Section successfully Update"
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
</script>