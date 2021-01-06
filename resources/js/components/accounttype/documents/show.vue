<template>
    <div>
            <v-btn  color="green" outlined rounded @click="getDocuments">Docs</v-btn>

        <v-dialog v-model="addModel" max-width="600">
            <v-card>
                <v-card-title>
                    <div>Required documents</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addModel=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                     <addDocument :type="type" v-on:reload="getDocuments"></addDocument>
                    <v-simple-table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Locality</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="documents">
                            <tr v-for="doc in documents" :key="doc.id">
                                 <td>{{doc.id}}</td>
                                 <td>{{doc.locality}}</td>
                                 <td>{{doc.name}}</td>
                                 <td>{{doc.status}}</td>
                                 <td class="d-flex justify-end">
                                     <editDocument :document="doc" v-on:reload="getDocuments"></editDocument>
                                     <deleteDocument :document="doc" v-on:reload="getDocuments"></deleteDocument>
                                 </td>
                            </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="4" class="px-4 py-4 text-center red--text"> No required documents found</td>
                                </tr>
                            </template>
                        </tbody>
                    </v-simple-table>
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
    </div>
</template>
<script>
import * as doc from '../../../services/document_service'
import addDocument from './add'
import editDocument from './edit'
import deleteDocument from './delete'
export default {
    name:'showDocuments',
    components:{
     addDocument,
     editDocument,
     deleteDocument
    },
    props:['type'],
    data(){
        return{
            addModel:false,
            documents:[],
            message:'',
            color:'',
            loading:false,
            snackbar:false
        }
    },methods:{
        getDocuments(){
           
                doc.getDocuments(this.type.id).then(response=>{
                    this.loading = false
                    this.addModel = true
                    this.documents = response.data.documents
                }).catch(error=>{
                         this.loading = false
                         this.message= error.response.data.message
                         this.snackbar=true
                          this.color="red"
                })
            
        }
    }
}
</script>