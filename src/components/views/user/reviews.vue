<template lang="html">
  <section :class="{ '_folded' : isFolded }" class="reviews">
    <img src="/static/assets/profile/reviews/star.svg" alt="Отзывы"
         class="reviews__icon">
    <h3 class="reviews__title">Отзывы</h3>
    <button @click="foldSection()"
            class="reviews__fold-button waves-effect waves-dark"
            type="button" name="fold-portfolio"
      >{{ isFolded ? 'Развернуть' : 'Свернуть' }}
    </button>
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
    props: {
      'User': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      isFolded: false
    }),
    computed: {
      Reviews() {
        const storeReviews = this.$store.state.User.reviews;
        const Reviews = [];
        storeReviews.forEach( item => {
          this.$store.state.Reviews.filter( review => {
            if ( review._id === item ) Reviews.push( review );
          })
        });
        return Reviews;
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

  .reviews {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    size: 100% 300px;
    padding: 20px 30px;
    background-color: #fff;
    background-color: var(--whited);
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

  .reviews-list {
    overflow-x: auto;
    overflow-y: visible;
    display: flex;
    justify-content: space-between;
    size: 100% 225px;
    margin: 20px 0 0 0;
  }

</style>
