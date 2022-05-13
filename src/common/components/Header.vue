<script>
	import SearchBar from '@/common/components/SearchBar.vue'

	export default {
		name: 'Header',
		components: { SearchBar },
		data () {
			return {
				titleRegular: '',
			}
		},
		props: {
			title: String,
			italic: String,
		},
		created () {
			this.titleRegular = this.title.substring(
				0,
				this.title.indexOf(this.italic)
			)
		},
		methods: {
			handleHome () {
				this.$store.commit('setGitUser', {})
				this.$store.commit('setGitText', '')
				this.$store.commit('setGitError', false)
				this.$router.push('/')
			},
		},
	}
</script>

<template>
	<header class="header">
		<h1 class="header__tile" @click="handleHome">
			{{ titleRegular }}
			<i class="header__title__italic">{{ italic }}</i>
		</h1>
		<div class="header__search-bar">
			<SearchBar />
		</div>
	</header>
</template>

<style lang="scss">
	.header {
		@include flex;
		flex-direction: column;
		margin: 2%;
		width: 96%;
		h1 {
			cursor: pointer;
			white-space: nowrap;
			i {
				font-weight: 400;
			}
		}
	}
	.header__search-bar {
		@include flex;
		justify-content: space-around;
		width: 100%;
	}
	@media (min-width: 600px) {
		.header {
			flex-direction: row;
		}
		.header__search-bar {
			flex: 1;
			width: auto;
		}
	}
</style>
