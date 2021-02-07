import {http,httpFile} from '../services/http_service';

export function getRtgs(){
  return  http().get('administrator/rtgs')
}

export function showRtgs(id){
    return http().get('administrator/rtgs/show/'+id)
}

export function retrieveInvoice(invoicenumber){
    return http().get('administrator/rtgs/invoice/'+invoicenumber)
}

export function getStatement(currency){
    return http().get('/administrator/rtgs/statement/'+currency)
}

export function submitStatement(data){
    return http().post('/administrator/rtgs/statement',data)
}

export function getComments(id){
    return http().get('/administrator/rtgs/comments/'+id)
}
export function saveComment(data){
    return http().post('/administrator/rtgs/comments/',data)
}

export function reverse(data){
    return http().post('/administrator/rtgs/reverse',data)
}