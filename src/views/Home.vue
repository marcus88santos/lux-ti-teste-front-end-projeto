<script>
	import SearchBar from '@/common/components/SearchBar.vue'
	export default {
		name: 'Home',
		components: { SearchBar },
	}
</script>

<template>
	<div class="home">
		<h1 class="home__title">
			Github
			<i class="home__title__italic">Search</i>
		</h1>
		<SearchBar />
	</div>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');
	.home {
		@include flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}
	.home__title {
		font-family: 'Roboto Mono', monospace;
		font-size: 70px;
		text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.7);
		font-weight: 700;
	}
	.home__title__italic {
		font-weight: 400;
	}
</style>
