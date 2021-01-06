import {http,httpFile} from '../services/http_service';

export function getInvoices(){
    return http().get('invoices')
}
export function downloadInvoice(inv){
    return http().get('printinvoice/'+inv, {responseType:'blob'})
  }