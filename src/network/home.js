import {request} from './request'
// http://123.207.32.32:8000/api/v1/home/multidata
export function getHomeMulidata() {
    return request({
        url:'/home/multidata'
    })
}