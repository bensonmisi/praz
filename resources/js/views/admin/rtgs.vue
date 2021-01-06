<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </v-card-text>
        </v-card>
  
  <v-card class="mt-2">
      <v-card-title>
          <v-row>
         
           <v-col sm="12">
             <v-text-field v-model="filter" outlined label="Search Company" prepend-inner-icon="fa fa-search"></v-text-field>
           </v-col>
          </v-row>

    </v-card-title>
      <v-card-text>
          
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                     Invoice number
                    </th>
                     <th class="text-left">
                      Company
                    </th>
                    <th class="text-left">
                       Total Due
                    </th>
                     <th class="text-left">
                       Total Paid
                    </th>
                      <th class="text-left">
                      Balance
                    </th>
                     <th class="text-left">
                      Status
                    </th>

                    
                    </tr>
                </thead>
                <tbody>
                      <tr
                    v-for="invoice in searchInvoice"
                    :key="invoice.id"
                    @click="showRtgs(invoice.invoice_number)"
                    >
                    <td>{{ invoice.invoice_number }}</td>
                     <td>{{ invoice.name }}</td>
                    <td>{{ invoice.cost }}</td>
                    <td>{{ invoice.paid }}</td>
                      <td>{{ invoice.cost- invoice.paid }}</td>
                    <td>AWAITING</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
      </v-card-text>
  </v-card>






         <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
        </v-snackbar>

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
                <v-dialog v-model="showDialog" max-width="700px" hide-overlay>
                    <v-card>
                        <v-card-title>RTGS Detail</v-card-title>
                        <v-card-text>
                             <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                    Invoice number
                                    </th>
                                    <th class="text-left">
                                    Category
                                    </th>
                                    <th class="text-left">
                                    Year
                                    </th>
                                    <th class="text-left">
                                    Cost
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr
                                     v-for="inv in rtg.invoice"
                                    :key="inv.id"
                                    >
                                        <td>{{inv.invoice_number}}</td>
                                        <td>{{inv.category.code}}</td>
                                         <td>{{inv.year}}</td>
                                         <td>{{inv.currency.name}}{{inv.cost}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Balance Due</td>
                                        <td>{{rtg.invoice[0].currency.name}}{{totalCost}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Total paid</td>
                                        <td>{{rtg.invoice[0].currency.name}}{{totalPaid}}</td>
                                    </tr>
                                     <tr>
                                        <td colspan="3">Balance</td>
                                        <td>{{rtg.invoice[0].currency.name}}{{totalCost-totalPaid}}</td>
                                    </tr>

                                   
                                </tbody>
                                </template>
                             </v-simple-table>
                               <v-row>
 				<v-col sm="12">
                                 <v-simple-table>
                                  <thead>
                                     <tr><th>Reference number</th><th>Status</th></tr>
                                  </thead>

                                 <tbody>
                                    <template v-if="rtg.transfer">
                                   <tr>
                                      <td>{{rtg.transfer.referencenumber}}</td>
                                      <td>{{rtg.transfer.status}}</td>
                                   </tr>
                                   </template>
                                    <template v-else>
                                      <tr> <td colspan='2' class="text-center red--text">No transfer details found</td></tr>
                                     </template>
                                 </tbody>
                                 </v-simple-table>
                                </v-col>
                             </v-row>
                             <v-row>
                             <v-col sm="8" class="px-5"><div class="headline">Receipts</div></v-col>
                             
                             <v-col sm="4" class="d-flex px-2">
                                 <v-btn sm outlined color="blue" @click="showPop" fab><v-icon>fa fa-download</v-icon></v-btn>
                                 <v-btn sm outlined color="green" @click="receiptModel=true" fab><v-icon>fa fa-plus</v-icon></v-btn>
                                  <v-badge
                                        bordered
                                        color="error"
                                        :content="countComments"
                                        overlap
                                    >
                                <v-btn sm outlined color="grey" @click="getComments(rtg.id)" fab><v-icon>fa fa-comment</v-icon></v-btn>
                                  </v-badge>
                             </v-col>
                             </v-row>
                              <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                    Receipt number
                                    </th>
                                    <th class="text-left">
                                    Description
                                    </th>
                                    <th class="text-left">
                                    Method
                                    </th>
                                    <th class="text-left">
                                    Cost
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="rtg.receipts.length > 0">
                                    <tr
                                     v-for="rpt in rtg.receipts"
                                    :key="rpt.id"
                                    >
                                        <td>{{rpt.receiptnumber}}</td>
                                        <td>{{rpt.description}}</td>
                                         <td>{{rpt.method}}</td>
                                         <td>{{rpt.amount}}</td>
                                    </tr>
                                     <tr>
                                        <td colspan="3">Total Receipted</td>
                                        <td>{{totalPaid}}</td>
                                    </tr>
                                    </template>
                                    <template v-else>
                                     <tr>
                                         <td colspan="4" class="red--text py-5 px-5 text-center">No receipts found as yet</td>
                                     </tr>
                                    </template>
                                </tbody>
                                </template>
                             </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <v-dialog
                 v-model="receiptModel"
                 hide-overlay
                 fullscreen
                 max-width="700px"
                 >
                    <v-card>
                        <v-card-title>
                            <div>Receipt</div>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="receiptModel=false"><v-icon>fa fa-times</v-icon></v-btn>
                        </v-card-title>
                        <v-card-text>
                          <v-text-field
                         v-model="referencenumber"
                         label="Filter By Reference number or Description"
                          outlined
                          v-on:keyup.enter="retriveStatement"
                         >
                         </v-text-field>

                           <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                    Reference number
                                    </th>
                                    <th class="text-left">
                                    Description
                                    </th>
                                    <th class="text-left">
                                     Amount
                                    </th>
                                    <th class="text-left">
                                    
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <tr v-for="state in statements" :key="state.id">
                                     <td>
                                       {{state.source_reference}}
                                     </td>
                                     <td>
                                        {{state.description}}
                                     </td>
                                     <td>
                                        {{state.currency}}
                                        {{state.amount}}
                                     </td>
                                     <td>
                                       <v-btn v-if="state.status=='PENDING'" outlined small color="primary" @click="showStatement(state)">USE</v-btn>
                                     </td>
                                 </tr>
                                </tbody>
                                </template>
                           </v-simple-table>

                        </v-card-text>
                        
                    </v-card>
                </v-dialog>
                <v-dialog
                 v-model="confirmModel"
                 hide-overlay
                 max-width="700px"
                 >
                    <v-card>
                        <v-card-title>
                            <div>Confirm</div>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="confirmModel=false"><v-icon>fa fa-times</v-icon></v-btn>
                        </v-card-title>
                        <v-card-text>
                         <v-simple-table>
                             <tbody>
                                 <tr><th>Reference number</th><td>{{statement.referencenumber}}</td></tr>
                                 <tr><th>Description</th><td>{{statement.description}}</td></tr>
                                 <tr><th>Currency</th><td>{{statement.currency}}</td></tr>
                                 <tr><th>Amount</th><td>{{statement.amount}}</td></tr>
                             </tbody>
                         </v-simple-table>
                           

                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined color="red" @click="confirmModel=false">Cancel</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn outlined color="green" @click="submitStatement">Submit</v-btn>
                        </v-card-actions>
                        
                    </v-card>
                </v-dialog>

                 <v-dialog
                 v-model="commentsModel"
                 hide-overlay
                 max-width="700px"
                 >
                 <v-form ref="form" v-model="valid" lazy-validation>
                 <v-card>
                     <v-card-title>Comments</v-card-title>
                     <v-card-text>
                         <v-simple-table>
                             <tbody>
                                 <template v-if="comments.length > 0">
                                 <tr  v-for="comment in comments" :key="comment.id" >
                                     <td>
                                         {{comment.comment}}
                                     </td>
                                 </tr>
                                 </template>
                                 <template v-else>
                                    <tr class="text-center red--text pa-10">
                                        No comments found as yet
                                    </tr>
                                 </template>
                             </tbody>
                         </v-simple-table>
                         <v-textarea outlined v-model="newcomment" label="Comment" :rules="commentRule"></v-textarea>
                     </v-card-text>
                     <v-card-actions>
                         <v-btn outlined color="red" @click="commentsModel = false">Cancel</v-btn>
                         <v-spacer></v-spacer>
                         <v-btn outlined color="green" @click="saveComment">Submit</v-btn>
                     </v-card-actions>
                 </v-card>
                 </v-form>
                 </v-dialog>
    </v-container>
</template>
<script>
import * as rtgs from '../../services/rtgs_service'
export default {
    data(){
        return{
            items:[
                 {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/administrator/dashboard',
                 },
                {
                    text: 'RTGS Payments',
                    disabled: true,
                    href: 'admin.rtgs',
                }
            ],
            rtgs:[],
            invoices:[],
            statements:[],
            comments:[],
            commentRule:[v => !!v || 'Comment is required'],
            referencenumber:'',
            rtg:'',
            color:'',
            snackbar:false,
            message:'',
            loading:false,
            showDialog:false,
            receiptModel:false,
            statement:'',
            confirmModel:false,
            filter:'',
            newcomment:'',
            commentsModel:false,
            valid:true

        }
    },
    mounted(){
      this.getRTGS()
    },
    methods:{
       getRTGS(){
           this.loading = true
           rtgs.getRtgs().then(response=>{
               this.loading = false
              this.invoices = response.data.invoices
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
           })
       },showRtgs(id){
              this.loading = true
           rtgs.showRtgs(id).then(response=>{
               this.loading = false
               this.showDialog = true
              this.rtg = response.data.rtgdata
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
           })     
       },
       getStatement(currency){
           this.loading = true
           rtgs.getStatement(currency).then(response=>{
               this.loading = false
               this.statements = response.data.statement
               this.receiptModel = true
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
           }) 
       },
       retriveStatement(){
         this.loading = true
         //var formData = new FormData();
         //  formData.append('referencenumber',this.referencenumber)
           rtgs.getStatement(this.referencenumber).then(response=>{
               this.loading = false
               this.statements = response.data.statement
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
           }) 
       },
       showStatement(statement){
              this.statement = statement
              this.confirmModel = true
       },
       submitStatement(){
        this.loading = true
        var formData = new FormData()
        formData.append('statement_id',this.statement.id)
        formData.append('rtgs_id',this.rtg.id)
        rtgs.submitStatement(formData).then(response=>{
         this.invoices = response.data.invoices
         this.confirmModel = false
         this.receiptModel = false
         this.showDialog = false
         this.loading = false
         this.snackbar = true
         this.message ="Transaction successfully approved"
         this.color ="green"
        }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
        })
       },
       getComments(id){
           this.loading = true
           rtgs.getComments(id).then(response=>{
               this.loading = false
               this.comments = response.data.comments
               this.commentsModel = true
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
        })
       },
       saveComment(){
           if(this.$refs.form.validate())
           {
             this.loading = true
             var formData = new FormData()
             formData.append('id',this.rtg.id)
             formData.append('comment',this.newcomment)
           rtgs.saveComment(formData).then(response=>{
               this.loading = false
               this.comments = response.data.comments
               this.newcomment = ""
           }).catch(error=>{
               this.loading = false
             this.message= error.response.data.message
             this.snackbar=true
             this.color="red"
        })
           }
       },
       showPop(){
           var url = this.$store.state.serverUrl+this.rtg.filename
           window.open(url, "_blank");
       }


    },computed:{
        totalCost(){
            var total = 0;
            this.rtg.invoice.forEach((value,index)=>{
                total = total + value.cost
            })
            return total
        },
        totalPaid(){
            var total = 0;
            this.rtg.receipts.forEach((value,index)=>{
                total = total + value.amount
            })
            return total
        },
        searchStatement(){
              return this.statements.filter(state=>(!state.source_reference.toUpperCase().indexOf(this.referencenumber.toUpperCase())||!state.description.toUpperCase().indexOf(this.referencenumber.toUpperCase())))
       
        },
         searchInvoice(){
              return this.invoices.filter(invoice=>(!invoice.name.toUpperCase().indexOf(this.filter.toUpperCase())));
       
        },countComments(){
            if(this.rtg)
            {
             return this.rtg.comments.length > 0 ? this.rtg.comments.length : 0
            }else{
                return 0;
            }
        }
    }
}
</script>
