import {http} from '../services/http_service'
export function getSections(){
    return http().get('administrator/sections')
}

export function addSection(formdata){
    return http().post('administrator/section',formdata)
}
export function updateSection(formdata,id){
    return http().post('administrator/section/'+id,formdata)
}

export function deleteSection(id){
    return  http().delete('administrator/section/'+id)
}