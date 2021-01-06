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
             <v-text-field v-model="filter" outlined label="Search Company" prepend-inner-icon="fa fa-search" v-on:keyup.enter="getList"></v-text-field>
           </v-col>
          </v-row>

    </v-card-title>

    <v-card-text>
        <v-simple-table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="comp in companies" :key="comp.id">
                    <td>{{comp.name}}</td>
                    <td><v-btn color="primary" outlined rounded class="white--text" @click="showSupplier(comp.company_id)">View</v-btn></td>

                </tr>
            </tbody>
        </v-simple-table>
          
    </v-card-text>
         </v-card>


          <v-dialog
  v-model="showDialog"
 max-width="800px"
  >
  <v-card>
      <v-card-title>          
              <div>
          Company Profile
          
              </div>
              <v-spacer></v-spacer>
               <div>

                         <v-btn sm outlined color="green" fab @click="approveSupplier"><v-icon>fa fa-thumbs-up</v-icon></v-btn>
                                  <v-badge
                                        bordered
                                        color="error"
                                        content="0"
                                        overlap
                                    >
                                <v-btn sm outlined color="grey" @click="commentsModel=true" fab><v-icon>fa fa-comment</v-icon></v-btn>
                                  </v-badge>
                         </div>
             
          
    </v-card-title>
      <v-card-text>
          <v-simple-table>
              <tbody>
              <tr>
                  <th>Name</th>
                  <td>{{comp.name}}</td>
              </tr>
               <tr>
                  <th>Reg number</th>
                  <td>{{comp.regnumber}}</td>
              </tr>
               <tr>
                  <th>Country</th>
                  <td>{{comp.country}}</td>
              </tr>
              <tr>
                  <th>City</th>
                  <td>{{comp.city}}</td>
              </tr>
              <tr>
                  <th>Account type</th>
                  <td>
                      <template v-if="comp.accounttype">
                      {{comp.accounttype.name}}
                      </template>
                </td>
              </tr>
              </tbody>
          </v-simple-table>
              <h5 class="headline">Documents</h5>
            <v-simple-table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="doc in comp.company_documents" :key="doc.id">
                    <td>{{doc.document.name}}</td>
                    <td><v-btn color="primary" outlined rounded class="white--text" @click="showDocument(doc.path)">View</v-btn></td>

                </tr>
            </tbody>
        </v-simple-table>

           <h5 class="headline">Registrations</h5>
            <v-simple-table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reg in comp.registrations" :key="reg.id">
                    <td>{{reg.category.name}}</td>
                    <td>{{reg.status}}</td>

                </tr>
            </tbody>
        </v-simple-table>

     
      </v-card-text>
  </v-card>

  </v-dialog>

       <v-dialog
                 v-model="commentsModel"
                 hide-overlay
                 max-width="700px"
                 >
                 <v-form ref="form" v-model="valid" lazy-validation>
                 <v-card>
                     <v-card-title>
                         <div>Comments</div>
                         <v-spacer></v-spacer>
                        

                     </v-card-title>
                     <v-card-text>
                         <v-simple-table>
                             <tbody>
                                 <template v-if="comp.comments">
                                 <tr  v-for="comment in comp.comments" :key="comment.id" >
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
import * as supplier from'../../../services/supplier_service'
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
                    text: 'Pending Suppliers',
                    disabled: true,
                    href: 'admin.company',
                }
            ],
            companies:[],
            comp:'',
            message:'',
            snackbar:false,
            loading:false,
            color:'',
            filter:'',
            showDialog:false,
            commentsModel:false,
            newcomment:'',
            commentRule:[v => !!v || 'Comment required'],
            valid:true

        }
    },methods:{
        getSuppliers(){
               this.loading = true
               supplier.getPending().then(response=>{
                 this.companies = response.data.company
                 this.loading = false
               }).catch(error=>{
                 this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
               })
        },showSupplier(id){
              this.loading = true
               supplier.showSupplier(id).then(response=>{
                 this.comp = response.data.company
                 this.loading = false
                 this.showDialog=true
               }).catch(error=>{
                 this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
               })
        },
        showDocument(path){
             var url = this.$store.state.serverUrl+path
           window.open(url, "_blank");
        },
        saveComment(){
            var formData = new FormData()
               formData.append('id',this.comp.id)
               formData.append('comment',this.newcomment)
               if(this.$refs.form.validate())
               {
             this.loading = true
               supplier.comment(formData).then(response=>{
                 this.comp = response.data.company
                 this.loading = false
               }).catch(error=>{
                 this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
               })
               }
        }
        ,approveSupplier(){
              this.loading = true
               supplier.approve(this.comp.id).then(response=>{
               this.showDialog = false
               this.snackbar = true
               this.message="Registration successfully Approved"
               this.color="green"
               this.getSuppliers()
               }).catch(error=>{
                 this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
               })
        }
    },mounted(){
        this.getSuppliers()
    }
}
</script>