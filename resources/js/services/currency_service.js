import {http} from '../services/http_service'
export function getCurrency(){
    return http().get('administrator/currency')
}

export function addCurrency(data){
    return http().post('administrator/currency',data)
}

export function updateCurrency(data,id){
    return http().post('administrator/currency/'+id,data)
}

export function deleteCurrency(id){
    return http().delete('administrator/currency/'+id)
}