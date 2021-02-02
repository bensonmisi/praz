import {http,httpOpen} from '../services/http_service';
import jwt from 'jsonwebtoken';

export function register(data){

   return httpOpen().post('/auth/register',data);
}
export function getTypes(){

    return httpOpen().get('/auth/accounttypes');
 }

export function login(data){
    return httpOpen().post('/auth/login',data)
}
export function adminlogin(data){
    return httpOpen().post('/auth-admin/login',data)
}

export function logout(){
    return http().get('/auth/logout')
}
export function forgot(email){
    return http().get('/auth/forgot/'+email)
}
export function resetPassword(data){
    return http().post('/auth/forgot',data)
}
export function getProfile(){
    return http().get('/user/profile')
}
export function setToken(data){
   
   var token = jwt.sign({'user':data},'p2pfinancing1234');
   //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    localStorage.setItem('token',token);
}

export function getToken(){
    return localStorage.getItem('token');
}
export function isLogged(){
    var token = localStorage.getItem('token');
    return token ? true : false;  
}
export function removeItem(){
    return localStorage.removeItem('token');
}
export function getaccessToken(){    
    const token = localStorage.getItem('token');
    if(token)
    {
    var decoded = jwt.decode(token);
    
    return decoded.user.access_token;
    }else{
        return null
    }
}
export function getCompany(){    
    const token = localStorage.getItem('token');
    if(token)
    {
    var decoded = jwt.decode(token);
    return decoded;
    }else{
        return null
    }
}