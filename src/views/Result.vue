<script>
	import Header from '@/common/components/Header.vue'

	export default {
		name: 'Result',
		components: { Header },
		data () {
			return {
				infos: [
					'company',
					'location',
					'starred',
					'public_repos',
					'followers',
				],
			}
		},
		methods: {
			favoritos () {
				this.$router.push('/favoritos')
			},
		},
	}
</script>

<template>
	<div class="result">
		<Header class="result__header" title="Github Search" italic="Search" />
		<div class="result__content">
			<div class="result__content__user">
				<div class="result__content__userInfo">
					<img :src="this.$store.state.gitUser.avatar_url" alt="avatar" />
					<h2>{{ this.$store.state.gitUser.name }}</h2>
					<p class="result__content__userInfo_login">
						{{ this.$store.state.gitUser.login }}
					</p>
					<ul>
						<li v-for="(info, index) in infos" :key="index">
							<img :src="`/src/assets/images/${info}.png`" :alt="info" />
							<p>{{ this.$store.state.gitUser[info] }}</p>
						</li>
					</ul>
				</div>
				<div class="result__content__userRepository">repos</div>
			</div>
			<div class="result__content__favorite" @click="favoritos">
				<i class="pi pi-star"></i>
				<span>Favoritos</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.result {
		@include flex;
		flex-direction: column;
		width: 100%;
	}
	.result__content {
		@include flex;
		flex-direction: column-reverse;
		margin-inline: 2%;
		width: 96%;
	}
	.result__content__user {
		@include flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
	}
	.result__content__userInfo {
		@include flex;
		flex-direction: column;
		margin-bottom: 1em;
		img {
			width: 300px;
		}
		h2 {
			margin-top: 1%;
			text-align: left;
			font-weight: 400;
			width: 100%;
		}
		ul {
			width: 100%;
		}
		li {
			@include flex;
			margin-bottom: 0.5em;
			width: 100%;
			img,
			i {
				@include flex;
				font-weight: bolder;
				justify-content: center;
				margin-right: 0.5em;
				width: 20px;
			}
			p {
				@include flex;
				color: gray;
				flex: 1;
			}
		}
	}
	.result__content__userInfo_login {
		color: gray;
		font-weight: 400;
		margin-top: 1%;
		margin-bottom: 2.5em;
		text-align: left;
		width: 100%;
	}
	.result__content__userRepository {
		@include flex;
		flex: 1;
		padding: 5%;
		width: 100%;
	}
	.result__content__favorite {
		@include flex;
		cursor: pointer;
		font-size: 20px;
		margin-bottom: 1em;
		margin-top: 0.5em;
		i {
			color: yellow;
			margin-right: 0.5em;
		}
	}
	@media (min-width: 600px) {
		.result__content {
			flex-direction: column-reverse;
		}
		.result__content__user {
			align-items: flex-start;
			flex-direction: row;
			width: 100%;
		}
		.result__content__userInfo {
			width: 250px;
			img {
				width: 250px;
			}
		}
		.result__content__userRepository {
			padding: 0 1em 0 3em;
			width: unset;
		}
	}
	@media (min-width: 900px) {
		.result__content {
			flex-direction: row;
		}
		.result__content__user {
			width: unset;
		}
		.result__content__favorite {
			align-self: flex-start;
			margin: 0;
		}
	}
</style>
