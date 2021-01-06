import {http} from '../services/http_service';
export function getReceipts(){
    return http().get('receipts')
}
export function downloadReceipt(rpt){
    return http().get('receipt/'+rpt, {responseType:'blob'})
  }

  export function getBankpayments(){
      return http().get('bankpayments')
  }
  export function updateStatement(data){
    return http().post('bankpayments',data)
}
  export function getOnlinepayments(){
    return http().get('Onlinepayments')
}
export function checkPayment(id){
    return http().get('Onlinepayment/'+id)
}

export function getUsers(){
    return http().get('Users')
}

export function addUser(data){
    return http().post('User',data)
}

export function updateUser(id,data){
    return http().put('User/'+id,data)
}
export function changeStatus(id,data){
    return http().post('User/'+id,data)
}

export function getBids(){
    return http().get('bidbonds')
}
export function downloadBidbond(id){
    return http().get('biddownload/'+id, {responseType:'blob'})
}
