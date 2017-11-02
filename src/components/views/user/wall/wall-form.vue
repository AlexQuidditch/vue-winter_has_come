<template lang="html">
  <form @submit.prevent="addNewPost()" class="wall-form">
    <header class="wall-form-header">
      <router-link :to=" currentUserID === Author._id ? { name: 'profile' } : { name: 'user', params : { id : Author._id }} " tag="img"
                   :src=" backendLocation + '/upload/' + Author.personal.avatar"
                   :alt="Author.personal.name + ' ' + Author.personal.sename"
                   class="wall-form-header__avatar">
      </router-link>
      <div class="wall-form-header__container">
        <h6 class="wall-form-header__name">{{ Author.personal.name + ' ' + Author.personal.sename }}</h6>
        <span class="wall-form-header__time">Опубликовать сейчас</span>
      </div>
    </header>
    <textarea v-model="draftContent"
              name="wall-draft-content"
              class="wall-form__textarea"
              required>
    </textarea>
    <footer class="wall-form-footer">
      <button @click="toComment = true"
              class="wall-form-footer__button _comment waves-effect waves-light"
              type="submit">
        Опубликовать
        <icon-comments :Width="2" :Stroke="'#fff'" class="wall-form-footer__button-icon _comment"></icon-comments>
      </button>
      <button @click="addAttach()"
              type="button"
              class="wall-form-footer__button _attach waves-effect waves-dark"
              >Приложить
      </button>
    </footer>
  </form>
</template>

<script>

  import API from '@api';

  import iconComments from '@icons/comments';

  export default {
    name: "wall-form",
    components: { iconComments },
    props: {
      'User': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      draftContent: ''
    }),
    computed: {
      Author() {
        return this.$store.state.User;
      },
      currentUserID() {
        return this.$store.state.User._id;
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    methods: {
      addNewPost() {
        const newPost = {
          authorID: this.Author._id,
          time: new Date(),
          content: this.draftContent,
          attacments: [],
          likes: [],
          reposts: 0,
          comments: []
        };
        API.post( `wall/create` , newPost )
          .then( ({ body }) => {
            this.$emit( 'addPostUserToWall' , body._id );
            this.draftContent = '';
            API.post( `user/edit/${ this.User._id }` , this.User )
              .then( ({ body }) => console.log(body) )
          })
          .catch( error => console.error(error) )
      },
      addAttach() {
        console.log('Attach It!');
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../../stylesheets/partials/_mixins.scss";

  .wall-form {
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
    padding: 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__textarea {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      font-size: 14px;
      line-height: 1.25;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      white-space: pre-wrap;
      resize: vertical;
      border-radius: 3px;
      border: solid 1px #4a4a4a;
      border: solid 1px var(--charcoal-grey)
    }
  }

  .wall-form-header {
    position: relative;
    display: flex;
    &__container {
      padding-left: 10px;
    }
    &__avatar {
      size: 50px;
      object-fit: cover;
      border-radius: 50%;
      @include MDShadow-1;
    }
    &__name {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 25px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      cursor: pointer;
    }
    &__time {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 25px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
  }

  .wall-form-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      size: auto 34px;
      padding: 0 10px; margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 34px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      border: none;
      border-radius: 3px;
      transform: scale(1);
      @include MDShadow-1;
      transition:
        transform .15s ease;
      &._update {
				transform: scale(1.15);
      }
      &._comment {
        color: #fff;
        color: var(--whited);
        background-color: #009d2f;
        background-color: var(--irish-green);
      }
    }
    &__button-icon {
      width: 18px;
			transform: scale(1);
      transition:
        transform .15s ease,
        stroke .15s ease;
      &._active {
        stroke: #009d2f;
        stroke: var(--irish-green);
        fill: #009d2f;
        fill: var(--irish-green);
      }
      &._likes {
        margin-left: 5px;
      }
      &._comment {
        margin-left: 5px;
      }
    }
  }

</style>
