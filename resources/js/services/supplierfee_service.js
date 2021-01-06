import {http} from '../services/http_service'
export function getFees()
{
    return http().get('administrator/supplierfees')
}

export function addFee(data){
    return http().post('administrator/supplierfee',data)
}

export function updateFee(data,id){
    return http().post('administrator/supplierfee/'+id,data)
}

export function deleteFee(id){
    return http().delete('administrator/supplierfee/'+id)
}