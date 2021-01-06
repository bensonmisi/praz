import {http} from './http_service'

export function getPermissions(id){
    return http().get('administrator/permissions/'+id)
}

export function addPermission(formdata){
    return http().post('administrator/permission',formdata)
}

export function updatePermission(formdata,id){
    return http().post('administrator/permission/'+id,formdata)
}

export function deletePermission(id){
    return http().delete('administrator/permission/'+id)
}