import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/welcome'
import BidderTemplate from './views/BidderTemplate'
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
               path:'/How-to-register',
               name:'How-to-register',
               component: () =>  import('./views/pages/faqs/how_to_register.vue')
             },
             {
               path:'/Registration-benefits',
               name:'registration-benefits',
               component: () =>  import('./views/pages/faqs/benefits.vue')
             },
             {
               path:'/Foreign-registrations',
               name:'foreign-registration',
               component: () =>  import('./views/pages/faqs/foreign_registration.vue')
             },
             {
               path:'/How-much',
               name:'how-much',
               component: () =>  import('./views/pages/faqs/how_much.vue')
             },
             {
               path:'/Registration-proof',
               name:'registration-proof',
               component: () =>  import('./views/pages/faqs/registration_proof.vue')
             },
             {
              path:'/Verification',
              name:'verification',
              component: () =>  import('./views/pages/verification.vue')
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
      path:'/Bidders-Dashboard/',
      component:BidderTemplate,
      children:[
        {
          path:'/',
          name:'Dashboard',
          component:() => import('./views/user/Dashboard.vue')
        },
        {
          path:'/Bidders-Dashboard/Invoicing',
          name:'Invoicing',
          component:() => import('./views/user/invoicing.vue')
        },
        {
          path:'/Bidders-Dashboard/Bidbonds',
          name:'Bidbonds',
          component:() => import('./views/user/bidbonds.vue')
        },
        {
          path:'/Bidders-Dashboard/Receipts',
          name:'Receipts',
          component:() => import('./views/user/receipting.vue')
        },
        ,
        {
          path:'/Bidders-Dashboard/Invoices',
          name:'Invoices',
          component:() => import('./views/user/invoices.vue')
        },
        {
          path:'/Bidders-Dashboard/onlinepayments',
          name:'onlinepayments',
          component:() => import('./views/user/onlinepayments.vue')
        },
        {
          path:'/Bidders-Dashboard/Documents',
          name:'documents',
          component:() => import('./views/user/documents.vue')
        },
        {
          path:'/Bidders-Dashboard/bankpayments',
          name:'bankpayments',
          component:() => import('./views/user/bankpayments.vue')
        },
        {
          path:'/Bidders-Dashboard/users',
          name:'users',
          component:() => import('./views/user/users.vue')
        },
        {
          path:'/Bidders-Dashboard/tenders',
          name:'tenders',
          component:() => import('./views/user/tenders.vue')
        },
        {
          path:'/Bidders-Dashboard/Registration/Documents',
          name:'Registration_Documents',
          component:() => import('./views/user/registration/documents.vue')
        },
        {
          path:'/Bidders-Dashboard/Registration/Invoicing',
          name:'Registration_invoicing',
          component:() => import('./views/user/registration/invoicing.vue')
        },
        {
          path:'/Bidders-Dashboard/Registration/Payments',
          name:'Registration_payments',
          component:() => import('./views/user/registration/payments.vue')
        },
        {
          path:'/Bidders-Dashboard/Profile',
          name:'Profile',
          component:() => import('./views/user/profile.vue')
        },
        {
          path:'/Bidders-Dashboard/check',
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

