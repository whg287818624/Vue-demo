/****axios请求统一处理****/

import axios from 'axios';
import { Message, Loading } from 'element-ui';
import qs from 'qs';
import router from '../router/index';


let loading;

function startLoading () {
    loading = Loading.service({
        lock: true,
        text: '拼命加载中...',
        background: 'rgba(0,0,0,0.7)'

    });
}

function endLoading () {
    loading.close()
}


const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: '/',
    timeout: 50000
})

// 请求拦截
service.interceptors.request.use(config => {
    // 加载动画
    startLoading();
    if (sessionStorage.eleToken) {
        // 设置统一的请求头
        // debugger
        config.headers['X-Access-Token'] = sessionStorage.eleToken;
        if (config.method === 'post' || config.method === 'get') {
            config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        }
    }

    // Post请求需要格式化数据
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data);
    // }

    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
})


// 响应拦截
service.interceptors.response.use(response => {
    // debugger
    const code = response.data.status;
    endLoading();
    // code = 1时为成功响应, 并返回数据, 便于在组件中接收
    if (code === 1) {
        return response;
    }
    // const check = response.data.type;
    // if (code === undefined && check != undefined) {
    //     return response;
    // }
    // 失败，返回错误信息，返回Reject状态
    // Message.error(response.data.message);
    return Promise.reject(response.data.message);
}, error => {
    // 错误提醒
    endLoading();
    Message.error(error.response.data.message);
    // 获取错误状态码
    const status = error.response.status;
    if (status === 500) {
        Message.error("登录状态失效，请重新登录！");
        // 清除token
        localStorage.clear();
        sessionStorage.clear();
        // 跳转到登录页面
        router.push('/login');
    }

    return Promise.reject(error);
})

// export const getData = (url,params) => {   //这部分一般写在api.js中
//     return service({
//         url:url,
//         method: 'get',
//         data:params
//     })
// };

export default service;