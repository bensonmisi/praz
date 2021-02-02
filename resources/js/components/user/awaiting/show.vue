<template>
   <span>
        <v-btn outlined color="green" :loading="btnloading" rounded @click="processAwaiting">Verify</v-btn>

         <v-dialog
                v-model="transfersDialog"
                hide-overlay
                persistent
                width="500"               
                >
                <v-card>
                    <v-card-title>Bank Reference Numbers</v-card-title>
                    <v-card-text>
                         <div class="red white--text pa-5">
                            <div>Reference numbers was not found</div>
                            <ol>
                                <li>Please contact your bank and ask for a reference number that usually starts with the bank initials eg NEDBP20027A01807 or CABSP20027A02060</li>
                                <li>If you are registering for a foreign company  please attach a visible proof of  payment</li>
                                <li>If you paid using ZIPIT  please call your bank and ask of 6 digit stan code for your transaction</li>
                            </ol>

                            </div>
                            <template v-if="transfers.length">
                        <v-simple-table class="mt-4">
                            <thead>
                                <tr>
                                    <th>Reference Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tran in transfers" :key="tran.id">
                                    <td>
                                        <div>{{tran.referencenumber}}</div>
                                        <div class="small">{{tran.status}}</div>
                                    </td>
                                    <td>
                                        <v-btn outlined rounded v-if="tran.status=='PENDING'" color="blue" @click="editDialog(tran.id)">Edit</v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                            </template>
                            <template v-else class="text-center">
                              <v-btn rounded outlined class="green" @click="editDialog()">Add Bank Reference</v-btn>
                            </template>
                    </v-card-text>
                </v-card>
        </v-dialog>
          <v-dialog v-model="updateDialog" max-width="300">
                    <v-card>
                        <v-form ref="refform"  lazy-validation>
                        <v-card-title>Update Ref Number</v-card-title>
                        <v-card-text>
                            
                            <v-text-field outlined v-model="refnumber" :rules="refnumberRule"></v-text-field>
                        </v-card-text>
                        <v-card-actions >
                            <v-btn rounded outlined color="red" @click="updateDialog=false"> Cancel</v-btn>
                            <v-btn rounded outlined color="green" @click="updateReference">Update</v-btn>
                        </v-card-actions>
                        </v-form>
                    </v-card>

                </v-dialog>
        <v-dialog
                v-model="loading"
                hide-overlay
                persistent
                width="300"               
                >
                <v-card
                 height="200"
                >
                    <v-card-text class="text-center pa-20">
                        
                        <div  class="mt-10">
                    Please wait ....
                        </div>
                        <div class="mt-5">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                    >
                </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>
                </v-dialog>
                <v-snackbar
                v-model="snackbar"
                timeout=3000
                :color="color"
                top
                right
                
                >
                {{ message }}         
                </v-snackbar>
   </span>
  
</template>
<script>
import * as invoicing from '../../../services/invoicing_service'
export default {
    props:['inv'],
    data(){
        return{
            message:'',
            color:'',
            snackbar:false,
            loading:false,
            btnloading:false,
            transfers:[],
            transfersDialog:false,
            updateDialog:false,
            refnumber:'',
            id:'',
            refnumberRule:[v => !!v || 'Reference number required']
        }
    },
    methods: {
      processAwaiting(){

          var formData = new FormData()
          this.loading = true
          formData.append('invoice_number',this.inv.invoice_number)
          invoicing.processAwaiting(formData).then(response=>{
              this.loading = false
              this.transfers = response.data.data
            if(response.data.message =='INSUFFICIENT'){
              this.transfersDialog = true;
            }else{
                this.snackbar=true
                this.color="green"
                this.message="Invoice successfully Proceed"
                location.reload()
            }
          }).catch(error=>{
              this.loading = false
              this.snackbar = true
              this.color ="red"
              this.message = error.response.data.message
          })
      },editDialog(id){
       this.id = id
       this.updateDialog = true
      },
      updateReference(){
        if(this.$refs.refform.validate()){
            var formdata = new FormData()
            formdata.append('id',this.id)
            formdata.append('invoice_number',this.inv.invoice_number)
            formdata.append('refnumber',this.refnumber)
            this.loading = true
            invoicing.updateReference(formdata).then(response=>{
              this.loading = false
              this.transfers = response.data.data
            if(response.data.message =='INSUFFICIENT'){
              this.transfersDialog = true;
            }else{
                this.snackbar=true
                this.color="green"
                this.message="Invoice successfully Proceed"
               location.reload()
            }
          }).catch(error=>{
              this.loading = false
              this.snackbar = true
              this.color ="red"
              this.message = error.response.data.message
          })
        }
      }

    },
}
</script>