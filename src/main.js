import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import {getData} from './assets/request.js';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// Vue.prototype.$get = getData;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
