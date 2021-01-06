<template>
    <div>
<v-banner outlined class="red lighten-3" justify-center>
    <span class="white--text">
        If you registered for 2020 manualy and got a manual receipt.
         Please click on CLAIM RECEIPT  in order to  get your 2020 registration certificate
    </span>
    <template v-slot:actions>
      <v-btn      
        color="primary"
        @click="dialog=true"
      >
      CLAIM RECEIPT
      </v-btn>
     
    </template>
  </v-banner>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <v-form
    ref="form"
     v-model="valid"
    lazy-validation
    >
     <v-card>
        <v-card-title>
          <span class="headline">Claim 2020 Manual Receipt</span>
        </v-card-title>
        <v-card-text>
           <v-container>
               <v-text-field
                    outlined
                    label="Receipt Number"
                    v-model="receiptnumber"
                    :rules="receiptRule"
                    >
                </v-text-field>
           </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded outlined class="red white--text" @click="dialog=false">Cancel</v-btn>
              <v-btn rounded outlined class="green white--text"  @click="claim">Submit</v-btn>
        </v-card-actions>
     </v-card>
    </v-form>
    </v-dialog>

     <v-dialog
      v-model="confirmDialog"
      persistent
      max-width="600px"
    >
   
     <v-card>
        <v-card-title>
          <span class="headline">Claim 2020 Manual Receipt</span>
        </v-card-title>
        <v-card-text>
           <v-container>
              <p>{{category.code}}</p>
              <p>{{category.name}}</p>
           </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded outlined class="red white--text" @click="confirmDialog=false">Cancel</v-btn>
              <v-btn rounded outlined class="green white--text"  @click="confirm">Confirm</v-btn>
        </v-card-actions>
     </v-card>
    </v-dialog>

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
                 <v-snackbar
                v-model="snackbar"
                timeout=3000
                :color="color"
                top
                
                >
                {{ message }}   
                 </v-snackbar>
    </div>
</template>
<script>
import * as dashboard from '../../services/dashboard_service' 
export default {
    data(){
        return{
            receiptnumber:'',
            loading:false,
            snackbar:false,
            confirmDialog:false,
            valid:true,
            color:'',
            message:'',
            dialog:false,
            category:'',
            receiptRule:[v => !!v || 'Receipt number is required']
        }
    },methods:{
        claim(){
            if(this.$refs.form.validate())
            {
            this.loading = true
            var formData = new FormData()
            formData.append('receiptnumber',this.receiptnumber)
            dashboard.claimReceipt(formData).then(response=>{
                this.loading = false
                if(response.status==200){
                  this.category = response.data.category
                  this.confirmDialog = true
                  this.dialog = false
                }
            }).catch(error=>{
              this.loading= false
              this.snackbar = true
              this.color="red"
              this.message =error.response.data.message  
            })
            }
        },
        confirm(){
              this.loading = true
               var formData = new FormData()
                formData.append('receiptnumber',this.receiptnumber)
              dashboard.confirmReceipt(formData).then(response=>{
                  this.loading = false
                  this.snackbar = true
                  this.color="green"
                  this.message =response.data.message  
                  this.confirmDialog = false
                  this.$emit('reload') 
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