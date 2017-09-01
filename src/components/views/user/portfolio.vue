<template lang="html">
    <section class="portfolio">
		<img src="/static/assets/profile/portfolio/case.svg" alt="Портфолио"
				class="portfolio__icon">
		<h3 class="portfolio__title">Мои работы</h3>
		<ul class="portfolio-list">
			<portfolio-item v-for="( portfolioItem , index ) in Portfolio" :key="index"
				:portfolioItem="portfolioItem">
			</portfolio-item>
		</ul>
    </section>
</template>

<script>

	import portfolioItem from '@templates/portfolio-item';

    export default {
        name: "portfolio",
		components: { portfolioItem },
		computed: {
		    Portfolio() {
				const storePortfolio = this.$store.state.User.portfolio;
				const Portfolio = [];
				storePortfolio.forEach( item => {
					this.$store.state.Portfolio.filter( portfolio => {
						if ( portfolio.id === item ) Portfolio.push( portfolio );
					})
				});
				return Portfolio;
		    }
		}
    }

</script>

<style lang="scss">

    .portfolio {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
    	padding: 30px;
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

	.portfolio-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 20px 0 0 0;
	}

</style>
