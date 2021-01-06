import {http} from '../services/http_service'
export function getModules(){
    return http().get('administrator/modules')
}

export function addModule(data){
    return http().post('administrator/module',data)
}

export function updateModule(data,id){
    return http().post('administrator/module/'+id,data)
}

export function deleteModule(id){
    return http().delete('administrator/module/'+id)
}