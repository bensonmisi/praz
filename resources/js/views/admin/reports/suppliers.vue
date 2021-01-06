<template>
<v-container>
        <v-card>
            <v-card-text>
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </v-card-text>
        </v-card>
  
  <v-card class="mt-2">
      <v-card-title>
         <div>
              Suppliers Report
         </div>
         <v-spacer></v-spacer>
      
      </v-card-title>
      <v-card-text>

                 <v-tabs
                            v-model="tab"
                            left
                            icons-and-text
                            >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab dark href="#tab-1">
                             General Report
                              <v-icon>fa fa-line-chart</v-icon>
                            </v-tab>

                            <v-tab href="#tab-2">
                              By Month Report
                                <v-icon>fa fa-bar-chart</v-icon>
                            </v-tab>
                            <v-tab href="#tab-3">
                               By Year Report
                                <v-icon>fa fa-pie-chart</v-icon>
                            </v-tab>
                            <v-tab href="#tab-4">
                              Grouped By Category
                                <v-icon>fa fa-area-chart</v-icon>
                            </v-tab>                       
                           </v-tabs>
                            <v-tabs-items v-model="tab">                           
                            <v-tab-item value="tab-1">
                              <general></general>                                                                                   
                            </v-tab-item>
                             <v-tab-item value="tab-2">
                                 <monthly></monthly>
                            </v-tab-item>
                             <v-tab-item value="tab-3">
                               <yearly></yearly>
                             </v-tab-item>
                               <v-tab-item value="tab-4">
                                 <category></category>
                              </v-tab-item>
                            </v-tabs-items>
      </v-card-text>
  </v-card>



            
</v-container>
</template>
<script>
import general from '../../../components/reports/supplier/general/show'
import monthly from '../../../components/reports/supplier/monthly/show'
import yearly from '../../../components/reports/supplier/yearly/show'
import category from '../../../components/reports/supplier/category/show'
export default {
     data(){
         return{
             items:[
                 {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/administrator/dashboard',
                 },
                {
                    text: 'Supplier Reports',
                    disabled: true,
                    href: 'admin.company',
                }
            ],
             tab:null,

         }
     },components:{
         general,
         monthly,
         yearly,
         category
     }
}
</script>