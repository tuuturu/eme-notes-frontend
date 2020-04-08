<template>
	<div class="NoteCard" :class="{ selected }" v-on="$listeners">
		{{ title }}
	</div>
</template>

<script>
export default {
	name: 'NoteCard',
	props: {
		note: Object,
		selected: Boolean
	},
	computed: {
		title() {
			const lines = this.note.body.split('\n')

			return lines[0]
		}
	}
}
</script>

<style lang="scss" scoped>
.NoteCard {
	padding: 0.5em;

	border: 2px solid black;
	border-radius: 4px;

	cursor: pointer;
}

.selected {
	background-color: darkslategrey;
	color: white;
}
</style>
