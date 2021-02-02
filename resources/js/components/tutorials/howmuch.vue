<template>
    <div>
          <v-list-item link @click="tutorialDialog=true">        
                        <v-list-item-content>
                          <v-list-item-title>Cost and validity period</v-list-item-title>
                        </v-list-item-content>
        </v-list-item>
        <v-dialog
        v-model="tutorialDialog"
        width="900"
        >
        <v-card>    
            <v-card-title class="blue white--text display-1">Registration Cost and validity period</v-card-title>     
           <v-card-text>
               <div class="headline">Validity</div>
               <p>Praz registration is valid for a full calender year, mean it doesnt matter  which day or month you  register during the year , all registrations will expire at the end of  each calender year</p>
              
               <div class="headline">Cost</div>
                <p>Local Suppliers are  required to pay $100 usd  or ZWL8000 per category</p>
                <p>Foreign Suppliers are  required to pay $750 usd per category</p>
           </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            img:this.$store.state.serverUrl+'img/proof.jpg',
            tutorialDialog:false
        }
    }
}
</script>