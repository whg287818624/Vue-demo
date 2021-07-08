import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
	{
		path: '/login',
		name: 'login',
		component: () => import('../components/login.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../components/index.vue')
	},
	{
		path: '/excel',
		name: 'excel',
		component: () => import('../components/excel.vue')
	}
]

const router = new VueRouter({
    // mode: 'history', // 访问路径不带#号
    // base: process.env.BASE_URL, // 配置单页应用的基路径
    routes,
})

export default router
