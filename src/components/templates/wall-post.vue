<template lang="html">
  <li class="wall-post">
    <img :src=" '/static/assets/shared/' + Author.avatar " :alt="Author.name + ' ' + Author.sename"
         class="comment-item__avatar"/>
    <p class="comment-item__content">{{ wallPost.content }}</p>
    <icon-heart @click.native="targetAction('likes')"
                :class="{ '_active' : isLiked }"
                class="wall-post__icon"
                >
    </icon-heart>
    <ul class="comments-list">
      <commtents-item v-for="commentItem in wallPost.comments" :key="commentItem.id"
          :CommentItem="commentItem">
      </commtents-item>
    </ul>
  </li>
</template>

<script>

  import iconHeart from '@icons/heart.js';
  import commtentsItem from '@templates/comment-item.vue';

  export default {
    name: "wall-post",
    components: { iconHeart , commtentsItem },
    props: {
      'wallPost': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      isLiked: false
    }),
    computed: {
      Author() {
        return this.$store.state.Stub.friends.find( item => {
          if ( item.id === this.wallPost.authorID ) return item
        })
      }
    },
    methods: {
      targetAction(action) {
        console.log( 'targetAction -' , action );
        this.isLiked =! this.isLiked;
      }
    }
  };
</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins.scss";

  .wall-post {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
		&__avatar {
			size: 50px;
			object-fit: cover;
			border-radius: 50%;
			@include MDShadow-1;
		}
    &__content {
      white-space: pre-wrap;
    }
    &__icon {
      width: 28px;
      transition: stroke .15s ease;
      &._active {
        stroke: #009d2f;
        stroke: var(--irish-green);
        fill: #009d2f;
        fill: var(--irish-green);
      }
    }
  }

</style>
