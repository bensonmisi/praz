<template>
    <div>
           <v-btn fab class="green white--text" @click="addProcurement"><v-icon>fa fa-plus</v-icon></v-btn>
          <v-dialog
                v-model="dialog"
                fullscreen               
             >
             <v-container>
                 <v-form ref="form" v-model="valid" lazy-validation>
             <v-card>
                 <v-card-title>
                     New Procurement
                     <v-spacer></v-spacer>
                     <v-btn icon @click="dialog=false"><v-icon>fa fa-times</v-icon></v-btn>
                     </v-card-title>
                 <v-divider></v-divider>
                 <v-card-text>

                     <v-row>
                         <v-col cols="12" sm="6">
                          <v-text-field
                                label="Notice Number" 
                                v-model="tendernumber"
                                :rules="tenderRule"
                                outlined
                            ></v-text-field>
                         </v-col>
                         <v-col cols="12" sm="6">
                             <v-select v-model="type" :rules="typeRule" label="Notice type" outlined :items="typelist" item-value="id" item-text="name"></v-select>
                         </v-col>
                     </v-row>
                     
                     <v-row>
                         <v-col cols="12" sm="6">
                           <v-select v-model="currency" label="Select Currency" :rules="currencyRule" outlined :items="currencylist" item-text="name" item-value="id"></v-select>
                      
                         </v-col>
                         <v-col cols="12" sm="6">
                             <v-select v-model="procurementtype" label="Procurement type" :rules="procurementtypeRule" outlined :items="procurementtypelist"></v-select>
                         </v-col>
                     </v-row>
                     <v-row>
                         <v-col cols="12" sm="6">
                               <v-file-input
                            show-size
                            counter
                            outlined
                            label="Upload Standard Bidding Document"
                            prepend-icon="mdi-pdf-box"
                            accept=".pdf"
                            v-model="fileupload"
                            :rules="fileRule"
                            >
                        </v-file-input>
                         </v-col>
                         <v-col cols="12" sm="6">
                             <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Closing date"
                                prepend-icon="mdi-calendar"
                                outlined
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                :rules="dateRule"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                       </v-col>
                     </v-row>
                       <v-row>
                         <v-col cols="12" sm="6">
                         <v-select v-model="classification" :rules="classificationRule" label="Product classification" outlined :items="classificationlist" item-value="id" item-text="name"></v-select>
                     
                         </v-col>
                         <v-col cols="12" sm="6">
                             <v-select v-model="period" :rules="periodRule" label="Bidding Period" outlined :items="periodlist" item-value="value" item-text="name"></v-select>
                         </v-col>
                       
                     </v-row>
                      <v-row>
                         <v-col cols="12" sm="6">
                          <v-text-field
                                label="Bid Value"
                                type="number"
                                v-model="bid"
                                :rules="bidRule"
                                outlined
                            ></v-text-field>
                         </v-col>
                         <v-col cols="12" sm="6">
                               <v-text-field
                                label="Bid Bond Value"
                                type="number"
                                v-model="bond"
                                :rules="bondRule"
                                outlined
                            ></v-text-field>
                          </v-col>
                     </v-row>
                        <v-row>
                         <v-col cols="12" sm="6">
                              <v-textarea
                                outlined
                                v-model="description"
                                :rules="descriptionRule"
                                name="input-7-4"
                                label="Description"
                                 >
                                 </v-textarea>  
                         </v-col>
                         <v-col cols="12" sm="6">
                               <v-text-field
                                label="Reply Email"
                                v-model="email"
                                :rules="emailRule"
                                outlined
                            ></v-text-field>
                          </v-col>
                     </v-row>
                    
                     <v-row>
                         <v-col cols="12">
                     <v-card>
                         <v-card-title>
                             Required Supplier Categories
                             <v-spacer></v-spacer>
                              <v-btn fab class="green white--text" @click="categoryDialog=true"><v-icon>fa fa-plus</v-icon></v-btn>
                         
                         </v-card-title>
                         <v-divider></v-divider>
                         <v-card-text>
                             <v-simple-table>
                                  <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">
                                                ID
                                            </th>
                                            <th class="text-left">
                                                Code
                                            </th>
                                            <th class="text-left">
                                                Name
                                            </th>
                                              <th class="text-center">
                                                
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                             <tr
                                                v-for="item in categories"
                                                :key="item.id"                                            
                                            
                                                >
                                                <td>
                                                    {{item.id}}
                                                </td>
                                                <td>
                                                    {{item.code}}
                                                </td>
                                                <td>
                                                    {{item.name}}
                                                </td>
                                                <td>
                                                    <v-btn color="red" icon>
                                                        <v-icon>fa fa-times</v-icon>
                                                    </v-btn>
                                                </td>
                                             </tr> 
                                            
                                        </tbody>
                                  </template>
                             </v-simple-table>
                         </v-card-text>
                     </v-card>
                     </v-col>
                     </v-row>
                     <v-row>
                         <v-col cols="12">
                     <v-card>
                         <v-card-title>
                             Required Product/Services
                             <v-spacer></v-spacer>
                              <v-btn fab class="green white--text" @click="productDialog=true"><v-icon>fa fa-plus</v-icon></v-btn>
                         
                         </v-card-title>
                         <v-divider></v-divider>
                         <v-card-text>
                             <v-simple-table>
                                  <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Quantity
                                            </th>
                                              <th class="text-center">
                                                
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                       
                                             <tr
                                                v-for="item in products"
                                                :key="item.name"
                                                >
                                                <td>
                                                    {{item.name}}
                                                </td>
                                                <td>
                                                    {{item.quantity}}
                                                </td>                                                
                                                <td>
                                                    <v-btn color="red" icon>
                                                        <v-icon>fa fa-times</v-icon>
                                                    </v-btn>
                                                </td>
                                             </tr>
                                   
                                        
                                        </tbody>
                                  </template>
                             </v-simple-table>
                         </v-card-text>
                     </v-card>
                         </v-col>
                     </v-row>


                 </v-card-text>
                 <v-card-actions>
                     <v-btn rounded color="red" @click="dialog=false">Cancel</v-btn>
                     <v-spacer></v-spacer>
                     <v-btn rounded color="green" @click="submit">Submit</v-btn>
                 </v-card-actions>
             </v-card>
             </v-form>
             </v-container>
        </v-dialog>
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

             <v-dialog 
             v-model="productDialog"
             max-width="600"
             >
                 <v-card>
                     <v-card-title>
                         Add Product
                         <v-spacer></v-spacer>
                         <v-btn icon @click="productDialog = false">
                             <v-icon>fa fa-times</v-icon>
                         </v-btn>
                     </v-card-title>
                     <v-card-text>
                         <v-row>
                             <v-col cols="12">
                                  <v-text-field
                                label="Name"
                                v-model="product"
                                outlined
                            ></v-text-field> 
                             </v-col>
                         </v-row>
                          <v-row>
                             <v-col cols="12">
                                  <v-text-field
                                label="Quantity"
                                v-model="quantity"
                                outlined
                            ></v-text-field> 
                             </v-col>
                         </v-row>
                     </v-card-text>
                     <v-card-actions>
                           <v-btn outlined rounded color="red" @click="productDialog=false">Cancel</v-btn>
                         <v-btn outlined rounded color="primary" @click="addProduct">Submit</v-btn>
                     </v-card-actions>
                 </v-card>
             </v-dialog>
                <v-dialog 
             v-model="categoryDialog"
             max-width="600"
             >
                 <v-card>
                     <v-card-title>
                         Add Category
                         <v-spacer></v-spacer>
                         <v-btn icon @click="categoryDialog = false">
                             <v-icon>fa fa-times</v-icon>
                         </v-btn>
                     </v-card-title>
                     <v-card-text>
                         <v-row>
                             <v-col cols="12">
                                  <v-text-field
                                label="Search Category"
                                v-model="filter"
                                outlined
                            ></v-text-field> 
                             </v-col>
                         </v-row>
                          <v-row>
                             <v-col cols="12">
                                    <v-simple-table>
                                  <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">
                                              Code
                                            </th>
                                            <th class="text-left">
                                               Name
                                            </th>
                                              <th class="text-center">
                                                
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <tr
                                                v-for="item in filterCategories"
                                                :key="item.id"
                                                >
                                                <td>{{ item.code}}</td>
                                                <td>{{ item.name }}</td>
                                                <td>
                                                    <v-btn icon @click="addCategory(item.id,item.code,item.name)"><v-icon>fa fa-plus</v-icon></v-btn>
                                                </td>
                                                </tr>
                                        </tbody>
                                  </template>
                                    </v-simple-table>
                               
                             </v-col>
                         </v-row>
                     </v-card-text>
                     <v-card-actions>
                           <v-btn outlined rounded color="red" @click="productDialog=false">Cancel</v-btn>
                         <v-btn outlined rounded color="primary" @click="addProduct">Submit</v-btn>
                     </v-card-actions>
                 </v-card>
             </v-dialog>
               <v-snackbar
                v-model="snackbar"
                timeout=2000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
    </div>
