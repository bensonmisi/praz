<template>
    <div>
        <v-btn outlined rounded @click="dialog=true">OPEN</v-btn>
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            >
            <v-card>
                  <v-toolbar
                    dark
                    color="primary"
                    >                   
                    <v-toolbar-title>Document Approval</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                       <v-btn
                        icon
                        dark
                        @click="dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>

                    </v-card-text>
            </v-card>
          </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialog:false
      }
    }
}
</script>