<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#00a859"
    >
        <v-list-item class="white">
        <v-list-item-content>
           <v-img src="../../img/logo.png" max-width="160" max-height="120"></v-img>       
        </v-list-item-content>
      </v-list-item>
      <v-list
      nav
     class="pt-0"
      >
      <div
         v-for="item in items"
          :key="item.id"
       >
        <v-menu top :offset-x="offset" >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
        ripple
        v-bind="attrs"
        v-on="on"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list>
        <v-list-item
          v-for="submodule in item.submodules"
          :key="submodule.id"
          link        
          :to="{name:submodule.url}"
        >
           <v-list-item-icon>
            <v-icon>{{ submodule.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ submodule.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
        </v-menu>
      </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat height="123px" class="white">    

      
       <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>fa fa-bars</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex">
       <v-btn icon>
              <v-icon>fa fa-bell-o</v-icon>
      </v-btn>
      <div>
        <v-menu
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
      <v-btn 
      text
      v-bind="attrs"
      v-on="on"
      >   
     <span class="ml-2 mt-2">{{name}}</span>
     <v-icon
        right
        dark
      >
       fa fa-angle-down
      </v-icon>
     </v-btn>
      </template>
       <v-list>
        <v-list-item link to="/Home/Profile">       
          <v-list-item-title>
            <v-list-item-icon><v-icon>fa fa-user-circle-o</v-icon></v-list-item-icon>
            Settings
          </v-list-item-title>
        </v-list-item>
         <v-list-item @click="logout">       
          <v-list-item-title>
            <v-list-item-icon><v-icon>fa fa-sign-out</v-icon></v-list-item-icon>
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </div>

      </div>
    </v-app-bar>
    <v-divider></v-divider>

    <v-main class="grey lighten-4">
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import * as auth from '../services/auth_service'
  export default {
    name:'Dashboard',
     data () {
      return {
        items: [],
        right: null,
        drawer: null ,
        name:'',
        role:'',
        offset:true
      }
    },mounted(){   
    this.getProfile()
    },
    methods:{
         logout(){
         auth.logout().then(response=>{
           if(response.status ==200){
             auth.removeItem();
             this.$router.push({name:'Login'});
           }
         })
       },getProfile(){
       this.role = auth.getCompany().token_scope
       this.name = auth.getCompany().user.name +' '+auth.getCompany().user.surname
       this.items = auth.getCompany().user.role.modules
       }
    }
  }
</script>

