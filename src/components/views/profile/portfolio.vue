<template lang="html">
  <section :class="{ '_folded' : foldedSection }" class="portfolio">
    <icon-case :Width="1" class="portfolio__icon"></icon-case>
    <h3 class="portfolio__title">{{ Portfolio.length ? 'Мои работы' : 'У Вас ещё нет работ' }}</h3>
    <button @click="foldSection()"
            v-if="Portfolio.length"
            class="portfolio__fold-button waves-effect waves-dark"
            type="button" name="fold-portfolio"
      >{{ isFolded ? 'Развернуть' : 'Свернуть' }}
    </button>
    <transition-group tag="ul" name="list" mode="out-in" class="portfolio-list">
      <portfolio-item v-for="( portfolioItem , index ) in Portfolio" :key="index"
                      :PortfolioItem="portfolioItem">
      </portfolio-item>
    </transition-group>
  </section>
</template>

<script>

  import IconCase from '@icons/case.js';

  import portfolioItem from '@templates/portfolio-item.vue';

  export default {
    name: "portfolio",
    components: { portfolioItem , IconCase },
    props: {
      'Portfolio': {
        type: Array,
        required: true,
        default() {
          return [];
        }
      }
    },
    data: () => ({
      isFolded : false,
      flickityOptions: {
        pageDots: false,
        contain: true,
        groupCells: true,
        groupCells: 2,
        draggable: false
      }
    }),
    computed: {
      // Portfolio() {
      //   return this.$store.state.User.portfolio;
      // },
      foldedSection() {
        if ( !this.Portfolio.length ) {
          return true;
        } else {
          if ( this.isFolded ) {
            return true;
          } else {
            return false;
          }
        }
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
    overflow: hidden;
    width: 100%;
    margin: 20px 0 0 0;
    padding: 0 10px;
    .flickity-viewport {
      overflow: visible;
      width: 100%;
		}
  }

</style>
