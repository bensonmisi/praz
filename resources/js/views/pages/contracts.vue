<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                  <v-row>
                    <v-col sm="8">
                      <v-text-field
                            outlined
                            v-model="filter"
                            label="Search for notice"
                            >
                       </v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-select v-model="type"
                         :items="typelist" item-text="name" item-value="id" label="Filter By Type" outlined>
                        </v-select>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text>
                  <div v-if="notices.length >0">
                         <v-row class="black lighten-2 white--text pt-2 pb-2 hidden-sm-and-down">
                          <v-col cols="12" sm="4">
                              <div>Entity</div>
                          </v-col>

                          <v-col cols="12" sm="4">
                                <div>Products/Services</div>
                          </v-col>
                          <v-col cols="12" sm="2">
                                <div class="text-center">Closing Date</div>
                          </v-col>
                         </v-row>
                       <div v-for="notice in filterNotices" :key="notice.id">
                      <v-row>
                          <v-col cols="12" sm="4">
                             <div>
                              <div class="black--text font-weight-bold">{{notice.company.name}}({{notice.tendernumber}})</div>
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
                                   <v-btn rounded outlined color="primary" @click="shownotice(notice)">View Details</v-btn>
                               </div>
                               </div>
                          </v-col>
                      </v-row>
                      <v-divider></v-divider>
                       </div>
                
                  </div>
                  <div v-else class="text-center red--text headline pa-10">
                           No Award notices uploaded as yet
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
            timeout=3000
            :color="color"
            top
            right
            >
            {{ message }}         
            </v-snackbar>
    </v-container>

</template>
<script>
export default {
    data(){
        return{
            snackbar:false,
            loading:false,
            notices:[],
            types:[],
            filter:'',
            color:'',
            message:'',
            type:''

        }
    },computed:{
         filterNotices(){
            var filter = this.filter
            console.log(this.type)
            if(filter){
               return this.notices.filter(notice=>{ 
                 return notice.description.toUpperCase().indexOf(filter.toUpperCase()) > -1 ||  notice.ptype_id==this.type
                  })
            }else{
                return this.notices
            }
         },
         typelist(){
           var array = []
           this.types.forEach((value,index)=>{
             array.push({'id':value.id,'name':value.name});
           })
           return array
         }

     }
}
</script>