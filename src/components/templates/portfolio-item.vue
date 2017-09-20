<template lang="html">
	<li class="portfolio-item">
		<router-link :to="{ name: 'task', query: { id: portfolioItem.id }}" tag="div"
                 class="portfolio-item__overlay">
			<h5 class="portfolio-item__title">{{ portfolioItem.title }}</h5>
			<p class="portfolio-item__description">{{ portfolioItem.description }}</p>
		</router-link>
		<img :src=" '/static/assets/shared/' + portfolioItem.picture " :alt="portfolioItem.title"
				 class="portfolio-item__picture" />
		<span class="portfolio-item__title _bottom">{{ portfolioItem.title }}</span>
		<ul class="scores-list">
			<li class="scores-item">
				<img src="/static/assets/profile/portfolio/heart.svg" alt="Лайки"
						 class="scores-item__icon" />
				<span class="scores-item__value">{{ portfolioItem.likes }}</span>
			</li>
			<li class="scores-item">
				<img src="/static/assets/profile/portfolio/comments.svg" alt="Комментарии"
						 class="scores-item__icon" />
				<span class="scores-item__value">{{ portfolioItem.comments }}</span>
			</li>
		</ul>
	</li>
</template>

<script>

	export default {
		name: "portfolio-item",
		props: {
			'portfolioItem': {
				type: Object,
				required: true
			}
		}
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";
	@import "../../stylesheets/partials/_variables";

	.portfolio-item {
		position: relative;
		size: 290px 210px;
		min-width: 290px;
		margin: 0 10px;
		background-color: #fff;
		background-color: var(--whited);
		cursor: pointer;
		transition: box-shadow .2s ease-in-out;
		@include MDShadow-1;
		&:hover {
			@include MDShadow-2;
			.portfolio-item__overlay {
				opacity: 1;
				visibility: visible;
			}
		}
		&:first-child {
			margin-left: 3px;
		}
		&__overlay {
			overflow: hidden;
			opacity: 0;
			visibility: hidden;
			position: absolute 0 0 auto auto;
			size: 100% 176px;
			padding: 20px;
			background-color: rgba( #fff , .85 );
			transition:
			opacity .3s ease-in-out,
			visibility .3s ease-in-out;
		}
		&__title {
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
			&._bottom {
				overflow: hidden;
				position: absolute;
				left: 20px;
				bottom: 10px;
				size: 155px 1rem;
				font-weight: normal;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		&__description {
			margin: 12px 0 0 0;
			font-size: 13px;
			font-weight: 300;
			line-height: 1.46;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__picture {
			display: block;
			size: 100% 176px;
			object-fit: cover;
			object-position: top;
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
			line-height: 21px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}

</style>
