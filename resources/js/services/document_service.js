import {http} from '../services/http_service'

export function getDocuments(id){
    return http().get('administrator/documents/'+id)
}

export function addDocument(formdata){
    return http().post('administrator/document',formdata)
}
export function updateDocument(formdata,id){
    return http().post('administrator/document/'+id,formdata)
}

export function deleteDocument(id){
    return  http().delete('administrator/document/'+id)
} 