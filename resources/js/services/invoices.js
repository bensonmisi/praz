import {http,httpFile} from '../services/http_service';

export function getInvoices(){
    return http().get('getinvoices')
}
export function downloadInvoice(inv){
    return http().get('printinvoice/'+inv, {responseType:'blob'})
  }