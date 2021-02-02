import {http,httpFile} from '../services/http_service';
export function getInvoice(){
    return http().get('invoices')
}

export function addInvoice(data){
  return http().post('addInvoice',data)
}

export function removeItem(id){
  return http().delete('removeItem/'+id)
}
export function mobilepayment(data){
  return http().post('mobilepayment',data)
} 
export function confirmPayment(id){
  return http().get('confirmpayment/'+id) 
}
export function downloadInvoice(inv){
  return http().get('printinvoice/'+inv, {responseType:'blob'})
}
export function getInternalBalance(currency){
  return http().get('internal/'+currency)
}
export function claimInternalBalance(data){
  return http().post('internal',data)
}
export function confirmTransaction(data){
  return httpFile().post('confirmTransaction',data)
}
export function registerInternalBalance(data){
  return http().post('internalregistration',data)
}
export function paynowPayments(){
  return http().get('onlinepayments')
}

export function checkpaynow(){
  return http().get('checkonlinepayment')
}

export function processAwaiting(formdata){
  return http().post('processAwaiting',formdata);
}

export function updateReference(data){
  return http().post('updatereference',data)
}