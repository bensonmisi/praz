import {http} from './http_service'

export function getUsers(){
    return http().get('administrator/getUsers');
}

export function assignUser(formdata){
    return http().post('administrator/assignUser',formdata)
}
export function getComments(identifier){
    return http().get('administrator/comments/'+identifier);
}