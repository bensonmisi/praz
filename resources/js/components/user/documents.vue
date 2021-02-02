<template>
    <div class="pa-5">
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
         v-model="tutorialDialog"
         persistent
         overlay-color="grey"
          width="800"  
         >
          <v-card>
              <v-card-title>Document upload quick tutorial</v-card-title>
           <v-img
      :src="step1"
    ></v-img>
       <v-card-text>
        <div>In order to register as a supplier please upload the required company documents.</div>
        <div>1 This shows the  number of  outstanding documents</div>
        <div>2 This shows the  status of required document if pending it means it hasn't been upload</div>
        <div>3  This is  the button to upload  the required documents   </div>
        <div class="red--text">
            Please note
            <ul>
            <li>Our system only accepts PDF file formate </li>
            <li>Your documents  should not exceed 5 mb </li>
            <li>For all voluminous  documents we require the first 5 pages </li>
            </ul>
        </div>
        <div>Our team will only be able to review your documents once you have completed the registration process</div>

       </v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
            <v-btn
          color="primary"
          @click="completeTutorial"
        >
         i have understood
        </v-btn>
       </v-card-actions>
       </v-card>
         </v-dialog>
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
    </div>
</template>
<script>

import uplodaDocument from './upload.vue'
export default { 
    data(){
        return{
               documents:[],
               loading:false,
               message:'',
               snackbar:false,
               color:'',
               tutorialDialog:false,
               e1:1,
               step1:this.$store.state.serverUrl+'wizard/step1.jpg',
               step2:this.$store.state.serverUrl+'wizard/step2.jpg'
        }
    },components:{
        uplodaDocument
    } ,methods:{
       
        checkDocuments()
        {
           var uploaded=0;

               this.getDocuments.forEach((value,index)=>{
              if(value.uploaded){
                  uploaded++
              }
            })
               if(this.getDocuments.length ==0)
               {
                   this.$router.push({name:'Dashboard'}) 
               }
               else
               {
               if(this.getDocuments.length == uploaded){
                   this.$router.push({name:'Registration_invoicing'})
               }
               }

              if(localStorage.getItem('document_tutorial')==null && !localStorage.getItem('document_tutorial'))
               {
                  this.tutorialDialog = true
               }
        },
        completeTutorial(){
            localStorage.setItem('document_tutorial',true)
            this.tutorialDialog = false
        }


    },mounted(){
        this.checkDocuments()
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