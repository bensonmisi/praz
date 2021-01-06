<template>
<div>
          <v-card  class="ma-1">
             <v-card-title>
                 <div>Account Documents</div>
              </v-card-title>
         <v-card-text>
          <v-simple-table>
              <thead>
                  <tr>
                      <th>
                      Name
                      </th>
                      <th>
                      Status
                     </th>
                     <th>

                     </th>
                  
                   
                  </tr>
            </thead>
            <tbody>
                <template v-if="checkDocuments">
                <tr v-for="doc in checkDocuments" :key="doc.id">
               
                       <td>{{doc.name}}</td>
                       <td>{{doc.status}}</td>
                       <td><v-btn fab small depressed color="green" class="white--text" @click="showDocument(doc.path)"><v-icon>fa fa-download</v-icon></v-btn></td>
                              
                </tr>
                </template>
                <template v-else>
                    <tr>
                     <td colspan="2" class="red--text text-center px-10">No Company Documents Found</td>
                    </tr>
                </template>
            </tbody>
          </v-simple-table>
         </v-card-text>
         </v-card>
     
         </div>
</template>
<script>
export default {
    props:['comp'],
    data(){
        return{
            snackbar:false,
            loading:false,
            message:'',
            color:''
        }
    },methods: {
      showDocument(path){
             var url = this.$store.state.serverUrl+path
           window.open(url, "_blank");
        }
    },computed:{
         checkDocuments(){
             let docs = [];
             this.comp.company_documents.forEach((value,index)=>{
               
               docs.push({'name': value.document.name,"path":value.path,"status":value.status})
             })
             return docs
         }
    }
}
</script>