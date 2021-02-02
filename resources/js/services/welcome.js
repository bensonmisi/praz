import {http} from '../services/http_service'

export function getSuppliers(){
    return http().get('suppliers')
}
export function getAwards(){
    return http().get('awards')
}
export function getNotices(){
    return http().get('notices')
}
export function getWelcome(){
    return http().get('welcome')
}
export function searchCertificate(data){
    return  http().post('verification',data)
}