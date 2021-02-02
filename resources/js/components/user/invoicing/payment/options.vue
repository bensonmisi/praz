<template>
    <div>
        <v-btn color="success" x-large depressed @click="dialog=true"> Make Payment</v-btn>
         <v-dialog
      v-model="dialog"
      max-width="700"
    
    >
      <v-card>
        <v-card-title>
          <div>Payment Options</div>
        
        </v-card-title>

        <v-card-text>
               <mobile :currency="currency" :total="total"></mobile>
                <v-row>
                <v-col cols="12">
                  <bank :currency="currency"></bank>
                </v-col>
                 <v-col cols="12" v-if="currency=='USD'">
                  <paynow></paynow>
                </v-col>
            </v-row>


       </v-card-text>       
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
import mobile from './mobile.vue'
import paynow from './paynow.vue'
import bank from './bank.vue'
export default {
    props:['currency','total'],
    components:{
        mobile,
        paynow,
        bank
    },
    data(){
        return{
            dialog:false
        }
    }
}
</script>