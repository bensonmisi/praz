import {http} from '../services/http_service'
export function retrive()
{
    return http().get('administrator/threshold')
}

export function add(data){
    return http().post('administrator/threshold',data)
}

export function update(data,id){
    return http().post('administrator/threshold/'+id,data)
}

export function destroy(id){
    return http().delete('administrator/threshold/'+id)
}