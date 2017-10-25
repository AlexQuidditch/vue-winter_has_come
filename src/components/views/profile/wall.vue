<template lang="html">
  <section class="wall">
    <icon-wall class="wall__icon"></icon-wall>
    <h3 class="wall__title">Стена пользователя</h3>
    <div class="wall__container">
      <wall-form></wall-form>
      <transition-group name="fade" tag="ul" mode="out-in"
                        v-if="wallPosts.length"
                        class="wall-posts-list">
        <wall-post v-for="wallPost in wallPosts" :key="wallPost._id"
                   :WallPost="wallPost">
        </wall-post>
      </transition-group>
    </div>
  </section>
</template>

<script>

  import iconWall from '@icons/wall.js';
  import iconHeart from '@icons/heart.js';

  import wallForm from './wall/wall-form.vue';
  import wallPost from '@templates/wall-post.vue';

  export default {
    name: "wall",
    components: { wallForm , wallPost , iconWall , iconHeart },
    computed: {
      wallPosts() {
        return this.$store.state.Wall.posts
      }
    },
    created() {
      this.$store.dispatch( 'getPostByWallID' , this.$store.state.User.wallID );
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/mixins.scss";

  .wall {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 100%;
    size: 640px auto;
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
    &__container {
      width: 100%;
    }
  }

  .wall-posts-list {
    width: 600px;
    margin-top: 20px;
    padding: 0 20px 0 0;
  }

</style>
