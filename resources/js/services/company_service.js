import {http,httpFile} from '../services/http_service';
export function getList(data){
    return http().post('/administrator/company',data)
}

export function showCompany(id){
    return http().get('administrator/company/'+id)
}
export function updateCompany(data){
    return http().post('administrator/company/update',data)
}
export function passwordreset(id){
    return http().get('administrator/user/passwordreset/'+id)
}

export function adduser(data){
    return http().post('administrator/company/user/create',data)
}

export function updateRegistration(data,id){
    return http().post('administrator/registration/update/'+id,data) 
}