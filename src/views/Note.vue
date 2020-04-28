<template>
	<div class="Note">
		<textarea aria-label="note body" v-model="note.body" @input="autosave" />
	</div>
</template>

<script>
import Note from '@/models/note'

const SAVE_TIMEOUT_MS = 500

export default {
	name: 'Note',
	data: () => ({
		saveTimeout: null,
		note: null
	}),
	methods: {
		autosave() {
			if (this.saveTimeout) clearTimeout(this.saveTimeout)

			this.saveTimeout = setTimeout(async () => {
				const savedNote = await this.$store.dispatch(
					'notes/saveNote',
					this.note
				)

				this.note.id = savedNote.id

				this.saveTimeout = null
			}, SAVE_TIMEOUT_MS)
		}
	},
	created() {
		const name = this.$route.name

		switch (name) {
			case 'CreateNote':
				this.note = new Note()
				break
			case 'EditNote':
				this.note = this.$store.getters['notes/getNote'](this.$route.params.id)
				break
			case 'LatestNote':
				this.note = this.$store.getters['notes/getLatestNote']
				if (!this.note) this.$router.push({ name: 'NoteList' })
				break
			default:
				console.error(`Unable to handle ${name}`)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/theme.scss';

.Note {
	overflow: hidden;
}

textarea {
	width: 100%;
	height: 100vh;

	resize: none;
	border: 0;

	padding: 1em;
	margin: 0;

	font-size: 14pt;
	line-height: 1.5;

	background-color: $background;
}
</style>
