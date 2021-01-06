import {http} from '../services/http_service'
export function getFees()
{
    return http().get('administrator/establishfees')
}

export function addFee(data){
    return http().post('administrator/establishfee',data)
}

export function updateFee(data,id){
    return http().post('administrator/establishfee/'+id,data)
}

export function deleteFee(id){
    return http().delete('administrator/establishfee/'+id)
}