import { nanoid } from 'nanoid'
import sorters from '@/utils/sorters'

const state = () => ({
	notes: []
})

const mutations = {
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
	async saveNote({ commit }, note) {
		if (note.id) {
			commit('updateNote', note)

			return note
		}

		const newNote = { ...note, id: nanoid() }

		commit('addNote', newNote)

		return newNote
	},
	async deleteNote({ commit }, { id }) {
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
