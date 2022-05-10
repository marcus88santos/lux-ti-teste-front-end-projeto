import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favoritos from '../views/Favoritos.vue'
import Result from '../views/Result.vue'

const routes = [
	{ path: '', component: Home },
	{ path: '/Home', component: Home },
	{ path: '/Favoritos', component: Favoritos },
	{ path: '/Result', component: Result },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
