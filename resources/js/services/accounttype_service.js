import {http} from '../services/http_service'
export function getaccounttypelist(id){
    return http().get('administrator/accounttypes')
}

export function addAccounttype(formdata){
    return http().post('administrator/accounttype',formdata)
}
export function updateAccounttype(formdata,id){
    return http().post('administrator/accounttype/'+id,formdata)
}

export function deleteAccounttype(id){
    return  http().delete('administrator/accounttype/'+id)
} 