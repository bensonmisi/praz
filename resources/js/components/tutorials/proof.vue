<template>
    <div>
          <v-list-item link @click="tutorialDialog=true">        
                        <v-list-item-content>
                          <v-list-item-title>What do i get as proof of registration</v-list-item-title>
                        </v-list-item-content>
        </v-list-item>
        <v-dialog
        v-model="tutorialDialog"
        width="900"
        >
        <v-card>
           <v-img :src="img"></v-img> 
           <v-card-text>
               <div>
                   <p>Once a supplier has  successfull registered our system will generate a electronic certificate which can be printed</p>
                   <h5>Certificate Features</h5>
                   <ol>
                       <li> Clearly state the name of company</li>
                       <li> Category name and code </li>
                       <li> Unique Certificate number  which when entered on our verification module the name on the portal should match one on the certificate </li>
                       <li>QR code  which can be used to verify authenticity of certificate</li>
                  </ol>
             </div>
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