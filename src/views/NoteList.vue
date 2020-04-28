<template>
	<div class="NoteList">
		<ol>
			<li v-for="note in sorted_notes" :key="note.id">
				<NoteCard
					:note="note"
					:selected="selectedNotes.includes(note.id)"
					@mousedown="onMouseDown(note.id)"
					@mouseup="onMouseUp(note.id)"
				/>
			</li>
		</ol>

		<div class="action-container">
			<Button class="link" v-if="selectMode" @click="deleteNotes">
				Delete
			</Button>
			<a v-else class="secondary" @click="$router.push({ name: 'CreateNote' })">
				New
			</a>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import NoteCard from '@/components/NoteCard'
import sorters from '@/utils/sorters'

export default {
	name: 'NoteList',
	components: { NoteCard },
	computed: {
		...mapState('notes', ['notes']),
		sorted_notes() {
			return [...this.notes].sort(sorters.noteByDate)
		},
		selectMode() {
			return this.selectedNotes.length !== 0
		}
	},
	data: () => ({
		longpressTimer: null,
		selectedNotes: []
	}),
	created() {
		this.$store.dispatch('notes/refreshNotes')
	},
	methods: {
		onMouseDown(id) {
			this.longpressTimer = setTimeout(() => {
				this.longpressTimer = null
				this.selectNote(id)
			}, 1000)
		},
		onMouseUp(id) {
			if (this.longpressTimer) {
				clearTimeout(this.longpressTimer)

				this.click(id)
			}
		},
		selectNote(id) {
			const index = this.selectedNotes.indexOf(id)

			if (index === -1) this.selectedNotes.push(id)
			else this.selectedNotes.splice(index, 1)
		},
		click(id) {
			if (!this.selectMode) return this.$router.push(`/${id}`)

			const index = this.selectedNotes.indexOf(id)

			if (index === -1) this.selectedNotes.push(id)
			else this.selectedNotes.splice(index, 1)
		},
		deleteNotes() {
			const notesToDelete = [...this.selectedNotes]

			while (notesToDelete.length > 0) {
				const id = notesToDelete.pop()

				this.$store.dispatch('notes/deleteNote', { id })
			}

			this.selectedNotes.splice(0, this.selectedNotes.length)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/theme.scss';

ol {
	width: 100%;

	list-style: none;
	padding: 0;
	margin: 0;

	text-align: left;
}

li {
	margin: 0.5em;
}

.action-container {
	position: fixed;
	bottom: 0;

	width: 100%;
	padding: 2em;

	display: flex;
	justify-content: flex-end;

	* {
		cursor: pointer;
	}
}

a.secondary {
	text-decoration: none;

	color: $primary;
}

button.link {
	border: 0;
	background-color: transparent;

	font-size: 16pt;
}
</style>
