<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="IconMenu"
		v-on="$listeners"
	>
		<title>{{ alt }}</title>
		<rect width="10" height="10" fill="currentColor" />
		<rect x="14" width="10" height="10" fill="currentColor" />
		<rect x="14" y="14" width="10" height="10" fill="currentColor" />
		<rect y="14" width="10" height="10" fill="currentColor" />
	</svg>
</template>

<script>
export default {
	name: 'IconMenu',
	props: {
		alt: {
			type: String,
			default: () => ''
		}
	}
}
</script>
