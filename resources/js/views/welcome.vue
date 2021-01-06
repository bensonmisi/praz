<template>
  
     
        <v-app>
             <frontnav/>
      <v-main>
        <router-view></router-view>
      </v-main>
        </v-app>
  
    
</template>

<script>
import frontnav from '../components/frontnav'
export default {
  name: 'Home',
  components:{
    frontnav
  }
}
</script>


