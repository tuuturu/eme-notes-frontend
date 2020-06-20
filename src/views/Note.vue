<template>
	<div class="Note">
		<div class="menu">
			<IconMenu @click="$router.push('/all')" />
		</div>
		<textarea
			ref="txtBody"
			aria-label="note body"
			v-model="note.body"
			@input="autosave"
		/>
	</div>
</template>

<script>
import Note from '@/models/note'
import IconMenu from '@/components/IconMenu'

const SAVE_TIMEOUT_MS = 500

export default {
	name: 'Note',
	components: { IconMenu },
	data: () => ({
		saveTimeout: null,
		note: new Note()
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
	async created() {
		const name = this.$route.name

		await this.$store.dispatch('notes/refreshNotes')

		switch (name) {
			case 'CreateNote':
				break
			case 'EditNote':
				this.note = this.$store.getters['notes/getNote'](this.$route.params.id)
				break
			case 'LatestNote':
				this.note = this.$store.getters['notes/getLatestNote']
				if (!this.note) await this.$router.push({ name: 'NoteList' })
				break
			default:
				console.error(`Unable to handle ${name}`)
		}
	},
	mounted() {
		this.$refs.txtBody.focus()
	}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/theme.scss';

.Note {
	overflow: hidden;
}

.menu {
	position: fixed;
	bottom: 0;
	width: 100%;

	display: flex;
	justify-content: flex-end;

	padding: 1em;
}

.IconMenu {
	width: 36px;
	height: 36px;

	color: black;

	cursor: pointer;
}

textarea {
	width: 100%;
	height: calc(100vh - 36px - 2em);

	resize: none;
	border: 0;

	padding: 1em;
	margin: 0;

	font-size: 14pt;
	line-height: 1.5;

	background-color: $background;
}
</style>
