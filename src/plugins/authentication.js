import store from '@/store'
import config from '@/app.config'

function install(Vue) {
	Vue.mixin({
		async beforeRouteEnter(to, from, next) {
			await store.dispatch('user/refresh')

			if (store.getters['user/isAuthenticated']) return next()

			const choice = confirm('Seems you need to login. Proceed?')

			if (!choice) return next()

			const redirectURL = new URL(to.fullPath, config.VUE_APP_BASE_URL)
			const url = new URL('/login', config.VUE_APP_GATEKEEPER_URL)
			url.search = new URLSearchParams({
				redirect: redirectURL
			}).toString()

			window.location.href = url
		}
	})
}

export default {
	install
}
