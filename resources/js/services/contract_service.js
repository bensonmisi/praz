import {http} from '../services/http_service'
export function getFees()
{
    return http().get('administrator/contractfees')
}

export function addFee(data){
    return http().post('administrator/contractfee',data)
}

export function updateFee(data,id){
    return http().post('administrator/contractfee/'+id,data)
}

export function deleteFee(id){
    return http().delete('administrator/contractfee/'+id)
}