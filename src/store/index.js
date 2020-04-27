import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/user'
import notes from '@/store/notes'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		notes
	}
})
