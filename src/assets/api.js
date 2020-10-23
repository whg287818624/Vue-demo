import service from './request'

export const getData = (url,params) => {
    return service({
        url:url,
        method: 'get',
        data:params
    })
};

/*组件中调用

import {getData} from '../assets/api.js';    
getData('/geo/',{}).then(res=>{
    console.log(res);
    this.res = res.data;
});

*/