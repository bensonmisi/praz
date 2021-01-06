import {http} from '../services/http_service'
export function getCaps()
{
    return http().get('administrator/bondcaps')
}

export function add(data){
    return http().post('administrator/bondcap',data)
}

export function update(data,id){
    return http().post('administrator/bondcap/'+id,data)
}

export function destroy(id){
    return http().delete('administrator/bondcap/'+id)
}