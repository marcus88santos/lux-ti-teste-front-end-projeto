<script>
	import Header from '@/common/components/Header.vue'

	export default {
		name: 'Favoritos',
		components: {
			Header,
		},
		data () {
			return {}
		},
		methods: {
			handleFavorite (repo) {
				this.$store.commit('setFavorite', repo)
			},
		},
	}
</script>

<template>
	<div class="favoritos">
		<Header title="Repositórios Favoritos" italic="" />
		<div class="favoritos__content">
			<div
				class="result__content__userRepository favoritos__content__userRepository"
			>
				<p v-if="this.$store.state.gitSearch.error" class="result__error">
					Usuário não encontrado!
				</p>
				<ul v-if="this.$store.state.gitFavorite.length > 0">
					<li
						v-for="(item, index) in this.$store.state.gitFavorite"
						:key="index"
						@click="handleFavorite(item)"
					>
						<div class="result__content__userRepository_repo">
							<h2>{{ item.name }}</h2>
							<p>{{ item.description }}</p>
							<div class="result__content__userRepository_repoStar">
								<i class="pi pi-star"></i>
								<p>{{ item['stargazers_count'] }}</p>
							</div>
						</div>
					</li>
				</ul>
				<p v-else>Favorite algum repositório...</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.favoritos {
		@include flex;
		flex-direction: column;
		width: 100%;
	}
	.favoritos__content {
		@include flex;
		flex-direction: column-reverse;
		margin-inline: 2%;
		width: 96%;
	}
	.favoritos__content__userRepository {
		flex: 1;
		flex-direction: column;
		justify-content: space-around;
		padding-inline: 0 !important;
		width: 100% !important;
		ul,
		li {
			flex: 1;
			width: 100%;
		}
	}
</style>
