<template>
<div>
    <v-card flat>
        <v-card-title class="green lighten-4 mt-4">
            <span>Registered Supplier Categories</span>
            
        </v-card-title>
        <v-card-text>
            <v-row class=" hidden-sm-and-down">
                <v-col   sm="4">
                    <div class="black--text font-weight-bold">Category</div>                    
                </v-col>
                <v-col  sm="2">
                     <div class="black--text font-weight-bold">Year</div>
                </v-col>
                <v-col  sm="2">
                     <div class="black--text font-weight-bold">Status</div>
                </v-col>
                
                <v-col  sm="2">
                    
                </v-col>              
            </v-row>
             <v-divider></v-divider>
                <div v-if="registrations.length > 0">
             <div v-for="reg in registrations" :key="reg.id">
              <v-row>
                <v-col  sm="4">
                    <div class="black--text font-weight-bold" v-if="reg">{{reg.category.code}}</div>
                    <div class=" text-xs hidden-sm-and-down" v-if="reg">{{reg.category.name}}</div>
                </v-col>
                <v-col  sm="2">
                     <div>{{reg.expire_year}}</div>
                </v-col>
                <v-col sm="2">                     
                    
                    <span small>
                      {{reg.status}}
                    </span>
                   
                </v-col>
                             
                <v-col  sm="2">                     
                    <div class="d-flex justify-center" v-if="reg.status=='APPROVED'"> 
                          <div v-if="reg.expire_year == currentyear">
                          <v-btn rounded depressed class="blue white--text hidden-sm-and-down" @click="downloadCertificate(reg.id)">Download</v-btn>
                          <v-btn rounded  icon class="blue white--text hidden-md-and-up"  @click="downloadCertificate(reg.id)">
                               <v-icon>fa fa-download</v-icon>
                          </v-btn>
                          </div>
                        
                          <div v-else>
                                <v-icon color="red">fa fa-lock</v-icon> Locked
                          </div>
                     </div>
                       <div v-else-if="reg.status=='PENDING'" class="red--text">
                             Awaiting Document Verification    
                          </div>
                </v-col>
            </v-row>         
             <v-divider></v-divider>
        
             </div>   
                </div>
                <div v-else>
                      <div class="red--text text-center pa-10">No registrations found for the current year.Please note all registration for previous years have expire please  click button below to register your prefered categories </div>
                       <div class=" d-flex justify-center"><v-btn rounded color="green" small  @click="startRegistration">Register now</v-btn></div>
              </div>     
         
         
        </v-card-text>
    </v-card>
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
                timeout=4000
                :color="color"
                top
                right
                
                >
                {{ message }}         
                </v-snackbar>   
</div>
</template>
<script>
import * as registrations  from '../../../services/dashboard_service'
export default {
    props:['registrations'],
    data(){
        return{
            currentyear : new Date().getFullYear(),
            snackbar:false,
            message:'',
            color:'',
            loading:false
        }
    },
    methods: {
        downloadCertificate(id){             
          this.loading = true
           registrations.downloadCertificate(id).then(response=>{
             this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'certificate.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
        
        }
    }, 
}
</script>