<template>
    <div>
            <v-card class="red lighten-4 mb-5 mt-5" flat>
                <v-card-text>
                       <p>PLEASE NOTE IF YOU WISH PAY VIA THE BANK EITHER BY DIRECT DEPOSIT,INTERNET BANKING OR  TRANSFERS MAKE SURE TO ENTER YOUR PRAZ NUMBER  AS THE TRANSACTION DESCRIPTION. THIS WILL ALLOW OUR SYSTEM TO AUTOMATICAL IDENTIFY YOUR PAYMENT</p>
                              
                </v-card-text>
            <v-card-actions>
                 
       <v-btn
        text
        color="primary"
        @click="shownotice=true"
      >
        View Bank Details
      </v-btn>
                </v-card-actions>
            </v-card>

              <v-dialog v-model="shownotice" max-width="600">
                    <v-card>
                        <v-card-title>Bank Details</v-card-title>
                        <v-card-text>
                            <p> 
                              <b>  NON-REFUNDABLE (LOCAL)(For Suppliers Registrations, Tender related fees)</b><br/>
                              PAYMENT INSTRUCTIONS:<br/>
                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE<br/>
                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE<br/>
                               ACCOUNT NUMBER: 01121064850020<br/>
                                BRANCH: KWAME NKRUMAH
                            </p>
                             <p> 
                                <b>REFUNDABLE (LOCAL)(For Bid Bond Security)</b><br/>
                              PAYMENT INSTRUCTIONS:<br/>
                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE<br/>
                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE<br/>
                               ACCOUNT NUMBER: 01121064850030<br/>
                                BRANCH: KWAME NKRUMAH
                            </p>
                              <p> 
                                <b>FCA ACCOUNT (USD DEPOSITS)</b><br/>
                              PAYMENT INSTRUCTIONS:<br/>
                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE<br/>
                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE<br/>
                               ACCOUNT NUMBER: 01121064850040<br/>
                                BRANCH: KWAME NKRUMAH<br/>
                                BRANCH SORT CODE:6101<br/>
                                SWIFT CODE: COBZZWHAXXX
                            </p>
                            
                        </v-card-text>
                    </v-card>
                </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
        shownotice:false
        }
    }
}
</script>