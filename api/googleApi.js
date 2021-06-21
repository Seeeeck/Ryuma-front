import request from '@/utils/request'
export function googleLogin(idTokenStr){
    return request({
        url: '/member/members/google_login',//
        method: 'post',
        params: {idToken: idTokenStr}
    })
}