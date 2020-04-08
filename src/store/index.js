import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import notes from '@/store/notes'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		notes
	}
})
