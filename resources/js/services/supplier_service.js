import {http,httpfile} from '../services/http_service'

export function getPending(){
    return http().get('administrator/suppliers/pending')
}

export function showSupplier(id){
    return http().get('administrator/suppliers/pending/'+id)
}
export function comment(data){
    return http().post('administrator/suppliers/comment',data) 
}

export function approve(id){
    return http().get('administrator/suppliers/approve/'+id)
}

export function getReport(){
    return http().get('administrator/reporting/suppliers')
}

export function searchReport(data){
    return http().post('administrator/reporting/suppliers',data)
}

export function getMonthly(){
    return http().get('administrator/suppliers/monthly')
}

export function getYearly(){
    return http().get('administrator/suppliers/yearly')   
}
export function getByCategory(){
    return http().get('administrator/suppliers/category')   
}
export function searchMonthly(data){
    return http().post('administrator/suppliers/monthly',data)
}