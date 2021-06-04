import request from '@/utils/request'

export function getUser(id){
    return request({
        url: `/users/${id}`,
        method: 'GET'
    })
}

export function listUser(){
    return request({
        url: '/users',
        method: 'GET'
    })
}

export function saveUser(data){
    return request({
        url: '/users',
        method: 'post',
        data
    })
}

export function deleteUser(id){
    return request({
        url: `/users/${id}`,
        method: 'delete',
    })
}