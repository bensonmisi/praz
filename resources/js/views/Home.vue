<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#00a859"
    >
        <v-list-item class="white">
        <v-list-item-content>
           <v-img src="../img/logo.png" max-width="160" max-height="120"></v-img>       
        </v-list-item-content>
      </v-list-item>
      <v-list
      nav
     class="pt-0"
      >
      <div
         v-for="item in items"
          :key="item.title"
       >
        <v-list-item
           v-if="item.scope == role"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        items: [
          { title: 'Dashboard', icon: 'fa fa-dashboard',link:'/Home/Dashboard',scope:'bidder' },
          { title: 'Invoices', icon: 'fa fa-file',link:'/Home/Invoices',scope:'bidder' },
          { title: 'Receipts', icon: 'fa fa-dollar',link:'/Home/Receipts' ,scope:'bidder'},
          { title: 'Bank payments', icon: 'fa fa-dollar',link:'/Home/bankpayments',scope:'bidder' },
          { title:'Online payments', icon: 'fa fa-dollar',link:'/Home/onlinepayments',scope:'bidder' },
          { title: 'Users', icon: 'fa fa-users',link:'/Home/users' ,scope:'bidder'},
          { title: 'Procurements', icon: 'fa fa-bullhorn',link:'/Home/tenders',scope:'bidder' },
          { title: 'Bid Bonds', icon: 'fa fa-money',link:'/Home/Bidbonds' ,scope:'bidder'},
          { title: 'EntityDashboard', icon: 'fa fa-dashboard',link:'/Home/',scope:'entity' },
          { title: 'Procurement', icon: 'fa fa-bullhorn',link:'/Home/entity/Procurements' ,scope:'entity'},
          { title: 'Budgets', icon: 'fa fa-cogs',link:'/Home/entity/Budgets' ,scope:'entity'},
          { title: 'Plans', icon: 'fa fa-cogs',link:'/Home/entity/Plans' ,scope:'entity'},
          { title: 'Returns', icon: 'fa fa-cogs',link:'/Home/entity/Returns' ,scope:'entity'},
        ],
        right: null,
        drawer: null ,
        name:'',
        role:''
      }
    },mounted(){
    //  auth.getProfile().then(response=>{
    //      this.dialog = false;
    //    this.$store.dispatch('setProfile',response.data)
    //    this.role = auth.getCompany().token_scope
    //    console.log(auth.getCompany())
    //    this.name = auth.getCompany().user.name +' '+auth.getCompany().user.surname
     
    //     }).catch(error=>{
    //       if(error.response.status==401){
    //         auth.logout().then(response=>{
    //        if(response.status ==200){
    //          auth.removeItem();
    //          this.$router.push({name:'signin'});
    //        }
    //      })
    //       }
               
    //       })
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
       }
    }
  }
</script>

