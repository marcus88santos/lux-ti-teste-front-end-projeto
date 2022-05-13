<script>
	import SearchBar from '@/common/components/SearchBar.vue'
	export default {
		name: 'Home',
		components: { SearchBar },
		data () {
			return {
				gitSearch: this.$store.state.gitSearch.text,
			}
		},
	}
</script>

<template>
	<div class="home">
		<h1 class="home__title">
			Github
			<i class="home__title__italic">Search</i>
		</h1>
		<SearchBar />
		<p v-if="this.$store.state.gitSearch.error" class="home__error">
			Usuário não encontrado!
		</p>
	</div>
</template>

<style lang="scss">
	.home {
		@include flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}
	.home__title {
		font-size: 45px;
		text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.7);
		font-weight: 700;
		margin-bottom: 0.5em;
	}
	.home__title__italic {
		font-weight: 400;
	}
	.home__error {
		color: red;
		margin-top: 1em;
		text-align: center;
		width: 230px;
	}
	@media (min-width: 600px) {
		.home__title {
			font-size: 70px;
		}
	}
</style>
