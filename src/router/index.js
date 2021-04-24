import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
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
