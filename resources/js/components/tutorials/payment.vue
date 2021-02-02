<template>
    <div>
          <v-list-item link @click="tutorialDialog=true">        
                        <v-list-item-content>
                          <v-list-item-title>How to make payment</v-list-item-title>
                        </v-list-item-content>
        </v-list-item>
        <v-dialog
        v-model="tutorialDialog"
        width="500"
        >
        <v-card>    
            <v-card-title  class="blue white--text subtitle">Payment methods</v-card-title>     
           <v-card-text>
      
               <p>Our system has the following payment methods</p>
              
               
               <ol>
                   <li>
                <p><b>Mobile Platforms (ecocash,onemoney) "Local Suppliers"</b> our system is integrated to a mobile platforms enabled gateway. This is the easiest and fast method of payment, the system will require you to enter your mobile wallet number and the amount you wish to pay, PLEASE NOTE CURRENT OUR PLATFORM WILL ASK YOU TO PAY IN BATCHES INLINE WITH THE CURRENT LIMIT ON MOBILE TRANSACTIONS</p>
                <p>Foreign Suppliers are  required to pay $750 usd per category</p>
                   </li>
                   <li>
                       <b>Bank Payments</b>
                       <ul>
                           <li><b>ZIPIT:</b> If you intend to use ZIPIT platform  please make use to get the STAN CODE which is usually the last 6 digits of the transaction reference number. Our system will require this stan code in order to utilize your payment for registration</li>
                           <li><b>BANK TRANSFERS:</b> In order for us to easily identify your transaction  please put your PRAZ number only( starts with PR  obtained on the dashboard after you login) on the discription area when making your payment. You should also call your bank and ask for a reference number  for that transaction which usually starts with  your bank initials</li>
                           <li><b>ONLINE PAYMENT GATEWAY</b> This is a secure online platform that allows  you to pay using VISA or MASTER CARD</li>
                       </ul>
                   </li>
               </ol>
           </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tutorialDialog:false
        }
    }
}
</script>