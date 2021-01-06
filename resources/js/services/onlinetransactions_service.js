import {http} from '../services/http_service'
export function retrieve()
{
    return http().get('administrator/onlinetransactions')
}

export function search(data){
    return http().post('administrator/onlinetransactions',data)
}

export function download(data){
    return http().post('administrator/onlinetransactions/download',data)
}

