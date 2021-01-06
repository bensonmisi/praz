<template>
    <div>
        <v-btn fab class="blue lighten-4 white--text" small  depressed @click="addModel = true"><v-icon>mdi-pencil</v-icon></v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Update Category</div>
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
                    <v-btn outlined rounded class="green" @click="updateCategory">Submit</v-btn>
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
    name:'updateCategory',
    props:['category'],
    data(){
        return{
            addModel:false,
            name:this.category.name,
            nameRule:[v => !!v || 'Name is required'],
            code:this.category.code,
            codeRule:[v => !!v || 'Code is required'],
            section:this.category.section_id,
            sectionRule:[v => !!v || 'Section is required'],
            isvalid :true,
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        updateCategory(){
            if(this.$refs.form.validate()){
                this.loading = true
                var formData = new FormData();
                formData.append('name',this.name)
                formData.append('code',this.code)
                formData.append('section',this.section)
                category.updateCategory(formData,this.category.id).then(response=>{
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