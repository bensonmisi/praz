<template>
    <div>
        <v-app-bar app class="px-3 white" height="100">
           <v-img src="./img/logo.png" max-width="120" max-height="100"></v-img>
          <v-toolbar-title class="px-2">
          
          </v-toolbar-title>  
         
           
          <v-toolbar-items class="hidden-xs-only">
              <v-btn to="/" text class="ml-2 px-10">
                <v-icon center>fa fa-home</v-icon>
              </v-btn>
            
               <v-btn text>              
                Tender Notices
              </v-btn>
              <v-btn  text>
               Award Notices
              </v-btn>
                <v-btn text :to="{name:'Bidders'}">
               Registered Bidders
              </v-btn>
         </v-toolbar-items>
         
         <v-spacer></v-spacer>
         <v-toolbar-items class="hidden-xs-only">
              <v-btn to="/register" text>
              Register
              </v-btn>
               <v-btn to="/Login" text>
              Sign in
              </v-btn>
         </v-toolbar-items>
           <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>   
          </span> 
         
      </v-app-bar>
      <v-navigation-drawer  app v-model="drawer">
          <v-list>
              <v-list-item link to="/">
                 Home
              </v-list-item>
              <v-list-item link>
                   Tender Notices
              </v-list-item>
                 <v-list-item link>
                     Award Notices
              </v-list-item>
                <v-list-item link>
                      Registered Bidders
              </v-list-item>
              <v-list-item link>
                    FAQs
              </v-list-item>
              <v-list-item link to="/register">
                   Register
              </v-list-item>
              <v-list-item link to="/Login">
                    Sign in
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name:'navfront',
    data(){
      return{
        drawer:false
      }
    }
}
</script>
