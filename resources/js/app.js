/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Vuetify from '../plugins/vuetify'
import router from '../js/router'
import store from './store'
import '@babel/polyfill';
import moment from 'moment';
import zxcvbn from 'zxcvbn';

Vue.filter('formatDate',function(value){
    if(value){
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
})


const app = new Vue({
    vuetify:Vuetify,
    zxcvbn:zxcvbn,
    el: '#app',
    router,
    store
    
});
