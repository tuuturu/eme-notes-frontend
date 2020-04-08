<template>
	<svg
		class="IconDelete"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<line
			x1="2.41421"
			y1="2.58579"
			x2="21.5061"
			y2="21.6777"
			stroke="currentColor"
			stroke-width="4"
		/>
		<line
			x1="2.58579"
			y1="21.6777"
			x2="21.6777"
			y2="2.58582"
			stroke="currentColor"
			stroke-width="4"
		/>
	</svg>
</template>

<script>
export default {
	name: 'IconDelete',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped></style>
