import { AxiosInstance } from '@/services'
import { createStore } from 'vuex'

const store = createStore({
	state () {
		return {
			gitSearch: '',
			gitUser: {},
			gitUserRepository: [],
			gitFavorite: [],
		}
	},
	mutations: {},
	actions: {
		searchUser ({ commit }, payload) {
			AxiosInstance.get(payload)
				.then(({ data }) => {
					console.log(data)
				})
				.catch(error => {
					console.log('erro')
				})
		},
	},
})

export default store
