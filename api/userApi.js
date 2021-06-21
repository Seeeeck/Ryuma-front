import request from '@/utils/request'

export function getLoginInfo(){
    return request({
        url: "/member/members/private",
        method: 'GET'
    })
}
