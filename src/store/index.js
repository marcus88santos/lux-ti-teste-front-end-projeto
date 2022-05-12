import { AxiosInstance } from '@/services'
import { createStore } from 'vuex'

const store = createStore({
	state () {
		return {
			gitSearch: { text: '', error: false },
			gitUser: {},
			gitUserRepository: [],
			gitFavorite: [],
		}
	},
	mutations: {
		setGitError (state, payload) {
			state.gitSearch.error = payload
		},
		setGitText (state, payload) {
			state.gitSearch.text = payload
		},
		setGitUser (state, payload) {
			state.gitUser = payload
		},
		setGitUserStarred (state, payload) {
			state.gitUser.starred = payload
		},
	},
	actions: {
		searchUser ({ dispatch, commit }, payload) {
			AxiosInstance.get(payload)
				.then(({ data }) => {
					// console.log(data)
					commit('setGitError', false)
					commit('setGitUser', data)
					commit('setGitText', payload)
					dispatch('searchStarred', `${payload}/starred`)
				})
				.catch(error => {
					commit('setGitError', true)
					console.log(error)
				})
		},
		searchStarred ({ commit }, payload) {
			AxiosInstance.get(payload)
				.then(({ data }) => {
					commit('setGitUserStarred', data.length)
				})
				.catch(error => {
					console.log(error)
				})
		},
	},
})

export default store
