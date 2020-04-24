import Axios from 'axios'
import config from '@/app.config'

const axios = Axios.create({
	baseURL: config.VUE_APP_GATEKEEPER_URL,
	withCredentials: true
})

const state = () => ({
	user: null
})

const mutations = {
	user(state, user_info) {
		state.user = user_info
	}
}

const getters = {
	isAuthenticated(state) {
		return !!state.user
	}
}

const actions = {
	async refresh({ commit, state }) {
		if (getters.isAuthenticated(state)) return
		let user = null

		try {
			const { data } = await axios.get('/userinfo')

			user = data
			// eslint-disable-next-line no-empty
		} catch (error) {} // expected when not logged in

		commit('user', user)
	},
	async logout({ commit }) {
		await axios.post('/logout')

		commit('user', null)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
