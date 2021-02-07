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
                     TImestamp
                    </th>
                    <th class="text-left">
                      Company
                    </th>
                     <th class="text-left">
                      Reg Year
                    </th>
                    <th class="text-left">
                       Total Due
                    </th>
                     <th class="text-left">
                   Status
                    </th>
                    <th>Assigned</th>
                    <th>Action</th>

                    
                    </tr>
                </thead>
                <tbody>
                      <tr
                    v-for="invoice in searchInvoice"
                    :key="invoice.id"
                    >
                     <td>{{ invoice.date }}</td>
                     <td>{{ invoice.name }}</td>
                      <td>{{ invoice.year}}</td>
                    <td>{{ invoice.cost }}</td>
                    <td>{{ invoice.status}}</td>
                    <td>
                        <template v-if="invoice.assigned">
                         <div><b>assigned On:</b> <i>{{invoice.assigned.created_at | formatDate}}</i></div>
                         <div><b>Assigned To:</b> <i>{{invoice.assigned.users.user.name}}{{invoice.assigned.users.user.surname}}</i></div>
                        </template>
                        <template v-else>
                            <div class="red--text">PENDING</div>
                        </template>
                    </td>
                    <td class="d-flex">
                        <template v-if="invoice.assigned">
                          <comments :identifier="invoice.invoice_number"></comments>
                        </template>
                        <template v-else>
                              <assign :company="invoice.id" v-on:reload="getTasks"></assign>
                             
                        </template>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
      </v-card-text>
  </v-card>

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
                
                >
                {{ message }}         
                </v-snackbar>
   </v-container>
</template>
<script>
import * as rtgs from '../../services/rtgs_service'
import assign from '../../components/rtgs/assign.vue'
import comments from '../../components/rtgs/comments.vue'
export default {
    components:{
    assign,
    comments
    },
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
            loading:false,
            snackbar:false,
            color:"",
            message:"",
            invoices:[],
            filter:''
        }
    },methods: {
        getTasks(){
            this.loading = true;
            rtgs.getRtgs().then(response=>{
                this.loading = false;
                 this.invoices = response.data.data
            }).catch(error=>{
              this.loading = false
              this.snackbar = true;
              this.color ="red";
              this.message = error.response.data.message;
            })
        }
    },mounted(){
        this.getTasks()
    },computed:{
        searchInvoice(){
              return this.invoices.filter(invoice=>(!invoice.name.toUpperCase().indexOf(this.filter.toUpperCase())));
       
        }
    }
}
</script>