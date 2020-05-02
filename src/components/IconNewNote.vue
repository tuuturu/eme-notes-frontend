<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="IconNewNote"
		v-on="$listeners"
	>
		<title>{{ alt }}</title>
		<rect width="24" height="24" fill="white" />
		<rect
			x="1"
			y="1"
			width="16"
			height="22"
			stroke="currentColor"
			stroke-width="2"
		/>
		<rect width="6" height="6" fill="currentColor" />
		<path d="M0 6L6 0H0V6Z" fill="white" />
		<rect
			x="18.6771"
			y="2.29289"
			width="5"
			height="16.0997"
			transform="rotate(45 18.6771 2.29289)"
			fill="currentColor"
			stroke="white"
		/>
		<rect
			x="20.5923"
			y="1"
			width="4"
			height="2"
			transform="rotate(45 20.5923 1)"
			fill="currentColor"
		/>
		<path
			d="M6.41422 18.2426L7.31079 14.8966L9.76028 17.3461L6.41422 18.2426Z"
			fill="currentColor"
		/>
	</svg>
</template>

<script>
export default {
	name: 'IconNewNote',
	props: {
		alt: {
			type: String,
			default: () => ''
		}
	}
}
</script>

<style lang="scss" scoped></style>
