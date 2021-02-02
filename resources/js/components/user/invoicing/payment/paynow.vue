<template>
    <div>
             <v-card  dark class="orange" flat link @click="onlinepayment">
                        <v-card-text class="text-center">
                            <div>
                                <div class="heading white--text">
                           Online payment gateway
                                </div>
                                <div>
                                    Visa,Master Card
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
    </div>
</template>
<script>
import * as invoicing from '../../../../services/invoicing_service'
export default {
    data(){
        return{
            loading:false,
            snackbar:false,
            color:'',
            message:''
        }
    },
     methods:{
          onlinepayment(){
        this.loading = true
        invoicing.paynowPayments().then(response=>{
          this.loading = false
          window.open(response.data.data)
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