<template>
    <div>
              <v-card>
                    <v-card-text>
                  <v-list dense>    
                    <v-list-item-group color="primary">
                      <howregister></howregister>                    
                      <v-divider></v-divider>
                      <proof></proof>
                      <v-divider></v-divider>
                       <howmuch></howmuch>
                      <v-divider></v-divider>
                      <v-list-item link :to="{name:'Forgot'}">        
                        <v-list-item-content>
                          <v-list-item-title>I forgot  our login details</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                       <v-divider></v-divider>
                        <payment></payment>
                    </v-list-item-group>
                  </v-list>
                    </v-card-text>
    </v-card>
    </div>
</template>
<script>
import howregister from '../../components/tutorials/how_register.vue'
import proof from '../../components/tutorials/proof.vue'
import howmuch from '../../components/tutorials/howmuch.vue'
import payment from '../../components/tutorials/payment.vue'
export default {
  components:{
      howregister,
      proof,
      howmuch,
      payment
  }  
}
</script>