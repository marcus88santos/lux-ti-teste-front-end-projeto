import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favoritos from '../views/Favoritos.vue'
import Result from '../views/Result.vue'

const routes = [
	{ path: '', component: Home },
	{ path: '/home', component: Home },
	{ path: '/favoritos', component: Favoritos },
	{ path: '/result', component: Result },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
