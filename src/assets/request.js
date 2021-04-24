/****axios请求统一处理****/

import axios from 'axios';
// import { Message, Loading } from 'element-ui';
import qs from 'qs';
import router from '../router/index';


// let loading;

// function startLoading () {
//     loading = Loading.service({
//         lock: true,
//         text: '拼命加载中...',
//         background: 'rgba(0,0,0,0.7)'

//     });
// }

// function endLoading () {
//     loading.close()
// }

axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.baseURL = "/";
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 公共参数
const commonOptions = {
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // 重复验证获取partitionBy
        if (config.method == 'get') {
            config.params = Object.assign({}, commonOptions, config.params)
        } else {
            config.data = Object.assign({}, commonOptions, config.data)
        }

        if(localStorage.getItem('token')){
            config.headers['token'] = localStorage.getItem('token')
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 请求超时设置重新请求
axios.interceptors.response.use( response => {
	// console.log(response)
    if(response.status === 203){
        console.log('token失效，重新登录')
        localStorage.removeItem("token");
        router.push({ path: '/login' })
    }
    return response
}, err => {
    let config = err.config
    if (!config || !config.retry) return Promise.reject(err)
    config.__retryCount = config.__retryCount || 0
    if (config.__retryCount >= config.retry) {
        return Promise.reject(err)
    }
    config.__retryCount += 1
    let backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, config.retryDelay || 1)
    })
    return backoff.then(function() {
        return axios(config)
    })
})

export function fetch(url, params = {}, headers) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params, headers }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// export const getData = (url,params) => {   //这部分一般写在api.js中
//     return service({
//         url:url,
//         method: 'get',
//         data:params
//     })
// };

export default {};