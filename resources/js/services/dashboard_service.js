import {http,httpFile} from '../services/http_service';

export function getDashboard(){
    return http().get('dashboard')
}

export function uploadDocument(data){
return httpFile().post('uploadDocument',data)
}
export function updateProfile(data){
    return http().post('updateProfile',data)
}
export function downloadCertificate(id){
    return http().get('printcertificate/'+id, {responseType:'blob'})
  }
  export function claimReceipt(data){
      return http().post('claimReceipt',data)
  }
  export function confirmReceipt(data){
      return http().post('confirmReceipt',data)
  }
  export function  verify(id){
      return http().get('verify/'+id)
  }
  export function updateREF(data){
      return http().post('updatereference',data)
  }
  export function changeCategory(data){
      return http().post('changeCategory',data);
  }