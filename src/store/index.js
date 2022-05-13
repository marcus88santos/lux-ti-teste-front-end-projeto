import { AxiosInstance } from '@/services'
import { createStore } from 'vuex'
import router from '@/route'

const store = createStore({
	state () {
		return {
			gitSearch: { text: '', error: false },
			gitUser: {},
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
		setGitUserRepos (state, payload) {
			state.gitUser.repos = payload
		},
		setFavorite (state, payload) {
			let tofavorite = true
			state.gitFavorite.forEach((el, index) => {
				if (el) {
					if (el['id'] === payload['id']) {
						state.gitFavorite.splice(index, 1)
						tofavorite = false
					}
				}
			})
			if (tofavorite) {
				state.gitFavorite.push(payload)
			}
		},
	},
	actions: {
		searchUser ({ dispatch, commit, state }, payload) {
			return new Promise((resolve, reject) => {
				AxiosInstance.get(payload)
					.then(({ data }) => {
						// console.log(data)
						commit('setGitError', false)
						commit('setGitUser', data)
						commit('setGitText', payload)
						if (Object.keys(state.gitUser).length != 0) {
							dispatch('searchRepos', payload)
							dispatch('searchStarred', `${payload}/starred`)
							router.push('/result')
						} else {
							commit('setGitError', true)
							commit('setGitUser', {})
						}
						resolve()
					})
					.catch(error => {
						commit('setGitError', true)
						commit('setGitUser', {})
						console.log(error)
					})
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
		searchRepos ({ commit }, payload) {
			AxiosInstance.get(`${payload}/repos`)
				.then(({ data }) => {
					let sorted = [...data].sort((a, b) => {
						return b['stargazers_count'] - a['stargazers_count']
					})
					commit('setGitUserRepos', sorted)
				})
				.catch(error => {
					console.log(error)
				})
		},
	},
})

export default store
