import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/index',
		name: 'index',
		component: index
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/',
		name: "homePage",
		component: () => import("../views/homePage.vue"),
	}
]

const router = new VueRouter({
	routes
})

export default router
