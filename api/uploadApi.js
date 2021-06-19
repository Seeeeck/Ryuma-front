import request from '@/utils/request'
export function policy(){
    return request({
        url: '/third/oss/policy',
        method: 'get',
    })
}