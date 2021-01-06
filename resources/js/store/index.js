import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/auth_service'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl:"http://127.0.0.1:8000/api",
    serverUrl:"http://127.0.0.1:8000/",
    categorylist:[],
    isAuthenticate:false,
    profile:{},
    rolelist:[],
    sectionlist:[],
    currencylist:[],
    thresholdlist:[],
    pclass:[],
    pclassifications:[],
    types:[],
    generalreport:[],
    generalreportTotal:0,
    invoice:[],
    documentstatus:false,
    regyear:[]

  },
  mutations: {
    setProfile(state,payload){
      state.isAuthenticate = auth.isLogged()
      state.profile = payload
    },
    setRole(state,payload){
      state.rolelist = payload
    },
    setSections(state,payload){
      state.sectionlist = payload
    },
    setCurrencylist(state,payload){
      state.currencylist = payload
    },
    setThresholdlist(state,payload){
      state.thresholdlist = payload
    },
    setpclass(state,payload){
      state.pclass = payload
    },
    setpclassifications(state,payload){
      state.pclassifications = payload
    },
    setTypes(state,payload){
      state.types = payload
    },
    setGeneralreport(state,payload){
      state.generalreport = payload
    },
    setGeneralreportTotal(state,payload){
      state.generalreportTotal = payload
    },
    setCategorylist(state,payload){
      state.categorylist = payload
    },
    setInvoice(state,payload){
      state.invoice = payload
    },
    setDocumentstatus(state,payload){
      state.documentstatus = payload
    },
    setRegyear(state,payload){
      state.regyear = payload
    }
  },
  actions: {
    setProfile(context,payload){
      context.commit('setProfile',payload)
    },
    setRoles(context,payload){
      context.commit('setRole',payload)
    },
    setSections(context,payload){
      context.commit('setSections',payload)
    },
    setCurrencylist(context,payload){
      context.commit('setCurrencylist',payload)
    },
    setThresholdlist(context,payload){
      context.commit('setThresholdlist',payload)
    },
    setPclass(context,payload){
      context.commit('setpclass',payload)
    },
    setPclassifications(context,payload){
      context.commit('setpclassifications',payload)
    },
    setTypes(context,payload){
      context.commit('setTypes',payload)
    },
    setGeneralreport(context,payload){
      context.commit('setGeneralreport',payload)
    },
    setGeneralreportTotal(context,payload){
      context.commit('setGeneralreportTotal',payload)
    },
    setCategorylist(context,payload){
      context.commit('setCategorylist',payload)
    },
    setInvoice(context,payload){
      context.commit('setInvoice',payload)
    },
    setDocumentstatus(context,payload){
      context.commit('setDocumentstatus',payload)
    },
    setRegyear(context,payload){
      context.commit('setRegyear',payload)
    }


  
  },
  getters:{
    countGeneral:state =>{
       return state.generalreport.length
    }
  },
  modules: {
  }
})