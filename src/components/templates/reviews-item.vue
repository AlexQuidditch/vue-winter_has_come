<template lang="html">
	<router-link to="/" tag="li"
							 class="reviews-item">
		<div class="reviews-item-header">
			<img :src=" '/static/assets/shared/' + Author.avatar " :alt="Author.name + ' ' + Author.sename"
					 class="reviews-item__avatar" />
			<h5 class="reviews-item__title">{{ Author.name + ' ' + Author.sename }}</h5>
			<img v-if="reviewsItem.like"
					 src="/static/assets/profile/reviews/thumbs-up.svg" alt="Лайк"
					 class="reviews-item__like" />
			<img v-else
					 src="/static/assets/profile/reviews/thumbs-down.svg" alt="Дизлайк"
					 class="reviews-item__deslike" />
		</div>
		<p class="reviews-item__text">{{ reviewsItem.text }}</p>
	</router-link>
</template>

<script>

	export default {
		name: "reviews-item",
		props: {
			'reviewsItem': {
				type: Object,
				required: true
			}
		},
    computed: {
      Author() {
				return this.$store.state.Stub.friends.find( item => {
					if ( item._id === this.reviewsItem.authorID ) return item
				})
      }
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";
	@import "../../stylesheets/partials/_variables";

	.reviews-item {
		overflow: hidden;
		size: 290px 210px;
		padding: 20px;
		margin: 0 10px;
		background-color: #ffffff;
		background-color: var(--whited);
		cursor: pointer;
		transition: box-shadow .2s ease-in-out;
		@include MDShadow-1;
		&:hover {
			@include MDShadow-2;
		}
		&:first-child {
			margin-left: 3px;
		}
		.reviews-item-header {
			position: relative;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
		}
		&__avatar {
			size: 50px;
			object-fit: cover;
			border-radius: 50%;
			@include MDShadow-1;
		}
		&__title {
			margin-left: 10px;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__like,
		&__deslike {
			position: absolute;
			top: 0; right: 0;
			size: 20px;
			object-fit: contain;
		}
		&__text {
			font-size: 13px;
			font-weight: 300;
			line-height: 1.46;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}
	.scores-list {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 35px;
		padding: 0 5px;
	}
	.scores-item {
		padding: 0 7.5px;
		&__icon {
			display: inline-block;
			vertical-align: middle;
			size: 18px;
		}
		&__value {
			font-size: 12px;
			line-height: 21;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}

</style>
