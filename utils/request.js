import axios from 'axios';
import cookie from 'js-cookie';
import { Message } from 'element-ui'
import mock from '~/mocks/$mock'
const service = axios.create({
    baseURL: 'http://localhost:9002',
    timeout: 5000
})
//mock(service)

service.interceptors.request.use(
    config => {
        if (cookie.get('ryus_token')){
            config.headers['Authorization'] = "Bearer " + cookie.get('ryus_token');
        }
        return config;
    },

    error => {
        // do something with request error
        console.log(error) //for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(

    response => {
        const res = response.data;
        if(res.code !==200){
            if (res.code===401){
                Message({
                    message: 'ログインしてください。',
                    type: 'error',
                    duration: 3 * 1000
                })
                window.location.href="/login"
            }
            return Promise.reject(new Error(res.message || 'Error'));
        }else{
            return res;
        }
    },
    error => {
        console.log(error) //for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          })
        return Promise.reject(error)
    }
)


export default service;