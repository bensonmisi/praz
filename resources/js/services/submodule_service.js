import {http} from '../services/http_service'

export function getSubmodules(id){
    return http().get('administrator/submodules/'+id)
}

export function addSubmodule(data){
    return http().post('administrator/submodule',data)
}

export function updateSubmodule(data,id){
  return http().post('administrator/submodule/'+id,data)
}

export function deleteSubmodule(id){
    return http().delete('administrator/submodule/'+id)
}