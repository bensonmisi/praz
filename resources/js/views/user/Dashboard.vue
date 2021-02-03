<template>
 <div>
      <v-container fluid class="white">
    
               <div class="d-flex justify-between">
                   <div>
                       <div class="display-1 hidden-sm-and-down">{{company}} </div>
                        <div class=" font-weight-bolder hidden-md-and-up">{{company}}</div>
                       <div>{{regnumber}}</div>
                   </div>
                   <v-spacer></v-spacer>
                   <div>                       
                    <v-btn
                     depressed
                     color="primary"
                     x-large
                     class=" hidden-sm-and-down"
                     link
                     :to="{name:'Registration_Documents'}"
                    >
                    Register Category
                    </v-btn>
                     <v-btn
                    depressed
                    color="primary"
                     small
                     rounded
                     class=" hidden-md-and-up"
                     link
                     :to="{name:'Registration_Documents'}"                   
                    >
                     Register Category
                    </v-btn>
                   </div>
               </div>
        
         <v-row>
             <v-col cols="12" sm="8">
                 <bankindetails></bankindetails>
                 <awaiting :invoices="awaitinginvoices"></awaiting>
                 <registered :registrations="registrations"></registered>
                
             </v-col>
             <v-col cols="12" sm="4">
               <template v-if="pendinginvoices.length">
                 <v-card>
                     <v-card-title>
                      Incomplete Invoice
                     </v-card-title>
                     <v-card-text>
                         <v-btn x-large outlined color="red"  link
                     :to="{name:'Registration_Documents'}" block>Continue</v-btn>
                     </v-card-text>
                 </v-card>
               </template>
               <messages></messages>
               <div class="mt-5">
               <faqs></faqs>
               </div>
             
             </v-col>
         </v-row>
         
   </v-container>
   <accountsettings :show="accountsettingsDialog" v-on:reload="dashboard"></accountsettings>
  <registationtutorial></registationtutorial>

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
import * as dashboard  from '../../services/dashboard_service'
import * as auth from '../../services/auth_service'
import accountsettings from '../../components/user/accountsettings.vue'
import bankindetails   from '../../components/bankingdetails.vue'
import awaiting from '../../components/user/awaiting/list.vue'
import registered from '../../components/user/registered/list.vue'
import messages from '../../components/user/messages.vue'
import faqs from '../../components/faqs/sidebar.vue'
import registationtutorial from '../../components/tutorials/registration.vue'

export default {
    data(){
        return{
            role:'',
            company:'',
            regnumber:'',
            loading:false,
            snackbar:false,
            message:'',
            accountsettingsDialog:false,
            color:'',
            awaitinginvoices:[],
            pendinginvoices:[],
          


        } 
    },
    components:{
     accountsettings,
     bankindetails,
     awaiting,
     registered,
     messages,
     faqs,
     registationtutorial
    },created(){
      
        this.dashboard()
          this.profile()
    },
    methods:{
      profile(){
          var company = auth.getCompany()
         this.role = company.token_scope
         this.company = company.user.user.company
         this.regnumber = company.user.user.regnumber
      },
      dashboard(){
          this.loading= true
          dashboard.getDashboard().then(response=>{
          this.loading=false
          this.$store.dispatch('setCompanyDocuments',response.data.data.documents)
          this.$store.dispatch('setCategorylist',response.data.data.category)
          this.$store.dispatch('setRegyear',response.data.data.years)
          this.$store.dispatch('setCurrencylist',response.data.data.currency)
          this.$store.dispatch('setTypes',response.data.data.types)
          this.$store.dispatch('setMessages',response.data.data.messages)
          this.$store.dispatch('setRegistrations',response.data.data.registrations)
          this.awaitinginvoices = response.data.data.awaiting
          this.pendinginvoices= response.data.data.pending
        
        
            if(response.data.data.profile.accounttype == '' ||  response.data.data.profile.country == '' || response.data.data.profile.contacts == null )
               {
                   this.accountsettingsDialog = true
               }else{
                   this.accountsettingsDialog= false
               }
              
          }).catch(error=>{
               this.snackbar = true
               this.message = error
          })
      }
    },computed:{
        registrations(){
            return this.$store.state.registrations
        }
    }
}
</script>