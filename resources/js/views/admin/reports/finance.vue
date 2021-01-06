<template>
    <v-container>
        <v-card>
            <v-card-text>
                 <v-breadcrumbs
                    :items="items"
                    large
                    ></v-breadcrumbs>
            </v-card-text>
        </v-card>
        <v-card class="mt-5">
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="5">
                          <v-menu
                            ref="startmenu"
                            v-model="startmenu"
                            :close-on-content-click="false"
                            :return-value.sync="startdate"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="startdate"
            label="Picker Start Date"
            outlined
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="startdate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="startmenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.startmenu.save(startdate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="5">
                          <v-menu
                            ref="endmenu"
                            v-model="endmenu"
                            :close-on-content-click="false"
                            :return-value.sync="enddate"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="enddate"
            label="Picker End Date"
            prepend-icon="mdi-calendar"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="enddate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="endmenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.endmenu.save(enddate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="2">
                        <v-btn outlined color="green white--text" x-large @click="getReport">Search</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="mt-10">
            <v-card-text>
               <div>
                  <v-row>
                    <v-col sm="4">
                         <v-select outlined label="Filter By Status" v-model="filter" :items="statuslist"></v-select>
                    </v-col>
                    <v-col sm="4">
                         <v-select outlined label="Filter By Currency" v-model="currency" :items="currencylist" item-text="name" item-value="name"></v-select>
                
                    </v-col>
                    <v-col sm="4">
                         <v-text-field outlined label="Filter By Year" v-model="filteryear"></v-text-field>
                
                    </v-col>
                  </v-row>
                </div>
              <div>
                 <v-row>
                       <v-col sm="3">
                           <v-card>
                               <v-card-title>Total PAID USD</v-card-title>
                               <v-card-text>
                                   {{calculateTotals[2]}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                          <v-col sm="3">
                           <v-card>
                               <v-card-title>Total PAID ZWL</v-card-title>
                               <v-card-text>
                                   {{calculateTotals[3]}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                          <v-col sm="3">
                           <v-card>
                               <v-card-title>Total AWAITING USD</v-card-title>
                               <v-card-text>
                                   {{calculateTotals[0]}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                        <v-col sm="3">
                           <v-card>
                               <v-card-title>Total AWAITING ZWL</v-card-title>
                               <v-card-text>
                                   {{calculateTotals[1]}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                  
                   </v-row>
              </div>
              <div>
                 <div>
                   <v-btn v-if="filterreport.length >0" fab color="green" @click="download"><v-icon>fa fa-download</v-icon></v-btn>
                 </div>
               
                <div>
            <v-simple-table>
              <thead>
                  <tr>
                      <th>
                          Invoice date
                      </th>
                       <th>
                          Invoice No
                      </th>
                       <th>
                         Year
                      </th>
                       <th>
                         Status
                      </th>
                      <th>
                          Currency
                      </th>
                      <th>
                         Invoice Total
                      </th>                                        
                      <th>Total Receipt</th>
                      <th>Balance</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="report in filterreport" :key="report.id">
                      <td>
                          {{report.invoicedate}}
                      </td>
                      <td>
                          {{report.invoice_number}}
                      </td>
                       <td>
                          {{report.expireyear}}
                      </td>
                       <td>
                          {{report.status}}
                      </td>
                      <td>
                          {{report.currency}}
                      </td>
                      <td>
                          {{report.totalinvoiced}}
                      </td>
                      
                       <td>
                          {{report.totalreceipted}}
                      </td>
                      <td>
                          {{report.totalinvoiced-report.totalreceipted}}
                      </td>
                  </tr>
              </tbody>
            
            </v-simple-table> 
                </div>  
              </div>
  
    
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
    </v-container>
</template>
<script>
import * as report from '../../../services/reports_service'
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
                text: 'Finance Reports',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            startmenu:false,
            startdate: new Date().toISOString().substr(0, 10),
            startmodal: false,
            endmenu:false,
            enddate: new Date().toISOString().substr(0, 10),
            endmodal: false,
            tabs: null,
            snackbar:false,
            message:'',
            color:'',
            loading:false,
            reportlist:[],
            totalpaidZWL:0,
            totalpaidUSD:0,
            totalawaitingUSD:0,
            totalawaitingZWL:0,
            statuslist:['AWAITING','PAID'],
            filter:'',
            filteryear:'',
            currency:'',
            currencylist:[]
            
        }
      },methods:{
         Retrieve(){
             this.loading = true
                 report.retrieve().then(response=>{
                     this.loading = false
                     this.reportlist = response.data.report
                     this.currencylist = response.data.currencylist
                 }).catch(error=>{
                      this.loading = false
                      this.message= error.response.data.message
                      this.snackbar=true
                       this.color="red"
                 })
         },
          getReport(){
                 this.loading = true
                 var formData = new FormData()
                formData.append('startdate',this.startdate)
                formData.append('enddate',this.enddate)
                 report.getInvoiceReport(formData).then(response=>{
                     this.loading = false
                     this.reportlist = response.data.report
                 }).catch(error=>{
                      this.loading = false
                      this.message= error.response.data.message
                      this.snackbar=true
                       this.color="red"
                 })

          },
           download(){
                 this.loading = true
                 var formData = new FormData()
                formData.append('startdate',this.startdate)
                formData.append('enddate',this.enddate)
                 report.download(formData).then(response=>{
                     this.loading = false
               const filename = 'file.xlsx';
              let blob = new Blob([response.data], {
                  type: 'application/octet-stream',
              });

              if (typeof window.navigator.msSaveBlob !== 'undefined') {
                  // IE workaround for "HTML7007: One or more blob URLs were
                  // revoked by closing the blob for which they were created.
                  // These URLs will no longer resolve as the data backing
                  // the URL has been freed."
                  window.navigator.msSaveBlob(blob, filename);
              } else {
                  let blobURL = window.URL.createObjectURL(blob);
                  let tempLink = document.createElement('a');
                  tempLink.style.display = 'none';
                  tempLink.href = blobURL;
                  tempLink.download = filename;
                  tempLink.click();
                  window.URL.revokeObjectURL(blobURL);
              }
                 }).catch(error=>{
                      this.loading = false
                      this.message= error.response.data.message
                      this.snackbar=true
                       this.color="red"
                 })

          }
      },mounted(){
        this.Retrieve()
      },computed:{
         calculateTotals(){
           var totalawaitingUSD=0
           var totalawaitingZWL=0
           var totalpaidUSD = 0
           var totalpaidZWL=0
           this.filterreport.forEach((value,key)=>{
             if(value.status=='PAID' && value.currency =='ZWL'){
               totalpaidZWL = totalpaidZWL + value.totalreceipted
             }else if(value.status=='AWAITING' && value.currency=='ZWL'){
               totalawaitingZWL = totalawaitingZWL + value.totalinvoiced
             }else if(value.status == 'PAID' && value.currency=='USD'){
               totalpaidUSD = totalpaidUSD + value.totalreceipted
             }else if(value.status=='AWAITING' && value.currency =='ZWL'){
               totalawaitingZWL = totalawaitingZWL+value.totalinvoiced
             }
           })
           return [totalawaitingUSD,totalawaitingZWL,totalpaidUSD,totalpaidZWL]
         },
         filterreport(){
            var data = this.reportlist
            if(this.filter !=='')
              {
               data = data.filter(report=>(!report.status.toUpperCase().indexOf(this.filter.toUpperCase())))
              }
              if(this.currency !== ''){

                 data = data.filter(report=>(!report.currency.toUpperCase().indexOf(this.currency.toUpperCase())))
              }
               if(this.filteryear !== ''){

                 data = data.filter(report=>(report.expireyear == this.filteryear))
              }


              return data
            
         }
      }
}
</script>