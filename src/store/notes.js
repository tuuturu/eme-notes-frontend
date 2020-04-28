import Axios from 'axios'

import config from '@/app.config'
import sorters from '@/utils/sorters'

const axios = Axios.create({
	baseURL: config.VUE_APP_UPSTREAM_URL,
	withCredentials: true
})

const state = () => ({
	notesFetched: false,

	notes: []
})

const mutations = {
	notes(state, notes) {
		state.notes = notes
	},
	updateNote(state, note) {
		const index = state.notes.findIndex(item => item.id === note.id)

		state.notes.splice(index, 1)

		state.notes.push(note)
	},
	addNote(state, note) {
		state.notes.push(note)
	},
	deleteNoteById(state, id) {
		const index = state.notes.findIndex(note => note.id === id)

		state.notes.splice(index, 1)
	}
}

const getters = {
	getNote: state => id => {
		return state.notes.find(note => note.id === id)
	},
	getLatestNote: state => {
		const sortedNotes = [...state.notes].sort(sorters.noteByDate)

		return sortedNotes[0]
	}
}

const actions = {
	async refreshNotes({ commit, state }) {
		if (state.notesFetched) return

		const { data } = await axios.request({
			url: '/notes',
			method: 'get'
		})

		commit('notes', data)
	},
	async saveNote({ commit }, note) {
		let method = 'post'
		let url = '/notes'
		let commitFn = 'addNote'

		if (note.id) {
			method = 'patch'
			url += `/${note.id}`
			commitFn = 'updateNote'
		}

		const { data } = await axios.request({
			url,
			method,
			data: note
		})

		commit(commitFn, data)

		return data
	},
	async deleteNote({ commit }, { id }) {
		await axios.request({
			url: `/notes/${id}`,
			method: 'delete'
		})

		commit('deleteNoteById', id)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
