import {http} from '../services/http_service'
export function retrieve()
{
    return http().get('administrator/banktransactions')
}

export function search(data){
    return http().post('administrator/banktransactions',data)
}

export function download(data){
    return http().post('administrator/banktransactions/download',data)
}

