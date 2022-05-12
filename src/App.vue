<script></script>

<template>
	<main>
		<router-view />
	</main>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');
	* {
		box-sizing: border-box;
		font-family: 'Roboto Mono', monospace;
		margin: 0;
		padding: 0;
	}
	main {
		@include flex;
		justify-content: center;
		width: 100%;
	}
</style>
