<template lang="html">
  <li class="comment-item">
    {{ CommentItem }}
    <img :src=" '/static/assets/shared/' + Author.avatar " alt=""
         class="comment-item__avatar"/>
    <icon-heart @click.native="targetAction('likes')"
                :class="{ '_active' : isLiked }"
                class="comment-item__icon"
                >
    </icon-heart>
  </li>
</template>

<script>

  import iconHeart from '@icons/heart.js';

  export default {
    name: "comment-item",
    components: { iconHeart },
    props: {
      'CommentItem': {
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
          if ( item.id === this.CommentItem.authorID ) return item
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

  .comment-item {
    margin-bottom: 20px;
    padding: 20px;
		border-top: solid 1px rgba( #9b9b9b , .3 );
		&__avatar {
			size: 50px;
			object-fit: cover;
			border-radius: 50%;
			@include MDShadow-1;
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
