<template>
    <div>
          <v-card class="mt-4">
                   <v-card-title><v-icon>fa fa-envelope</v-icon> <div class="ml-2">inbox</div>
                   <v-spacer></v-spacer>
                   <v-chip class="ma-2"> {{getMessages.length}} </v-chip></v-card-title>
                   <v-card-text>
                       <v-list-item
        v-for="msg in getMessages"
        :key="msg.id"
      >
        

        <v-list-item-content>
          <v-list-item-subtitle v-text="msg.message"></v-list-item-subtitle>

          <v-list-item-subtitle v-text="msg.created_at "></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn small outlined rounded :to="{name:msg.action}">
            Open
          </v-btn>
        </v-list-item-action>
      </v-list-item>
                   </v-card-text>
               </v-card>
    </div>
</template>
<script>
export default {
    computed:{
        getMessages(){
            return this.$store.state.messages
        }
    }
}
</script>