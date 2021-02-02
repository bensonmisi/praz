<template>
      <v-container>
       <v-card>  
       <v-card-title class="blue lighten-4">
         <div>Required Company Documents</div>
         <v-spacer></v-spacer>
         <div class="red--text">Outstanding  {{computeDocuments}}</div>
        </v-card-title>      
        <v-card-text>
          <v-list
            two-line
         > 
             <div v-for="document in  getDocuments" :key="document.id"> 
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title v-if="document">{{document.name}}</v-list-item-title>
                    <v-list-item-subtitle>
                        <div class="green--text" v-if="document.uploaded">Uploaded</div>
                        <div class="red--text" v-else >Pending</div>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                 <uplodaDocument :document="document" v-on:refreshDashboard="checkDocuments"></uplodaDocument>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
             </div>
               
         </v-list>
            </v-card-text>
    </v-card>
     <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"               
                >
                <v-card
                 height="200"
                >
                    <v-card-text class="text-center pa-20">
                        
                        <div  class="mt-10">
                    Please wait ....
                        </div>
                        <div class="mt-5">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                    >
                </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>
                </v-dialog>
                 <v-snackbar
                v-model="snackbar"
                timeout=3000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
      </v-container>
</template>
<script>

import uplodaDocument from '../../components/user/upload.vue'
import * as doc_services from '../../services/registration_service'
export default {
    data(){
        return{
               documents:[],
               loading:false,
               message:'',
               snackbar:false,
               color:'',
        }
    },components:{
        uplodaDocument
    },methods:{
          fetchDocuments(){
                this.loading = true
                doc_services.getCompanyDocuments().then(response=>{
                      this.loading = false
                      this.$store.dispatch('setCompanyDocuments',response.data.data)
                }).catch(error=>{
                      this.loading = false
                      this.snackbar = true
                      this.color ="red"
                      this.message = error.response.data.message
                })
          }
    },mounted(){
          this.fetchDocuments()
    },computed:{
        getDocuments(){
           return this.$store.state.companydocuments
        
        },computeDocuments(){
              var uploaded=0;
                var documents = this.$store.state.companydocuments
               documents.forEach((value,index)=>{
              if(value.uploaded){
                  uploaded++
              }
            })

            return documents.length - uploaded
        }
    }
}
</script>