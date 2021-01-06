import store from '../store/index';
import axios from 'axios';
import * as auth from './auth_service'

export function httpOpen(){
   return axios.create({
      baseURL:store.state.apiUrl
   })  
}
export function http(){ 
   return axios.create({
        baseURL:store.state.apiUrl,
     headers:{
          Authorization:'Bearer '+auth.getaccessToken(),
       }
     })
   }


export function httpFile(){
    return axios.create({
        baseURL:store.state.apiUrl,
       headers:{
            Authorization:'Bearer '+auth.getaccessToken(), 
            'Content-Type':'multipart/form-data'
         } 
    })
   }