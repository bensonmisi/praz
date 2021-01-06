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
                <div>Sections</div>
                <v-spacer></v-spacer>
                <addSection v-on:reload="getSections"></addSection>
            </v-card-title>
            <v-card-text>
               <v-simple-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="section in sections" :key="section.id">
                            <td>
                                {{section.name}}
                            </td>
                            <td>
                                {{section.status}}
                            </td>
                            <td class="d-flex justify-end">
                               <editSection :section="section" v-on:reload="getSections"></editSection>
                                <deleteSection :section="section" v-on:reload="getSections"></deleteSection>                               
                            </td>
                        </tr>
                    </tbody>
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
      </v-container>
</template>
<script>
import * as section from '../../services/section_service'
import addSection from '../../components/sections/add'
import editSection from '../../components/sections/edit'
import deleteSection from '../../components/sections/delete'
export default {
    components:{
         addSection,
         editSection,
         deleteSection
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
                text: 'Sections',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
            message:'',
            snackbar:false,
            color:'',
            loading:false,
            sections:[]
        }
      },methods: {
          getSections(){
            this.loading = true
            section.getSections().then(response=>{
                this.loading = false
                this.sections= response.data.sections
            }).catch(error=>{
                this.loading = false
                this.message= error.response.data.message
               this.snackbar=true
              this.color="red"
            })
          }
      },mounted(){
          this.getSections()
      }
}
</script>