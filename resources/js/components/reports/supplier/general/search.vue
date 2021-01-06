<template>
    <div>
         <v-btn outlined color="green" @click="addModel=true">Search</v-btn>
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

  
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined rounded class="red" @click="addModel=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined rounded class="green" @click="getReport">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>
          <v-dialog v-model="loading" hide-overlay persistent width="300" height="100" >
                <v-card color="primary" dark>
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
import * as suppliers from '../../../../services/supplier_service'
export default {
    data(){
        return{
            addModel:false,
            startmenu:false,
            startdate: new Date().toISOString().substr(0, 10),
            startmodal: false,
            endmenu:false,
            enddate: new Date().toISOString().substr(0, 10),
            endmodal: false,
            startdateRule:[v => !!v || 'Start date required'],
            enddateRule:[v => !!v || 'End date required'],
            isvalid:true,
            loading:false
        }
    }, methods:{
         getReport(){
             if(this.$refs.form.validate())
             {
                 var formData = new FormData()
                 formData.append('startdate',this.startdate)
                 formData.append('enddate',this.enddate)
                this.loading = true
                suppliers.searchReport(formData).then(response=>{
                    this.loading = false
                    this.addModel = false
                    this.$store.dispatch('setGeneralreport',response.data.data)
                   this.$store.dispatch('setGeneralreportTotal',response.data.total)
                }).catch(error=>{
                this.loading = false
                 this.message= error.response.data.message
                 this.snackbar=true
                 this.color="red"
                })
             }
         }
     }
}
</script>