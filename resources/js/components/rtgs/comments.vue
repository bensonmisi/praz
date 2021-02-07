<template>
    <div>
        <v-btn outlined rounded small color="green" class="mt-2" @click="getComments">Comments</v-btn>
        <v-dialog width="500" v-model="commentDialog">
            <v-card>
                <v-card-title>Comments<v-spacer></v-spacer><v-btn icon @click="commentDialog=false"><v-icon>fa fa-times</v-icon></v-btn></v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item-group
                            multiple
                            active-class=""
                        >
                        <template v-if="comments.length >0">
                        <v-list-item v-for=" comment in comments" :key="comment.id">
                          <template v-slot:default="{ active }">
                            <v-list-item-action>
                            <v-checkbox :input-value="active"></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>{{comment.created_at | formatDate}}</v-list-item-title>
                            <v-list-item-subtitle>{{comment.comments}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                        </v-list-item>
                        </template>
                        <template v-else>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="text-center red--text">No Comments Found</div>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
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
    </div>
</template>
<script>
import * as task  from '../../services/task_service'
export default {
    props:['identifier'],
    data(){
        return{
            comments:[],
            commentDialog:false,
            loading:false
        }
    },methods: {        
         getComments(){
              this.loading = true
              task.getComments(this.identifier).then(respose=>{
                  this.loading = false
                  this.comments = respose.data.data
                  this.commentDialog=true
              }).catch(error=>{
                  this.loading = false
                  this.snackbar = true
                  this.color = "red"
                  this.message =error.respose.data.message
              })
         }
    },
}
</script>