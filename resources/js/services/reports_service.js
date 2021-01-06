import {http} from '../services/http_service'

export function retrieve(){
     return http().get('administrator/reports/invoices')
}
export function getInvoiceReport(data){
    return http().post('administrator/reports/finance/invoices',data)
}
export function download(data){
    return http().post('administrator/reports/finance/download',data,{
        responseType: 'blob',
    })
}