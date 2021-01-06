<template>
    <div>
           <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"
                height="50"
                >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text>
                    Please wait ....
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
                </v-dialog>
    </div>
</template>
<script>

import * as invoicing from '../../services/invoicing_service'
export default {
    data(){
        return{
            loading:false,
        }
    },mounted(){
  this.checkpayments();
    },methods:{
        checkpayments(){
              this.loading = true
              invoicing.checkpaynow().then(response=>{
                     this.$router.push({name:'Dashboard'});
              }).catch(error=>{
                    this.loading = false
                this.snackbar = true
              this.color="red"
              this.message =error.response.data.message
              })
        }
    }
}
</script>