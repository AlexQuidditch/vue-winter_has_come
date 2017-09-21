<template lang="html">
  <section class="wall">
    <icon-wall class="wall__icon"></icon-wall>
    <h3 class="wall__title">Стена пользователя</h3>
    <form @submit.prevent="" class="wall-form"></form>
    <ul class="wall-posts-list">
      <wall-post v-for="( wallPost , index ) in wallPosts" :key="wallPost.id"
                 :wallPost="wallPost">
      </wall-post>
    </ul>
    <wall-filter></wall-filter>
  </section>
</template>

<script>

  import iconWall from '@icons/wall.js';
  import iconHeart from '@icons/heart.js';

  import wallPost from '@templates/wall-post.vue';
  import wallFilter from '@views/profile/wall/wall-filter.vue';

  export default {
    name: "wall",
    components: { wallPost , iconWall , iconHeart , wallFilter },
    computed: {
      wallPosts() {
        return this.$store.state.Wall
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/mixins.scss";

  .wall {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    size: 100% auto;
    padding: 20px 30px;
    transition: height .4s ease;
    &._folded {
      height: 68px;
    }
    &__icon {
      width: 28px;
    }
    &__title {
      width: calc( 100% - 38px );
      margin-left: 10px;
      font-size: 18px;
      line-height: 28px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
  }

  .wall-posts-list {
    width: 710px;
    margin-top: 20px;
    padding: 0 20px 0 0;
  }

</style>
