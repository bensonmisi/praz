import {http} from '../services/http_service'
export function getExchange(){
    return http().get('administrator/exchange')
}

export function addExchange(data){
    return http().post('administrator/exchange',data)
}

export function updateExchange(data,id){
    return http().post('administrator/exchange/'+id,data)
}

export function deleteExchange(id){
    return http().delete('administrator/exchange/'+id)
}