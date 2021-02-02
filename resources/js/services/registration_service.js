import {http} from '../services/http_service'

export function getCompanyDocuments(){
    return http().get('/registration_documents')
}

export function uploadCompanyDocument(form_data){
    return http().post('/registration_document_upload',form_data);
}