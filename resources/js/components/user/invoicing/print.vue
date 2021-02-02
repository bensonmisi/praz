<template>
    <div>
        <v-btn  @click="printInvoice" large depressed><v-icon>fa fa-print</v-icon> Print</v-btn>
         <loading :show="loading"></loading>
        <notification :color="color" :message="message" :snackbar="snackbar"></notification>   
    </div>
</template>
<script>
import * as invoicing from '../../../services/invoicing_service'
import loading  from '../../../components/general/loading.vue'
import notification from '../../../components/general/notification.vue'
export default {
    props:['inv'],
    components:{
        loading,
        notification
    },data(){
        return{
            loading:false,
            snackbar:false,
            color:'',
            message:'',
        }
    },
    methods:{
         printInvoice(){
             this.loading = true
         invoicing.downloadInvoice(this.inv).then(response=>{
               this.loading = false
              var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'invoice.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
         }).catch(error=>{
             this.loading = false
             this.snackbar=true
             this.message = error.response.data.message
             this.color="red"
         })
        }
    }
}
</script>