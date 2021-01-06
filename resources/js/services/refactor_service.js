import {http} from '../services/http_service'
export function retrieve()
{
    return http().get('administrator/finance/refactor')
}

export function process(){
    return http().post('administrator/finance/refactor')
}