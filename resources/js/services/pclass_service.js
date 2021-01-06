import {http} from '../services/http_service'
export function retrive()
{
    return http().get('administrator/pclass')
}

export function add(data){
    return http().post('administrator/pclass',data)
}

export function update(data,id){
    return http().post('administrator/pclass/'+id,data)
}

export function destroy(id){
    return http().delete('administrator/pclass/'+id)
}