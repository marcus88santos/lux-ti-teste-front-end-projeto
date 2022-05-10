<script></script>

<template>
	<main>
		<router-view />
	</main>
</template>

<style lang="scss">
	// @font-face {
	// 	font-family: 'RobotoMonoMedium';
	// 	font-display: auto;
	// 	src: local('RobotoMonoMedium') url('/fonts/RobotoMono-Medium.ttf');
	// }
	// @font-face {
	// 	font-family: 'RobotoMonoRegular';
	// 	font-display: auto;
	// 	src: local('RobotoMonoRegular') url('/fonts/RobotoMono-Regular.ttf');
	// }
	* {
		box-sizing: border-box;
		// font-family: 'RobotoMonoRegular', monospace;
		margin: 0;
		padding: 0;
	}
	main {
		@include flex;
		justify-content: center;
		width: 100%;
	}
</style>
