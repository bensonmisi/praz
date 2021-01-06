import {http} from '../services/http_service'
export function retrive()
{
    return http().get('administrator/classifications')
}

export function add(data){
    return http().post('administrator/classification',data)
}

export function update(data,id){
    return http().post('administrator/classification/'+id,data)
}

export function destroy(id){
    return http().delete('administrator/classification/'+id)
}