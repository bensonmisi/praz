import {http} from '../services/http_service'
export function getProcuremnts(){
    return http().get('Entity/Notices')
}
export function addProcurement(data){
   return  http().post('Entity/Notice',data)
}
export function getSettings(){
    return http().get('Entity/Settings')
}