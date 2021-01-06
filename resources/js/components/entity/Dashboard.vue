<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <div>Latest Procurements</div>
                        <v-spacer></v-spacer>
                        <addProcurement></addProcurement>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                          <div v-if="notices.length >0">
                         <v-row class="black lighten-2 white--text pt-2 pb-2 hidden-sm-and-down">
                          <v-col cols="12" sm="4">
                              <div>Tender Number</div>
                          </v-col>

                          <v-col cols="12" sm="4">
                                <div>Products/Services</div>
                          </v-col>
                          <v-col cols="12" sm="2">
                                <div class="text-center">Closing Date</div>
                          </v-col>
                         </v-row>
                       <div v-for="notice in notices" :key="notice.id">
                      <v-row>
                          <v-col cols="12" sm="4">
                             <div>
                              <div class="black--text font-weight-bold">{{notice.tendernumber}}</div>
                              <div class="blue--text font-weight-bold">{{notice.type.name}}</div>
                             </div>
                          </v-col>
                           <v-col cols="12" sm="4">
                               <div v-if="notice.products.length >0">
                               <div v-for="product in notice.products" :key="product.id">
                                   <div>{{product.name}}({{product.quantity}})</div>
                               </div>
                               </div>
                               <div v-else class="red--text">
                                   No products found
                               </div> 
                          </v-col>
                           <v-col cols="12" sm="2">
                               <div class="text-center">
                               <div>{{notice.close_date | formatDate}}</div>
                               <div>
                                   <v-btn rounded outlined color="primary">View Details</v-btn>
                               </div>
                               </div>
                          </v-col>
                      </v-row>
                      <v-divider></v-divider>
                       </div>
                
                  </div>
                  <div v-else class="text-center pa-10 red--text">
                           No Procurement notices uploaded as yet
                  </div>  
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
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
    </v-container>
</template>
<script>
import * as entity from '../../services/entity'
import addProcurement from '../entity/addProcurement'
export default {
    data(){
        return{
            notices:[],
            loading:false
        }
    },components:{
        addProcurement
    },methods:{
        getNotices(){
            entity.getProcuremnts().then(response=>{
                this.notices = response.data.notices
            }).catch(error=>{
                  this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
            })
        }
    },mounted(){
        this.getNotices()
    }
}
</script>