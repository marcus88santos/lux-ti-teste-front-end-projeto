<script>
	import { AxiosInstance } from '@/services'
	export default {
		name: 'SearchBar',
		data () {
			return {
				gitSearch: this.$store.state.gitSearch,
			}
		},
		methods: {
			handleSearch () {
				this.$store.dispatch('searchUser', this.gitSearch)
			},
		},
	}
</script>

<template>
	<div class="search-bar">
		<input
			type="text"
			class="search-bar__text"
			:placeholder="'Pesquisar um usuário...'"
			v-model="gitSearch"
		/>
		<button class="search-bar__btn" @click="handleSearch">
			<i class="pi pi-search"></i>
		</button>
	</div>
</template>

<style lang="scss">
	$height: 50px;

	.search-bar {
		@include flex;
		justify-content: center;
		width: 50%;
	}
	.search-bar__text {
		border: 2.5px solid black;
		flex: 1;
		font-size: 1.1em;
		height: $height;
		outline: unset;
		padding-left: 10px;
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
		width: 90px;
	}
</style>
