import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import {fetch} from './assets/request.js';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$fetch = fetch;

Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{
	let  token = localStorage.getItem('token');
    if (!token && to.name !== 'login'){
        // router.replace({ path: '/login' });
		next({replace:false,name:'login'});
    }
	next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
