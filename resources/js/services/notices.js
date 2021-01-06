import {http} from '../services/http_service'
export function getNotices()
{
    return http().get('Notices')
}
export function retreiveNotices(link){
    return http().get(link)
}
export function getNotice(id){
    return http().get('Notice/'+id)
}

export function uploadQoutation(data){
    return http().post('uploadQoutation',data)
}
export function addItem(data){
 return  http().post('addtenderItem',data)
}

export function initiate(id){
    return http().get('Noticeinititate/'+id)
}
export function pay(id){
    return http().get('Noticepay/'+id)
}