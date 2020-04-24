import Vue from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import store from './store'

import authentication from '@/plugins/authentication'

Vue.config.productionTip = false

Vue.use(authentication)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
