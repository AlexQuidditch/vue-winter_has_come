<template lang="html">
    <li class="response-item">
		<div class="response-header">
			<router-link :to="{ name: 'user', query: { id: Author.id }}" tag="img"
				:src=" '/static/assets/shared/' + Author.avatar" :alt="Author.name + ' ' + Author.sename"
				class="response-header__avatar"
				title="Открыть профиль">
			</router-link>
			<div class="response-header__container">
			   <router-link :to="{ name: 'user', query: { id: Author.id }}" tag="p"
			   		class="response-header__name">
					{{ Author.name }} {{ Author.sename }}
					<span>({{ Author.rating }})</span>
				</router-link>
			   <p class="response-header__time-ago">({{ responseItem.postedAgo }} минут назад)</p>
			</div>
		</div>
		<div class="response-main">
			<div class="response-main__column">
				<p class="response-main__feedback">{{ responseItem.feedBack }}</p>
				<div class="response-main__divider"></div>
				<p class="response-main__caption">{{ responseItem.caption }}</p>
			</div>
			<ul class="response-main__column portfolio-list">
				<router-link v-for="work in Author.works" :key="work.id"
					:to="{ name: 'task', query: { id: work.id }}" tag="li"
					class="portfolio-list__item">
					<img :src=" '/static/assets/shared/' + work.preview " :alt="work.id"
							 class="portfolio-list__item-preview" />
				</router-link>
			</ul>
		</div>
		<div class="response-footer">
			<button v-if="responseItem.isEngage" class="response-footer__button">Назначен исполнителем</button>
			<template v-else>
				<button class="response-footer__button">Назначить</button>
				<button class="response-footer__button">Отклонить</button>
			</template>
		</div>
    </li>
</template>

<script>

    export default {
        name: "response-item",
		props: {
		    'responseItem': {
		        type: Object,
		        required: true
		    }
		},
		computed: {
			Author() {
				return this.$store.state.Stub.friends.find( item => item.id === this.responseItem.authorID );
			}
		}
    };

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";

    .response-item {
    	padding: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		background-color: var(--whited);
    	@include MDShadow-1;
    }

	.response-header {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		&__avatar {
			size: 50px;
			object-fit: cover;
			cursor: pointer;
			border-radius: 3px;
			@include MDShadow-1;
		}
		&__name {
			margin: 0 0 0 10px;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
			&:hover  {
				text-decoration: underline !important;
			}
			span {
				color: #009d2f;
				color: var(--irish-green);
			}
		}
		&__time-ago {
			margin: 0 0 0 10px;
			font-size: 12px;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
		}
	}

	.response-main {
		display: flex;
		justify-content: space-between;
		&__column {
			width: 310px;
		}
		&__feedback {
			font-size: 12px;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
		}
		&__divider {
			border-bottom: solid 1px rgba(75, 75, 75, 0.5);
			border-bottom: solid 1px var(--purpley-grey-20);
		}
		&__caption {
			font-size: 12px;
			font-style: italic;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
		}
		.portfolio-list {
			display: flex;
			justify-content: space-between;
			min-width: 310px;
			width: 310px;
			&__item {
				overflow: hidden;
				size: 150px 120px;
				padding: 10px;
				background-color: #fff;
				background-color: var(--whited);
				border-radius: 3px;
				cursor: pointer;
				@include MDShadow-1;
				transition: box-shadow .3s ease-in-out;
				&:hover {
					@include MDShadow-2;
				}
			}
			&__item-preview {
				size: 100%;
				object-fit: cover;
				object-position: center;
			}
		}
	}

	.response-footer {
		&__button {
			height: 35px;
			padding: 0 10px;
			margin-right: 14px;
			font-size: 12px;
			line-height: 35px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
			background-color: #fff;
			background-color: var(--whited);
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
			border-radius: 3px;
		}
	}

</style>
