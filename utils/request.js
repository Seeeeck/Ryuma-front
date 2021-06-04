import axios from 'axios';
import cookie from 'js-cookie';
import { Message } from 'element-ui'
import mock from '~/mocks/$mock'
const service = axios.create({
    baseURL: 'http://localhost:9002',
    timeout: 5000
})
mock(service)

service.interceptors.request.use(
    config => {
        if (cookie.get('ryus_token')){
            config.headers['Authorization'] = 'Bearer ' + cookie.get('ryus_token');
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
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
    response => {
        const res = response
        if(res.status !==200){
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
              })
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