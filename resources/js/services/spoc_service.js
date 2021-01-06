import {http} from '../services/http_service'
export function getFees()
{
    return http().get('administrator/spocfees')
}

export function addFee(data){
    return http().post('administrator/spocfee',data)
}

export function updateFee(data,id){
    return http().post('administrator/spocfee/'+id,data)
}

export function deleteFee(id){
    return http().delete('administrator/spocfee/'+id)
}