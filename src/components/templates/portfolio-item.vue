<template lang="html">
	<li class="portfolio-item">
		<router-link :to="{ name: 'task', params: { id: PortfolioItem._id }}" tag="div"
                 class="portfolio-item__overlay">
			<h5 class="portfolio-item__title">{{ PortfolioItem.title }}</h5>
			<p class="portfolio-item__description">{{ PortfolioItem.description }}</p>
		</router-link>
		<img :src=" '/static/assets/shared/' + PortfolioItem.picture " :alt="PortfolioItem.title"
				 class="portfolio-item__picture" />
		<span class="portfolio-item__title _bottom">{{ PortfolioItem.title }}</span>
		<ul class="scores-list">
			<li class="scores-item">
        <icon-heart @click.native="likeIt()"
                    :class="{ '_active' : isLiked , '_update' : hasLiked }"
                    class="scores-item__icon">
        </icon-heart>
				<span class="scores-item__value">{{ PortfolioItem.likes }}</span>
			</li>
			<li class="scores-item">
				<img src="/static/assets/profile/portfolio/comments.svg" alt="Комментарии"
						 class="scores-item__icon" />
				<span class="scores-item__value">{{ PortfolioItem.comments }}</span>
			</li>
		</ul>
	</li>
</template>

<script>

  import iconHeart from '@icons/heart.js';

	export default {
		name: "Portfolio-Item",
    components: { iconHeart },
		props: {
			'PortfolioItem': {
				type: Object,
				required: true
			}
		},
    data: () => ({
      isLiked: false,
      hasLiked: false
    }),
    computed: {
      backendLocation() {
        return this.$store.state.General;
      }
    },
    watch: {
      isLiked() {
  			this.hasLiked = true;
  			setTimeout( () => this.hasLiked = false , 250 )
      }
    },
    methods: {
      likeIt() {
        this.isLiked =! this.isLiked;
        this.$store.dispatch( 'likePortfolioItem' , [ this.PortfolioItem._id , this.isLiked ? 1 : -1 ] );
      }
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";
	@import "../../stylesheets/partials/_variables";

	.portfolio-item {
		position: relative;
		size: 280px 210px;
		margin-bottom: 20px;
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
      transform: scale(1);
      transition:
        transform .15s ease;
      &._update {
				transform: scale(1.15);
      }
      &._active {
        stroke: #009d2f;
        stroke: var(--irish-green);
        fill: #009d2f;
        fill: var(--irish-green);
      }
		}
		&__value {
			font-size: 12px;
			line-height: 21px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}

</style>
