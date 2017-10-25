<template lang="html">
  <section v-if="Portfolio.length" class="portfolio">
    <icon-case :Width="1" class="portfolio__icon"></icon-case>
    <h3 class="portfolio__title">Мои работы</h3>
    <ul class="portfolio-list">
      <portfolio-item v-for="( portfolioItem , index ) in limitBy( Portfolio , 2 ) " :key="index"
                      :PortfolioItem="portfolioItem">
      </portfolio-item>
    </ul>
  </section>
</template>

<script>

  import IconCase from '@icons/case.js';

  import portfolioItem from '@templates/portfolio-item.vue';

  export default {
    name: "portfolio",
    components: { portfolioItem , IconCase },
    computed: {
      Portfolio() {
        // const storePortfolio = this.$store.state.User.portfolio;
        // const Portfolio = [];
        // storePortfolio.forEach( item => {
        //   this.$store.state.Portfolio.filter( portfolio => {
        //     if ( portfolio._id === item ) Portfolio.push( portfolio );
        //   })
        // });
        // return Portfolio;
        return this.$store.state.Portfolio;
      }
    },
    methods: {
      foldSection() {
        this.isFolded =! this.isFolded
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .portfolio {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 20px 30px 0 30px;
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
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

</style>
