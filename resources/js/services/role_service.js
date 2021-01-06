import { get } from 'jquery'
import {http} from '../services/http_service'
export function getRoles(){
    return http().get('administrator/roles')
}

export function addRole(data){
    return http().post('administrator/role',data)
}

export function updateRole(data,id){
    return http().post('administrator/role/'+id,data)
}

export function deleteRole(id){
    return http().delete('administrator/role/'+id)
}

export function getModules(id){
    return http().get('administrator/role/modules/'+id)
}
export function assignModule(formdata){
    return http().post('administrator/role/module/assign',formdata)
}

export function getSubmodules(role,module){
    return http().get('administrator/role/submodule/'+module+'/'+role)
}

export function assignSubmodule(formdata){
    return http().post('administrator/role/submodule/assign',formdata)
}

export function getPermissions(role,submodule){
    return http().get('administrator/role/permission/'+submodule+'/'+role)
}

export function assignPermission(formdata){
    return http().post('administrator/role/permission/assign',formdata)
}