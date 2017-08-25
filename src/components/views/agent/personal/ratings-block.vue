<template lang="html">
    <div class="ratings">
		<h4 class="ratings__main-rate">{{ Ratings.mainRate }}</h4>
		<h5 class="ratings__sub-title ">баллов выплачено</h5>
		<img src="/static/assets/profile/ratings/wallet.svg" alt="баллов выплачено"
			class="ratings__wallet" />
		<ul class="ratings-list">
			<rating-item :Item="Ratings.average"></rating-item>
			<rating-item :Item="Ratings.completed"></rating-item>
			<rating-item :Item="Ratings.starred"></rating-item>
		</ul>
    </div>
</template>

<script>

	import StarRating from 'vue-star-rating';

	import ratingItem from '@templates/rating-item';

    export default {
        name: "ratings",
		components: { StarRating , ratingItem },
		computed: {
		    Ratings() {
		        return this.$store.state.Agent.ratings
		    }
		}
    };

</script>

<style lang="scss" scoped>

	@import "../../../../stylesheets/partials/_mixins";

    .ratings {
    	display: flex;
		flex-flow: column;
		align-items: center;
		size: 291px 234px;
		padding: 20px;
		border-radius: 3px;
		background-color: #ffffff;
		background-color: var(--whited);
		@include MDShadow-1( #4a4a4a );
		&__main-rate {
			width: 100%;
			text-align: center;
			font-family: 'Lato-light', Arial, sans-serif;
			font-size: 48px;
			font-weight: 300;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__sub-title {
			font-size: 12px;
			font-weight: 400;
			text-align: center;
			color: #009d2f;
			color: var(--irish-green);
		}
		&__wallet {
			position: absolute 32px 42px auto auto;
			size: 28px
		}
    }

	.ratings-list {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 100%;
		margin-top: 25px;
	}

</style>
