<template>
	<div class="Note">
		<textarea aria-label="note body" v-model="note.body" @input="autosave" />
	</div>
</template>

<script>
import Note from '@/models/note'

const SAVE_TIMEOUT_MS = 200

export default {
	name: 'Note',
	data: () => ({
		saveTimeout: null,
		note: new Note()
	}),
	methods: {
		autosave() {
			if (this.saveTimeout) clearTimeout(this.saveTimeout)

			this.saveTimeout = setTimeout(async () => {
				this.note = await this.$store.dispatch('notes/saveNote', this.note)
			}, SAVE_TIMEOUT_MS)
		}
	},
	created() {
		const name = this.$route.name

		if (name === 'EditNote')
			this.note = this.$store.getters['notes/getNote'](this.$route.params.id)
		else if (name === 'LatestNote')
			this.note = this.$store.getters['notes/getLatestNote']
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
