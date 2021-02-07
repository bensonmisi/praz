import {http} from './http_service'


export function getDashboard(){
    return http().get('/administrator')
}
export function changepassword(data){
    return http().post('/administrator/passwordChange',data)
}