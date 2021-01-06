import {http,httpFile} from '../services/http_service'
export function getCategorylist(id){
    return http().get('administrator/categorylist')
}

export function addCategory(formdata){
    return http().post('administrator/category',formdata)
}
export function uploadCategory(formdata){
    return httpFile().post('administrator/categoryupload',formdata)
}
export function updateCategory(formdata,id){
    return http().post('administrator/category/'+id,formdata)
}

export function deleteCategory(id){
    return  http().delete('administrator/category/'+id)
} 