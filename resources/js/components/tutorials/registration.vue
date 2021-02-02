<template>
    <div>
        <v-dialog
        v-model="tutorialDialog"
        width="900"
        persistent
        >
         <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Supplier registration Step
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card>
      <v-img :src="step1"></v-img>
      <v-card-text>
          <h5>Step 1</h5>
          <div>
              To start the registration process click on  Register category top right corner 
          </div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 2"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
      
      
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Account Document Uploads
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card>
      <v-img :src="step2"></v-img>
      <v-card-text>
          <h5>Step 2</h5>
          <div>The system will display all the required documents depending on the  account type you selected when you where creating your account. Please scan your documents to PDf. If a document is more than 3 pages we just require the first 3 pages</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 3"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Documents upload
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card>
      <v-img :src="step3"></v-img>
      <v-card-text>
          <div>In order to proceed to the next stage please upload all the required documents as per order specified.</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 4"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step step="4">
     Category selection
    </v-stepper-step>
    <v-stepper-content step="4">
        <v-card>
      <v-img :src="step4"></v-img>
      <v-card-text>
          <div>Filter and select  your prefered categories for registration, if you are not sure of the category to register  please type words that discribe your line of business. You can add as many categories as possbile on to one invoice</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 5"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
     <v-stepper-step step="5">
     Select  your preferred currency of trade and year of registration
    </v-stepper-step>
    <v-stepper-content step="5">
        <v-card>
      <v-img :src="step5"></v-img>
      <v-card-text>
          <div>Select the currency you wish to make payment  and also the year of intend to register</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 6"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
       <v-stepper-step step="6">
     Invoice
    </v-stepper-step>
    <v-stepper-content step="6">
        <v-card>
      <v-img :src="step6"></v-img>
      <v-card-text>
          <div>Each time you select a category this system will automatically generate an invoice and You can print the invoice</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 7"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
       <v-stepper-step step="7">
     Payment Option
    </v-stepper-step>
    <v-stepper-content step="7">
        <v-card>
      <v-img :src="step7"></v-img>
      <v-card-text>
          <div>Select your preferred payment option, if your select  ecocash or one money please enter your phone number and  the amount Please note you can only pay in batches of 4000. If you wish to pay using  bank transfer obtain a bank reference number  and use it to claim your transfer</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 8"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
     <v-stepper-step step="8">
     Paying using ecocash
    </v-stepper-step>
    <v-stepper-content step="8">
        <v-card>
      <v-img :src="step8"></v-img>
      <v-card-text>
          <div> if your select  ecocash or one money please enter your phone number and  the amount Please note you can only pay in batches of 4000. If you wish to pay using  bank transfer obtain a bank reference number  and use it to claim your transfer</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="e6 = 9"
      >
        Next >>
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
      <v-stepper-step step="9">
     Confirming payment
    </v-stepper-step>
    <v-stepper-content step="9">
        <v-card>
      <v-img :src="step9"></v-img>
      <v-card-text>
          <div>Once you have entered your ecocash or onemoney pin please click the I COMPLETED TRANSACTION button to complete the registration</div>
      </v-card-text>
      <v-card-actions>
<v-spacer></v-spacer><v-btn
        color="primary"
        outlined
        @click="complete()"
      >
      Finish
      </v-btn>
      </v-card-actions>
      </v-card>
    </v-stepper-content>
  </v-stepper>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tutorialDialog:false,
            e6:1,
            step1:this.$store.state.serverUrl+'steps/dashboard.jpg',
            step2:this.$store.state.serverUrl+'steps/document.jpg',
            step3:this.$store.state.serverUrl+'steps/success_document.jpg',
            step6:this.$store.state.serverUrl+'steps/invoicing.jpg',
            step4:this.$store.state.serverUrl+'steps/select_category.jpg',
            step5:this.$store.state.serverUrl+'steps/select_year.jpg',
            step7:this.$store.state.serverUrl+'steps/paymentoptions.jpg',
            step8:this.$store.state.serverUrl+'steps/ecocash.jpg',
            step9:this.$store.state.serverUrl+'steps/ecocash_complete.jpg',
        }
    },
    methods: {
        showTutorial(){
          if(localStorage.getItem('registration_tutorial')==null && !localStorage.getItem('registration_tutorial'))
               {
                  this.tutorialDialog = true
               }
        },complete(){
            localStorage.setItem('registration_tutorial',true)
            this.tutorialDialog = false
        }
    },mounted(){
        this.showTutorial()
    }
}
</script>