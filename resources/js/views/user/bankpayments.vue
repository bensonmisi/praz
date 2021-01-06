<template>
    <v-container>
     
            <v-card>
                <v-card-title>
                   <div>Bank Payments</div>
                   <v-spacer></v-spacer>
                   
                </v-card-title>
                <v-card-text>
            <v-simple-table>
                 
                    <thead>
                        <tr>
                         <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                        Description
                        </th>
                         <th class="text-left">
                           Currency
                        </th>
                        <th class="text-left">
                           Amount
                        </th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in payments"
                        :key="item.id"
                        >
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.currency}}</td>
                         <td>{{ item.amount}}</td>                        
                        </tr>
                    </tbody>
                
                </v-simple-table>   
                </v-card-text>
            </v-card>
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
                <v-dialog v-model="updateDialog" hide-overlay max-width="300">
                    <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card>
                        <v-card-title>
                            Update Bank Payments
                        </v-card-title>
                        <v-card-text>
                           <v-text-field v-model="refnumber" outlined :rules="refRule"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined color="green" @click="update">Update</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-form>
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
    </v-container>
</template>
<script>
import * as general from '../../services/general_service'

export default {
    data(){
        return{
           payments:[],
            snackbar:false,
            color:'',
            message:'',
            loading:false,
            updateDialog: false,
            refRule:[v=> !!v || 'Bank reference number Required'],
            refnumber: '' ,
            valid:true
        }
    },mounted() {
       this.getPayments() 
    },methods:{
        getPayments(){
            this.loading = true
            general.getBankpayments().then(response=>{
                this.loading = false
                this.payments = response.data.payments
            }).catch(error=>{
                   this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
        },
        update(){
            if(this.$refs.form.validate()){
                let formData = new FormData()
                formData.append('refnumber',this.refnumber)
                this.loading = true
              general.updateStatement(formData).then(response=>{
                 this.loading = false
                  this.loading = false
                  this.snackbar = true
                  this.color="green"
                  this.message ='Bank transactions successfully updated'
                  this.payments = response.data.payments
                  this.updateDialog = false
              }).catch(error=>{
                   this.loading = false
                  this.snackbar = true
                  this.color="red"
                  this.message =error.response.data.message
              })
            }
        }
    }
}
</script>