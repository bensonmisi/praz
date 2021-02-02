<template>
    <div>
         
    <v-row>
            <v-col cols="12" sm="8" offset-sm="2">
                <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
        <h1>Certificate Verification</h1>
            </v-col>
    </v-row>
         <verification></verification>
    </div>
   
</template>
<script>
import verification from '../../components/verification.vue'
export default {
    components:{
        verification
    },data(){
        return{
           items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Cerificate verification',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ]
        }
    }
}
</script>