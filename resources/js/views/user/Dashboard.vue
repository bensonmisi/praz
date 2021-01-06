<template>
 <div>
   <registered></registered>
 </div>
</template>
<script>
import Registered from '../../components/user/registered.vue'
import * as auth from '../../services/auth_service'
export default {
    data(){
        return{
            role:''
        } 
    },mounted(){
        this.profile()
    },
    methods:{
      profile(){
          var company = auth.getCompany()
         this.role = company.token_scope
      }
    },
    components:{     
        Registered
    }
}
</script>