<template lang="html">
  <form @submit.prevent="sendResponse()"
        class="response-form">
    <header class="response-form-header">
      <img :src=" backendLocation + '/upload/' + Author.avatar"
           :alt="Author.name + ' ' + Author.sename"
           class="response-form-header__avatar" />
      <div class="response-form-header__container">
        <h6 class="response-form-header__name">{{ Author.name + ' ' + Author.sename }}</h6>
        <span class="response-form-header__time">Откликнуться на задание</span>
      </div>
    </header>
    <div class="response-form-content">
      <textarea v-model="feedBack"
                name="response-text"
                class="response-form-content__textarea"
                required>
      </textarea>
      <!-- <transition-group tag="ul" name="list" mode="out-in" class="attached-list">
        <li v-for="( attachedItem , index ) in attachedItems" :key="index"
            class="attached-item">
          <img :src=" backendLocation + '/upload/' + attachedItem " alt="Загруженное изображение"
               class="attached-item__picture" />
          <button @click="deleteAttached(index)" class="attached-item__remove"
                  type="button" aria-label="Удалить специализацию">
            <icon-close class="attached-item__remove-icon"></icon-close>
          </button>
        </li>
      </transition-group> -->
    </div>
    <footer class="response-form-footer">
      <button class="response-form-footer__button _comment waves-effect waves-light"
              type="submit">
        <icon-comments :Width="2" :Stroke="'#fff'" class="response-form-footer__button-icon _comment"></icon-comments>
        Опубликовать отклик
      </button>
    </footer>
  </form>
</template>

<script>

  import iconComments from '@icons/comments.js';
  import IconClose from '@icons/close.js';

  export default {
    name: "Response-Form",
    components: { iconComments , IconClose },
		props: {
      'id': {
        type: String,
        required: true
      }
    },
    data: () => ({
      feedBack: ''
    }),
    computed: {
      Author() {
        return this.$store.state.User.personal
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    methods: {
      deleteAttached(i) {
        this.attachedItems.splice( i , 1 );
      },
      sendResponse() {
        const Response = {
          authorID: this.$store.state.User._id,
          postedAgo: new Date(),
          feedBack: this.feedBack,
          caption: this.$store.state.User.personal.caption,
          isEngage: false
        };
        this.$http.post( `response/add` , Response )
          .then( ({ body }) => {
            this.feedBack = '';
            this.$emit( 'emitResponse' , body._id )
          })
          .catch( error => {
            console.error(error);
            this.$swal( 'Упс...' , 'Не удалось добавить отклик!' , 'error' )
          });
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .response-form {
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
    padding: 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
  }

  .response-form-header {
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

  .response-form-content {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &__textarea {
      width: 310px;
      padding: 10px;
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
    .attached-list {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 310px;
    }
    .attached-item {
      position: relative;
      size: 150px 120px;
      border-radius: 3px;
      &._label {
        size: 150px 120px;
        margin: 0;
        text-align: center;
        font-size: 80px;
        line-height: 110px;
        color: rgba(155, 155, 155, 0.2);
        color: var(--purpley-grey-20);
        background-color: transparent;
        cursor: pointer;
        border: solid 1px rgba(155, 155, 155, 0.2);
        border: solid 1px var(--purpley-grey-20);
        border-radius: 3px;
        transition: box-shadow .3s ease-in-out;
        &:hover {
          @include MDShadow-1;
        }
      }
      &__picture {
        size: 150px 120px;
        object-fit: contain;
        border-radius: 3px;
        @include MDShadow-1;
      }
      &__input {
        display: none;
      }
      &__remove {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -4px; right: -4px;
        padding: 0; margin: 0;
        background-color: transparent;
        border: none;
      }
      &__remove-icon {
        size: 20px;
        border-radius: 3px;
        fill: #fff;
        fill: var(--whited);
        background-color: #d0011b;
        background-color: var(--scarlet);
        @include MDShadow-1;
      }
    }
  }
  .response-form-footer {
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
        margin-right: 5px;
      }
      &._comment {
        margin-right: 5px;
      }
    }
  }

</style>
