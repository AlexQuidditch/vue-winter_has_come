<template lang="html">
  <section :class="{ '_folded' : isFolded }" class="portfolio">
    <img src="/static/assets/profile/portfolio/case.svg" alt="Портфолио"
         class="portfolio__icon">
    <h3 class="portfolio__title">Мои работы</h3>
    <button @click="foldSection()"
            class="portfolio__fold-button waves-effect waves-dark"
            type="button" name="fold-portfolio"
      >{{ isFolded ? 'Развернуть' : 'Свернуть' }}
    </button>
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
    data: () => ({
      isFolded: false
    }),
    computed: {
      Portfolio() {
        const storePortfolio = this.$store.state.User.portfolio;
        const Portfolio = [];
        storePortfolio.forEach( item => {
          this.$store.state.Portfolio.filter( portfolio => {
            if ( portfolio._id === item ) Portfolio.push( portfolio );
          })
        });
        return Portfolio;
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
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    size: 100% 300px;
    padding: 20px 30px;
    transition: height .4s ease;
    &._folded {
      height: 68px;
    }
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
    &__fold-button {
      position: absolute;
      top: 20px; right: 30px;
      size: 100px 28px;
      margin: 0; padding: 0;
      font-family: 'Lato', Arial, sans-serif;font-size: 12px;
      font-weight: 600;
      line-height: 28px;
      background-color: #fff;
      background-color: var(--whited);
      border-radius: 3px;
      border: none;
      transition: box-shadow .3s ease-in-out;
      @include MDShadow-1;
    }
  }

  .portfolio-list {
    overflow-x: auto;
    overflow-y: visible;
    display: flex;
    justify-content: space-between;
    height: 235px;
    margin: 20px 0 0 0;
  }

</style>
