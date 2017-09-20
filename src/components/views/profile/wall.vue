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
    data: () => ({
      wallPosts: [
        {
          id: 0,
          authorID: 3,
          time: "2017-09-20T20:32:25.884Z",
          content: 'wdqwd\nqwdqwd\nqwdqwd\n\nwqd',
          attacments: '',
          likes: 12,
          reposts: 1,
          comments: [
            {
              id: 1,
              authorID: 1,
              time: "2017-09-20T20:32:25.884Z",
              content: '',
              attacments: '',
              likes: 12
            }
          ]
        },
        {
          id: 1,
          authorID: 1,
          time: "2017-09-20T20:32:25.884Z",
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga minima sapiente, odio distinctio maiores, illum laboriosam ipsa nisi voluptatibus a porro beatae praesentium ipsam. Quae rem explicabo unde ex!',
          attacments: '',
          likes: 12,
          reposts: 1,
          comments: [
            {
              id: 2,
              authorID: 1,
              time: "2017-09-20T20:33:25.884Z",
              content: '',
              attacments: '',
              likes: 12
            },
            {
              id: 5,
              authorID: 2,
              time: "2017-09-20T20:39:25.884Z",
              content: '',
              attacments: '',
              likes: 12
            }
          ]
        },
        {
          id: 2,
          authorID: 1,
          time: "2017-09-20T20:32:25.884Z",
          content: '',
          attacments: '',
          likes: 12,
          reposts: 1,
          comments: [
            {
              id: 3,
              authorID: 1,
              time: "2017-09-20T20:32:25.884Z",
              content: '',
              attacments: '',
              likes: 12
            }
          ]
        },
        {
          id: 3,
          authorID: 1,
          time: "2017-09-20T20:32:25.884Z",
          content: '',
          attacments: '',
          likes: 12,
          reposts: 1,
          comments: [
            {
              id: 1,
              authorID: 1,
              time: "2017-09-20T20:32:25.884Z",
              content: '',
              attacments: '',
              likes: 12
            }
          ]
        }
      ]
    })
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
