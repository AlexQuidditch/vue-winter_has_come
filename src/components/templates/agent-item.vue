<template lang="html">
	<li class="agent-item">
		<div class="information">
			<div class="information-avatar">
				<router-link :to="{ name: 'agent', params: { id: agentItem._id }}" tag="img"
										 :src=" backendLocation + '/upload/' + agentItem.avatar"
										 :alt="agentItem.name + ' ' + agentItem.sename"
										 class="information-avatar__picture">
				</router-link>
				<span v-if="agentItem.isOnline" class="information-avatar__status" title="Пользователь в сети">- Онлайн -</span>
			</div>
			<div class="information-detail">
				<router-link :to="{ name: 'agent', params: { id: agentItem._id }}" tag="h5"
					 					 class="information-detail__name"
					>{{ agentItem.name + ' ' + agentItem.sename }}
				</router-link>
				<p class="information-detail__company"> Агент {{ agentItem.company }}</p>
				<p class="information-detail__description"> {{ agentItem.information.about }} </p>
				<div class="information-bottom">
					<div class="information-bottom__column">
						<button class="information-bottom__button _contact-me">
							<img src="/static/assets/agent/personal/contacts.svg" alt="Написать письмо" />
							<span>Написать</span>
						</button>
					</div>
					<div class="information-bottom__column">
						<button class="information-bottom__button" aria-label="Удалить из друзей">
							<img src="/static/assets/agent/personal/minus-circle-bold.svg" alt="Удалить из друзей" />
						</button>
						<button class="information-bottom__button" aria-label="Заблокировать пользователя">
							<img src="/static/assets/agent/personal/slash-bold.svg" alt="Заблокировать пользователя" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<ul class="portfolio-list">
			<router-link v-for="work in agentItem.works" :key="work._id"
          				 :to="{ name: 'task', params: { id: work._id }}" tag="li"
          				 class="portfolio-list__item">
				<img :src=" backendLocation + '/upload/' + work.preview " :alt="work._id"
						 class="portfolio-list__item-preview" />
			</router-link>
		</ul>
	</li>
</template>

<script>

	export default {
		name: "agent-item",
		props: {
			'agentItem': {
				type: Object,
				required: true
			}
		},
    computed: {
      backendLocation() {
        return this.$store.state.General;
      }
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";

	.agent-item {
		display: flex;
		justify-content: space-between;
		padding-top: 30px;
		padding-bottom: 20px;
		border-bottom: solid 1px rgba( #4b4b4b , .4 );
		.information {
			display: flex;
		}
		.information-avatar {
			width: 100px;
			&__picture {
				size: 100px;
				object-fit: cover;
				object-position: center;
				cursor: pointer;
				border-radius: 50%;
				@include MDShadow-1;
				transition: box-shadow .3s ease-in-out;
				&:hover {
					@include MDShadow-2;
				}
			}
			&__status {
				display: block;
				margin-top: 15px;
				text-align: center;
				font-size: 12px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
		}
		.information-detail {
			min-width: 250px;
			width: 250px;
			margin-left: 20px;
			&__name {
				margin: 0;
				font-size: 18px;
				font-weight: 600;
				color: #4a4a4a;
				color: var(--charcoal-grey);
				cursor: pointer;
				&:hover {
					text-decoration: underline !important;
				}
			}
			&__company {
				margin: 5px 0 0 0;
				font-size: 12px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
			&__specialization {
				margin: 5px 0 0 0;
				font-size: 12px;
				color: #4a4a4a;
				color: var(--charcoal-grey);
			}
			&__description {
				margin: 5px 0 0 0;
				font-size: 12px;
				line-height: 1.5;
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
		.information-bottom {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: 10px;
			&__column {
				display: flex;
			}
			&__button {
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				align-items: center;
				size: 35px;
				margin-left: 5px;
				border-radius: 3px;
				background-color: #fff;
				background-color: var(--whited);
				border: solid 1px rgba(155, 155, 155, 0.2);
				border: solid 1px var(--purpley-grey-20);
				transition: box-shadow .3s ease-in-out;
				&:hover,
				&:focus {
					@include MDShadow-1;
				}
				img {
					size: 20px;
				}
				&._contact-me {
					justify-content: space-between;
					width: auto;
					padding: 0 10px;
					margin: 0;
					font-size: 12px;
					color: #4a4a4a;
					color: var(--charcoal-grey);
					span {
						margin-left: 5px
					}
				}
			}
		}
		.portfolio-list {
			display: flex;
			justify-content: space-between;
			min-width: 300px;
			size: 300px auto;
			&__item {
				overflow: hidden;
				size: 145px 120px;
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



</style>
