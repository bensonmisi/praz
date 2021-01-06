<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <div>Welcome:</div>
                        <div>{{name}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import * as auth from '../../services/auth_service'
export default {
    data(){
      return{
          role:'',
          name:''
      }
    },
    mounted(){
     this.getProfile()
     console.log('mounted')
    },methods:{
        getProfile(){
            this.role = auth.getCompany().token_scope
           this.name = auth.getCompany().user.name +' '+auth.getCompany().user.surname
           if(this.role !== 'administrator'){
               this.$router.push({name:'welcome'})
           }
        }
    }
}
</script>