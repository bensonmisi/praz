<template>
    <div>
        
      
            <v-sheet class="light-blue darken-4">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="8" offset-sm="2" class="text-center white--text">
                    <div class="pa-16">
                         <h1 class="display-2 hidden">Procurement Regulatory Authority of Zimbabwe</h1>
                     <div class="mt-2 headline">Public Procurement Portal</div>
                     <v-row>
                       <v-col cols="12" sm="4" offset-sm="4">
                       <div class="d-flex mt-5 justify-center">                   
                         <v-btn x-large to="/register" class="blue white--text" block depressed>Register</v-btn>
                         <v-btn class="ml-1 mr-1 green white--text" to="/Login" block  x-large depressed> Login  </v-btn>
                       </div>
                       </v-col>
                     </v-row>
                    </div>
                 
                  </v-col>
                 
                </v-row>               
              </v-container>
            </v-sheet>
            <v-container>
              <v-row>
                <v-col cols="12" sm="4">
                  <faqs></faqs>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-card class="text-center ">
                   <v-card-text>
                     <div class="display-1">Guard against fake supplier certificates</div>
                     <div class="mt-5">in a bid to prevent procurement entities  dealing  with suppliers who use fake praz certificates, we encourage all procurement entities to  verify the certificate by clicking the button belowe</div>
                     <div class="mt-5"><v-btn class="green white--text" x-large :to="{name:'verification'}">Verify Certificate</v-btn></div>
                   </v-card-text>
                  </v-card>
                </v-col>
                 <v-col cols="12" sm="4">
                  <bankindetails></bankindetails>
                </v-col>
              </v-row>
            </v-container>
                   

     

       
      
     
    </div>
</template>
<script>
import bankindetails   from '../../components/bankingdetails.vue'
import faqs from '../../components/faqs/sidebar.vue'
export default {
  components:{
    bankindetails,
    faqs
  },
  data(){
  return{ 
      fake:this.$store.state.serverUrl+'img/fake.jpg'    
      }
  }
}
</script>