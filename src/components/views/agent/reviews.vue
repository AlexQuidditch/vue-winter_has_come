<template lang="html">
    <section class="reviews">
		<img src="/static/assets/profile/reviews/star.svg" alt="Отзывы"
				class="reviews__icon">
		<h3 class="reviews__title">Отзывы</h3>
		<ul class="reviews-list">
			<reviews-item v-for="( reviewItem , index ) in Reviews" :key="index"
				:reviewsItem="reviewItem">
			</reviews-item>
		</ul>
    </section>
</template>

<script>

	import reviewsItem from '@templates/reviews-item';

    export default {
        name: "reviews",
		components: { reviewsItem },
		computed: {
		    Reviews() {
				const storeReviews = this.$store.state.User.reviews;
				const Reviews = [];
				storeReviews.forEach( item => {
					this.$store.state.Reviews.filter( review => {
						if ( review.id === item ) Reviews.push( review );
					})
				});
				return Reviews;
		    }
		}
    };

</script>

<style lang="scss">

	.reviews {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
    	padding: 30px;
		background-color: #fff;
		background-color: var(--whited);
		&__icon {
			width: 28px;
		}
		&__title {
			margin-left: 10px;
			font-size: 18px;
			line-height: 28px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__subtitle {
			width: 100%;
			margin: 10px 0 0 0;
			font-size: 12px;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
    }

	.reviews-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 20px 0 0 0;
	}

</style>
