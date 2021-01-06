import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/welcome'
import Home from './views/Home'
import Administrator from './views/admin'

import * as auth from './services/auth_service'
Vue.use(Router)
const routes =[
    {
        path:'/',
        component:Welcome,
        children:[
            {
               path:'',
               name:'welcome',
               component: () =>  import('./views/pages/home.vue')
            },
             {
               path:'/Notices',
               name:'Notices',
               component: () =>  import('./views/pages/notices.vue')
             },
             {
               path:'/Contracts',
               name:'Contracts',
               component: () =>  import('./views/pages/contracts.vue')
             },
             {
               path:'/Bidders',
               name:'Bidders',
               component: () =>  import('./views/pages/bidders.vue')
             },
             {
               path:'/Faqs',
               name:'Faqs',
               component: () =>  import('./views/pages/faqs.vue')
             },
             {
               path:'/register',
               name:'Register',
               component: () =>  import('./views/pages/Register.vue')
             },
             {
               path:'/forgot',
               name:'Forgot',
               component: () =>  import('./views/pages/Forgot.vue')
             },
             {
              path:'/password_reset/:token',
              name:'Reset',
              component: () =>  import('./views/pages/Reset.vue')
            },            

             {
              path:'/administrator/login',
              name:'admin-login',
              component: () =>  import('./views/admin/login.vue')
            },
             {
               path:'/Login',
               name:'Login',
               component: () =>  import('./views/pages/Login.vue'),
               beforeEnter: (to, from, next) => {
                if (to.name == 'Login' && auth.isLogged()) next({ name: 'Dashboard' })
                else next()
              }

             
             }
        ]
    },{
      path:'/Home/',
      component:Home,
      children:[
        {
          path:'/',
          name:'Home',
          component:() => import('./views/user/Dashboard.vue')
        },
        {
          path:'/Home/Dashboard',
          name:'Dashboard',
          component:() => import('./views/user/Dashboard.vue')
        },
        {
          path:'/Home/Invoicing',
          name:'Invoicing',
          component:() => import('./views/user/invoicing.vue')
        },
        {
          path:'/Home/Bidbonds',
          name:'Bidbonds',
          component:() => import('./views/user/bidbonds.vue')
        },
        {
          path:'/Home/Receipts',
          name:'Receipts',
          component:() => import('./views/user/receipting.vue')
        },
        ,
        {
          path:'/Home/Invoices',
          name:'Invoices',
          component:() => import('./views/user/invoices.vue')
        },
        {
          path:'/Home/onlinepayments',
          name:'Onlinepayments',
          component:() => import('./views/user/onlinepayments.vue')
        },
        {
          path:'/Home/bankpayments',
          name:'Bankpayments',
          component:() => import('./views/user/bankpayments.vue')
        },
        {
          path:'/Home/users',
          name:'Users',
          component:() => import('./views/user/users.vue')
        },
        {
          path:'/Home/tenders',
          name:'Tenders',
          component:() => import('./views/user/tenders.vue')
        },
        {
          path:'/Home/Profile',
          name:'Profile',
          component:() => import('./views/user/profile.vue')
        },
        {
          path:'/Home/check',
          name:'Check',
          component:() => import('./views/user/check.vue')
        }
      ],
      beforeEnter: (to, from, next) => {
        if (to.name !== 'Login' && !auth.isLogged()) next({ name: 'Login' })
        else next()
      }
      
    },{
       path:'/administrator/',
       component:Administrator,
       children:[
        {
          path:'/',
          name:'admin-home',
          component:() => import('./views/admin/dashboard.vue')
        },
         {
           path:'/administrator/dashboard',
           name:'admin-dashboard',
           component:() => import('./views/admin/dashboard.vue')
         },
         {
           path:'administrator/rtgs',
           name:'admin.rtgs',
           component:() => import('./views/admin/rtgs.vue')
         },
         {
           path:'administrator/companies',
           name:'admin.customer',
           component:() => import('./views/admin/company.vue')
         },
         {
           path:'administrator/suppliers/pending',
           name:'can_suppliers_pending',
           component:() => import('./views/admin/suppliers/pending.vue')
         },
         {
           path:'administrator/roles',
           name:'admin.roles',
           component:() => import('./views/admin/roles.vue')
         },
         {
           path:'administrator/users',
           name:'admin.users',
           component:() => import('./views/admin/users.vue')
         },
         {
           path:'administrator/modules',
           name:'admin.modules',
           component:() => import('./views/admin/modules.vue')
         },
         {
           path:'administrator/sections',
           name:'admin.sections',
           component:() => import('./views/admin/sections.vue')
         },
         {
           path:'administrator/category',
           name:'admin.categories',
           component:() => import('./views/admin/category.vue')
         },
         {
          path:'administrator/currency',
          name:'admin.currency',
          component:() => import('./views/admin/currency.vue')
        },
        {
          path:'administrator/exchange',
          name:'admin.exchange',
          component:() => import('./views/admin/exchange.vue')
        },
        {
          path:'administrator/supplierFees',
          name:'admin.fees.suppliers',
          component:() => import('./views/admin/fees/supplier.vue')
        },
        {
          path:'administrator/contractFees',
          name:'admin.fees.contract',
          component:() => import('./views/admin/fees/contract.vue')
        },
        {
          path:'administrator/spocFees',
          name:'admin.fees.spoc',
          component:() => import('./views/admin/fees/spoc.vue')
        },
        {
          path:'administrator/establishmentFees',
          name:'admin.fees.establish',
          component:() => import('./views/admin/fees/establishment.vue')
        },
        {
          path:'administrator/bondcaps',
          name:'admin.cap',
          component:() => import('./views/admin/cap.vue')
        },
        {
          path:'administrator/classifications',
          name:'admin.classification',
          component:() => import('./views/admin/classification.vue')
        },
        {
          path:'administrator/pclass',
          name:'admin.pclass',
          component:() => import('./views/admin/pclass.vue')
        }, 
        {
          path:'administrator/pthreshold',
          name:'admin.threshold',
          component:() => import('./views/admin/threshold.vue')
        },
         {
           path:'administrator/accounttypes',
           name:'admin.accounttypes',
           component:() => import('./views/admin/accounttype.vue')
         }, 
         {
           path:'administrator/banktransactions',
           name:'admin.transactions.index',
           component:() => import('./views/admin/finance/bank.vue')
         }, 
         {
           path:'administrator/onlinetransactions',
           name:'admin.onlinepayments.index',
           component:() => import('./views/admin/finance/online.vue')
         },
         {
          path:'administrator/refactor',
          name:'admin.finance.refactor',
          component:() => import('./views/admin/finance/refactor.vue')
        },
         {
           path:'administrator/finance/reports',
           name:'admin.finance.reports',
           component:() => import('./views/admin/reports/finance.vue')
         }
         ,
         {
           path:'administrator/supplier/reports',
           name:'admin.suppliers.index',
           component:() => import('./views/admin/reports/suppliers.vue')
         }
         ,
         {
           path:'administrator/gazzate/list',
           name:'admin.gazzatte.index',
           component:() => import('./views/admin/gazzate.vue')
         }
       ], 
       beforeEnter: (to, from, next) => {
         if (to.name !== 'admin-login' && !auth.isLogged()) next({ name: 'admin-login' })
         else next()
       }
    }
]
const router = new Router({
    mode: 'history',
    routes
})
export  default router;

