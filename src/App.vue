<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import '~@/assets/theme.scss';

html,
body {
	padding: 0;
	margin: 0;
}

* {
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	font-size: 16pt;

	background-color: $background;
}
</style>
