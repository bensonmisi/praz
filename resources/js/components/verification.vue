<template>
    <div>
        <v-row>
            <v-col cols="12" sm="8" offset-sm="2">
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-card>
                    <v-card-title>
                        
                        <v-row>
                            <v-col sm="10">
                      <v-text-field outlined v-model="search"  :rules="searchRule"  label="Certificate Number"></v-text-field>
                            </v-col>
                            <v-col sm="2">
                      <v-btn color="primary" class="ml-2" x-large @click="searchCertificate">Search</v-btn>
                            </v-col>
                        </v-row>
                       
                    </v-card-title>
                    <v-card-text>
                        <template v-if="results.length">
                        <v-simple-table>
                            <tbody>
                                <tr><th>Company</th><td>{{results[0].company}}</td></tr>
                                <tr><th>regnumber</th><td>{{results[0].regnumber}}</td></tr>
                                <tr><th>Code</th><td>{{results[0].code}}</td></tr>
                                <tr><th>Name</th><td>{{results[0].name}}</td></tr>
                                 <tr><th>address</th><td>{{results[0].address}}</td></tr>
                                  <tr><th>emails</th><td>{{results[0].emails}}</td></tr>
                                   <tr><th>phones</th><td>{{results[0].phones}}</td></tr>
                                    <tr><th>city</th><td>{{results[0].city}}</td></tr>
                                     <tr><th>country</th><td>{{results[0].country}}</td></tr>
                                      <tr><th>date</th><td>{{results[0].date}}</td></tr>
                            </tbody>
                        </v-simple-table>
                        </template>

                    </v-card-text>
                </v-card>
                 </v-form>
            </v-col>
        </v-row>
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
import * as welcome  from '../services/welcome'
export default {
    data(){
        return{
            search:'',
            searchRule:[v => !!v || 'Search Query Required'],
            loading:false,
            snackbar:false,
            message:'',
            color:'',
            results:[],
            valid:true
        }
    },methods: {
        searchCertificate(){
          if(this.$refs.form.validate()){
             var formdata = new FormData()
             formdata.append('search',this.search)
             this.loading = true

             welcome.searchCertificate(formdata).then(response=>{
                 this.loading = false
                 this.results = response.data.data
             }).catch(error=>{
                 this.loading = false
                 this.snackbar = true
                 this.color = 'red'
                 this.message = error.response.data.message
             })
          }
        }
    },
}
</script>