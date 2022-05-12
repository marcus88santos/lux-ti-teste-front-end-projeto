<script>
	export default {
		name: 'SearchBar',
		data () {
			return {
				gitSearch: this.$store.state.gitSearch.text,
				gitError: this.$store.state.gitSearch.error,
			}
		},
		methods: {
			handleSearch () {
				if (this.gitSearch.length > 0) {
					this.$store.dispatch('searchUser', this.gitSearch)
					this.$router.push('/result')
					this.gitSearch = ''
				}
			},
		},
		computed: {
			placeholder () {
				return this.$store.state.gitSearch.text.length === 0
					? 'Pesquisar...'
					: this.$store.state.gitSearch.text
			},
		},
	}
</script>

<template>
	<div class="search-bar">
		<input
			type="text"
			class="search-bar__input"
			:placeholder="placeholder"
			v-model="gitSearch"
			@keypress.enter="handleSearch"
		/>
		<button class="search-bar__btn" @click="handleSearch">
			<i class="pi pi-search"></i>
		</button>
	</div>
</template>

<style lang="scss">
	$height: 40px;

	.search-bar {
		@include flex;
		justify-content: center;
		width: 85%;
	}
	.search-bar__input {
		border: 2.5px solid black;
		flex: 1;
		font-size: 1em;
		height: $height;
		min-width: 0;
		outline: unset;
		padding-inline: 10px;
		&:focus {
			border: 4px solid rgba(0, 0, 0, 0.85);
		}
	}
	.search-bar__btn {
		@include flex;
		background-color: black;
		border: unset;
		color: white;
		cursor: pointer;
		font-size: 25px;
		height: $height;
		justify-content: center;
		min-width: 90px;
	}
	@media (min-width: 600px) {
		.search-bar {
			width: 75%;
		}
		.search-bar__input {
			font-size: 1.1em;
		}
		.search-bar__input,
		.search-bar__btn {
			height: 50px;
		}
	}
	@media (min-width: 1200px) {
		.search-bar {
			width: 50%;
		}
	}
</style>
