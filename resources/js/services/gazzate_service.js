import {http} from '../services/http_service'
export function retrive()
{
    return http().get('administrator/gazzate')
}

export function add(data){
    return http().post('administrator/gazzate',data)
}

export function update(data,id){
    return http().post('administrator/gazzate/'+id,data)
}

export function destroy(id){
    return http().delete('administrator/gazzate/'+id)
}

export function download(id){
    return http().get('administrator/gazzate/'+id)
}