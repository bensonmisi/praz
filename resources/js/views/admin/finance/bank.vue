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

        <v-card class="mt-10">
            <v-card-title>
                <div>Bank Transactions</div>
                <v-spacer></v-spacer>
                <v-btn outlined rounded color="green" @click="addModel=true"><v-icon>mdi-search</v-icon> Filter</v-btn>
            </v-card-title>
            <v-card-text>
                <div>
                   <v-row>
                       <v-col sm="4">
                           <v-card>
                               <v-card-title>Total Received</v-card-title>
                               <v-card-text>
                                   {{totalReceived}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                        <v-col sm="4">
                           <v-card>
                               <v-card-title>Total Claimed</v-card-title>
                               <v-card-text>
                                   {{totalclaimed}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                        <v-col sm="4">
                           <v-card>
                               <v-card-title>Total Pending</v-card-title>
                               <v-card-text>
                                   {{totalPending}}
                               </v-card-text>
                           </v-card>
                       </v-col>
                   </v-row>
                </div>
                  <div>
                   <v-btn v-if="data.length >0" fab color="green" @click="download"><v-icon>fa fa-download</v-icon></v-btn>
                 </div>
                <div>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Date</th>
                             <th>Account Number</th>
                            <th>Description</th>
                            <th>Currency</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dt in data" :key="dt.id">
                            <td>
                                {{dt.created_at | formatDate}}
                            </td>
                            <td>
                                {{dt.accountnumber}}
                            </td>
                            <td>
                                {{dt.description}}
                            </td>
                             <td>
                                {{dt.currency}}
                            </td>
                             <td>
                                {{dt.amount}}
                            </td>
                             <td>
                                {{dt.status}}
                            </td>
                        </tr>
                    </tbody>
                  
                </v-simple-table>
                </div>
            </v-card-text>
        </v-card>

        <v-dialog v-model="addModel" max-width="600">
            <v-form ref="form" v-model="isvalid" lazy-validation>
            <v-card>
                <v-card-title>
                    <div>Filtr Data</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
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
             :rules="startdateRule"
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
            :rules="enddateRule"
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

      <v-text-field outlined label="Account Number" v-model="accountnumber"> </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="search">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>
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
import * as  api  from '../../../services/banktransaction_service'
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
                text: 'Bank Transactions',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            data:[],
            totalReceived:0,
            totalclaimed:0,
            totalPending:0,
            addModel:false,
             startmenu:false,
            startdate: new Date().toISOString().substr(0, 10),
            startmodal: false,
            endmenu:false,
            enddate: new Date().toISOString().substr(0, 10),
            endmodal: false,
            accountnumber:'',
            startdateRule:[v => !!v || 'Start date required'],
            enddateRule:[v => !!v || 'End date required'],
            isvalid:true

        }
    },methods:{
        Retreive(){
            this.loading = true
            api.retrieve().then(response=>{
                this.loading = false
                this.data = response.data.transactions
                this.totalReceived = response.data.totalreceived
                this.totalclaimed = response.data.totalclaimed
                this.totalPending = this.totalReceived - this.totalclaimed 
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
        },
        search(){
             if(this.$refs.form.validate()){
                 this.loading = true
                 var formData = new FormData()
                 formData.append('start',this.startdate)
                 formData.append('end',this.enddate)
                 formData.append('accountnumber',this.accountnumber)
                   api.search(formData).then(response=>{
                this.loading = false
                this.data = response.data.transactions
                this.totalReceived = response.data.totalreceived
                this.totalclaimed = response.data.totalclaimed
                this.totalPending = this.totalReceived - this.totalclaimed 
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })

             }
        }, 
        download(){
             if(this.$refs.form.validate()){
                 this.loading = true
                 var formData = new FormData()
                 formData.append('start',this.startdate)
                 formData.append('end',this.enddate)
                   api.download(formData).then(response=>{
                    this.loading = false
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'banktransfer.csv');
                     document.body.appendChild(fileLink);
                     fileLink.click();
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })

             }
        }
    },mounted(){
        this.Retreive();
    }
}
</script>