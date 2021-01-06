import {http} from '../services/http_service'

export function getUsers(){
    return http().get('administrator/users')
}

export function addUser(data){
    return http().post('administrator/user',data)
}

export function updateUser(data,id){
    return http().post('administrator/user/'+id,data)
}