<template>
    <div>
        
      
         <v-container  class="fill-height">
            <v-sheet
                              height="300px"
                              tile
                            >
                <v-row
                 align="center"
                 justify="center"
                 height="300px"
                 class="mt-15"
                 
                  >
                    <h1 class="text-center display-3 blue--text text--darken-3 hidden-sm-and-down">Procurement Regulatory Authority of Zimbabwe</h1>
                     <h1 class="text-center display-1 blue--text text--darken-3 hidden-md-and-up">Procurement Regulatory Authority of Zimbabwe</h1>
                     <h2 class="display-2  grey--text  text--darken-2 mt-2 hidden-sm-and-down">Public Procurement Portal</h2>
                     <h2 class=" subtitle-1  grey--text  text--darken-2 mt-2 hidden-md-and-up">Public Procurement Portal</h2>
                     
                </v-row>               
                     <v-row  align="center" justify="center">
                         <v-btn large to="/register" class="blue white--text" depressed>Register</v-btn>
                         <v-btn class="ml-1 mr-1 green white--text" to="/Login"  large depressed>Login</v-btn>
                        <v-btn large depressed>Notices</v-btn>
                     </v-row>
            </v-sheet>
                 
         </v-container>

     

        <v-container fluid>
        <v-row>
            <!-- <v-col cols="12" sm="3">
            
              <div>
                <v-card flat outlined class="blue darken-2">
                 
                  <v-card-text class="px-0 py-0">
                <v-list class="blue darken-2">
                   <v-divider></v-divider>
                  <v-list-item link class="py-2" @click="registrationDialog=true">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      How to become a registered bidder
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                 <v-list-item link class="py-2">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      How to make payments using bank transfers
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link class="py-2">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      How to make payments using mobile platforms
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link class="py-2">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      How to renew praz registration
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link class="py-2">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      How to get banking details
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link class="py-2">
                    <v-list-item-content class="title grey--text text--lighten-5">
                      Benefits of being a registered supplier
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
              
                </v-list>
                  </v-card-text>
                </v-card>
              </div>
             </v-col> -->
            <v-col cols="12" sm="9">
              <v-card flat class="grey lighten-3">
                <v-card-text>
                  <v-row>
                    <v-col sm="4" cols="12">
                       <v-card outlined class=" border-red">
                           <v-card-text class="text-center">
                                <h1 class="display-3">0</h1>
                                <div>RFQs</div>
                           </v-card-text>
                       </v-card>
                    </v-col>
                     <v-col sm="4" cols="12">
                         <v-card outlined class=" border-red">
                           <v-card-text class="text-center">
                                <h1 class="display-3">0</h1>
                                <div>Competetive Bids</div>
                           </v-card-text>
                       </v-card>
                    </v-col>
                     <v-col sm="4" cols="12">
                       <v-card outlined class=" border-red">
                           <v-card-text class="text-center">
                                <h1 class="display-3">0</h1>
                                <div>Contracts</div>
                           </v-card-text>
                       </v-card>
                    </v-col>
                  </v-row>                 
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title><h1 class="headline mt-2 mb-4">Latest Procurement notices</h1></v-card-title>
                <v-card-text>
                   <v-row>
                    <v-col cols="12">
                      
                        <v-carousel v-model="model" height="300px" hide-delimiters>
                          <v-carousel-item
                            v-for="color in colors"
                            :key="color"
                        
                          >
                            <v-sheet
                              color="secondary"
                              height="300px"
                              tile
                            >
                              <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                              >
                                <div class="display-3">
                                Coming Soon
                                </div>
                              </v-row>
                            </v-sheet>
                          </v-carousel-item>
                        </v-carousel>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
        </v-container>
        <v-dialog
         v-model="registrationDialog"
         max-width="700px"
        >
          <v-card>
               <v-card-title>How to become a registered bidder</v-card-title>
               <v-card-text>
                   <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{item.text}}</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
            :to="item.url"
          >
            {{item.title}}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
               </v-card-text>
          </v-card>
        </v-dialog>
     
    </div>
</template>
<script>
export default {
  data(){
  return{
    model:0,
    registrationDialog:false,
       colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          text: 'Click on register and fill in the form in order to create an account on our portal',
          url : '/Register',
          title:' Register'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
           text: 'When you have successfully registered please  proceed to login',
          url : '/Login',
          title:'Login'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          text: 'Once you have logged please scan your company documents to PDF of size not more that 5MB and upload them on our system',
          url : '/Register',
          title: 'Upload'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
           text: 'Once you have uploaded all the required documents the system will redirect you to a page to select your category, if you are not sure to tht category just type words that discribe the products and services that you offer',
          url : '/Register'
        },{
          color: 'orange',
          icon: 'mdi-buffer',
           text: 'Once you have selected you category click on make payment and choice a mode that best suits you',
          url : '/Register'
        },
      ]
  }
  },
 computed:{
     sheetHeight(){
         switch (this.$vuetify.breakpoint.name) {
             case 'xs': return '200px'
                case 'sm': return '300px'
                case 'md': return '300px'
                case 'lg': return '350px'
                case 'xl': return '400px'
                
             default:
                return '300px'
         }
     }
 }
}
</script>