</template>
<script>
import * as entity from '../../services/entity'
export default {
    name:'addProcurement',
    data(){
        return{
            dialog:false,
            loading:false,
            snackbar:false,
            color:'',
            message:'',
            categorylist:[],
            typelist:[],
            currencylist:[],
            classificationlist:[],
            procurementtypelist:['international','domestic'],
            periodlist:[{"name":"< 30 days","value":"30"},{"name":"60 days","value":"60"},{"name":"90 days","value":"90"}],
            type:'',
            typeRule:[v=> !!v || 'Type required'],
            procurementtype:'',
            procurementtypeRule:[ v => !!v || 'Procurement Type required'],
            classification:'',
            classificationRule:[v => !!v || 'Product classification required'],
            period:'',
            periodRule:[v => !!v || 'Bidding Period Required'],

            date: new Date().toISOString().substr(0, 10),
            dateRule:[v=> !!v || 'Date is Required'],
            menu: false,
            modal: false,
            menu2: false,
            bid:'',
            bidRule:[v=> !!v || 'Bid Value Required'],
            bond:'',
            bondRule:[v => !!v || 'Bid Bond Value Required'],
            products:[],
            categories:[],
            fileupload:null,
            fileRule:  [
               v => !v|| v.size < 5000000 || 'File size should be less than 5 MB!',
               v => !!v || 'File is required is required',
            ],
            email:'',
            emailRule:[v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
            productDialog:false,
            product:"",
            quantity:"",
            description:"",
            descriptionRule:[v => !!v || ' Description Required'],
            currency:"",
            currencyRule:[ v => !!v || 'Currency Required'],
            filter:"",
            categoryDialog:false,
            tendernumber:"",
            tenderRule:[v=> !!v || 'Procurement notice number required'],
            valid:true

        }
    },
    methods:{
      addProcurement(){
          this.loading =true
           entity.getSettings().then(response=>{
                 this.loading = false
                 this.categorylist = response.data.categories;
                 this.typelist = response.data.types
                 this.currencylist = response.data.currency
                 this.classificationlist = response.data.classifications
                 this.dialog =true
           }) 
      },
      addProduct(){
          this.products.push({'name':this.product,'quantity':this.quantity})
      },
      addCategory(id,code,name){
       this.categories.push({'id':id,'code':code,'name':name});
      },
      submit(){
           if(this.$refs.form.validate()){
              var formData = new FormData()
              formData.append("tendernumber",this.tendernumber)
              formData.append('type',this.type)
              formData.append('currency',this.currency)
              formData.append('procurementtype',this.procurementtype)
              formData.append('date',this.date)
              formData.append('classification',this.classification)
              formData.append('period',this.period)
              formData.append('bid',this.bid)
              formData.append('bond',this.bond)
              formData.append('email',this.email)
              formData.append('description',this.description)
              formData.append('categories',this.categories)
              formData.append('products',this.products)
              formData.append('file',this.fileupload)
              if(this.products.length == 0){
                this.snackbar=true
                this.color="red"
                this.message ="Product or Service Required"
                return
              }
              else if(this.categories.length ==0)
              {
                this.snackbar=true
                this.color="red"
                this.message ="Praz Supplier Categories Required"
                return  
              }
              else{
              entity.addProcurement(formData).then(response=>{
                  console.log(response.data)
              }).catch(error=>{
                  this.snackbar=true
                this.color="red"
                this.message =error.response.data.message
               
              })
              }


           }
      }

    },computed:{
        filterCategories(){
             return this.categorylist.filter(category=>(!category.name.toUpperCase().indexOf(this.filter.toUpperCase())||!category.code.toUpperCase().indexOf(this.filter.toUpperCase())))
         }
    }
}
</script>