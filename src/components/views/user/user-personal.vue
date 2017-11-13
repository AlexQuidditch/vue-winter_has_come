<template lang="html">
  <section class="personal">
    <img :src=" backendLocation + '/upload/' + User.personal.avatar "
         :alt="User.personal.name + ' ' + User.personal.sename"
         class="personal-avatar" />

    <div class="personal-info">
      <h3 class="personal-info__name">{{ User.personal.name + ' ' + User.personal.sename }}</h3>
      <div class="personal-more">
        <p class="personal-more__item">{{ User.information.specialization }}</p>
        <p class="personal-more__item">Последний визит: <span>{{ User.information.lastVisit }}</span></p>
        <p class="personal-more__item">Статус: <span>{{ User.information.status | placeholder('Text if msg is missing') }}</span></p>
      </div>
      <div class="personal-more">
        <p class="personal-more__item">{{ User.information.town }}</p>
        <p class="personal-more__item _education">{{ User.information.education.place }}, {{ User.information.education.faculty }}</p>
      </div>
      <p class="personal-info__about">{{ User.information.about }}</p>
      <div class="personal-bottom">
        <div class="personal-bottom__column">
          <button class="personal-bottom__button _contact-me">
            <img src="/static/assets/agent/personal/contacts.svg" alt="Написать письмо"
                 class="personal-bottom__button-icon" />
            <span>Написать</span>
          </button>
          <button @click="toFriendsAction($event)" class="personal-bottom__button _contact-me _add-to-friends">
            <template v-if="isFriendsRequested">
              <icon-check-circle class="personal-bottom__button-icon"></icon-check-circle>
              <span>Заявка отправлена</span>
            </template>
            <template v-else-if="isFriendsAccepted">
              <icon-user class="personal-bottom__button-icon"></icon-user>
              <span>У Вас в друзьях</span>
            </template>
            <template v-else>
              <icon-plus class="personal-bottom__button-icon"></icon-plus>
              <span>Добавить в друзья</span>
            </template>
          </button>
        </div>
        <div class="personal-bottom__column">
          <button class="personal-bottom__button">
            <img src="/static/assets/agent/personal/minus-circle-bold.svg" alt=""
                 class="personal-bottom__button-icon" />
          </button>
          <button class="personal-bottom__button" aria-label="Заблокировать агента">
            <img src="/static/assets/agent/personal/slash-bold.svg" alt="Заблокировать агента"
                 class="personal-bottom__button-icon"/>
          </button>
        </div>
      </div>
    </div>

    <user-ratings-block :User="User" :Ratings="User.ratings" class="ratings-block"></user-ratings-block>

  </section>
</template>

<script>

  import UserRatingsBlock from './personal/user-ratings-block.vue';
  import IconPlus from '@icons/plus.js';
  import IconUser from '@icons/user.js';
  import IconCheckCircle from '@icons/check-circle.js';

  export default {
    name: "User-Personal",
    components: { UserRatingsBlock , IconPlus , IconUser , IconCheckCircle },
    props: {
      'User': {
        type: Object,
        required: true
      }
    },
    computed: {
      backendLocation() {
        return this.$store.state.General;
      },
      currentUserID() {
        return this.$store.state.User._id;
      },
      isFriendsAccepted() {
        return this.User.friends.accepted.includes( this.currentUserID )
      },
      isFriendsRequested() {
        return this.User.friends.requests.includes( this.currentUserID )
      }
    },
    methods: {
      toFriendsAction( e ) {
        if ( this.isFriendsRequested ) {
          this.$swal( 'Заявка отправлена.' , 'Ожидается действие пользователя' , 'info' );
        } else if ( this.isFriendsAccepted ) {
          this.$swal({
            title: 'Удалить из друзей?',
            text: "Вы всегда сможете добавить его.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#009d2f',
            cancelButtonColor: '#4a4a4a',
            confirmButtonText: 'Да',
            cancelButtonText: 'Нет'
          })
          .then( () => {
            this.$emit( 'toFriendsAction' , 'remove' );
          }, dismiss => {
            if ( dismiss === 'cancel' ) {
              this.$swal( 'Отменено!' , 'Пользователь оставлен в друзьях' , 'info' )
            }
          });
        } else {
          this.$swal({
            title: 'Добавить в друзья?',
            text: "Пользователь должен будет подтвердить заявку.",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#009d2f',
            cancelButtonColor: '#4a4a4a',
            confirmButtonText: 'Да',
            cancelButtonText: 'Нет'
          })
          .then( () => {
            this.$emit( 'toFriendsAction' , 'add' );
          }, dismiss => {
            if ( dismiss === 'cancel' ) {
              this.$swal( 'Отменено!' , 'Заявка не была отправлена' , 'info' )
            }
          });
        }
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins";

  .personal {
    position: relative;
    display: flex;
    align-items: flex-start;
    size: 100% 230px;
    padding: 30px;
  }

  .personal-avatar {
    size: 150px 170px;
    object-fit: cover;
    border-radius: 3px;
    @include MDShadow-1( #4a4a4a );
  }

  .personal-info {
    display: flex;
    flex-flow: row wrap;
    width: 475px;
    padding: 0 20px;
    &__name,
    &__about {
      width: 100%;
      margin: 0;
    }
    &__name {
      font-size: 24px;
      line-height: 32px;
      font-weight: 300;
      color: #009d2f;
      color: var(--irish-green);
    }
    &__about {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.46;
      text-align: left;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__about-button {
      position: absolute;
      bottom: 35px; left: 200px;
      height: 35px;
      padding: 0 10px;
      font-size: 12px;
      line-height: 33px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      background-color: #fff;
      background-color: var(--whited);
      border: solid 1px rgba(155, 155, 155, 0.2);
      border: solid 1px var(--purpley-grey-20);
      border-radius: 3px;
    }
  }

  .personal-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    &__column {
      display: flex;
    }
    &__button {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      size: 35px;
      margin-left: 5px;
      border-radius: 3px;
      background-color: #ffffff;
      background-color: var(--whited);
      border: solid 1px rgba(155, 155, 155, 0.2);
      border: solid 1px var(--purpley-grey-20);
      transition: box-shadow .3s ease-in-out;
      &:hover,
      &:focus {
        @include MDShadow-1;
      }
      &._contact-me {
        justify-content: space-between;
        width: auto;
        padding: 0 10px;
        margin: 0;
        font-size: 12px;
        color: #4a4a4a;
        color: var(--charcoal-grey);
        span {
          margin-left: 5px
        }
      }
      &._add-to-friends {
        margin-left: 10px;
      }
    }
    &__button-icon {
      size: 20px;
    }
  }

  .personal-more {
    position: relative;
    margin: 8px 0;
    &:nth-child(2) {
      width: 45%;
    }
    &:nth-child(3) {
      width: 235px;
      padding-left: 20px;
      &::before {
        position: absolute 0 auto auto 0;
        content: '';
        height: 36px;
        opacity: 0.2;
        border-left: solid 2px #4b4b4b;
        border-left: solid 2px var(--purpley-grey);
      }
    }
    &__item {
      margin: 0;
      font-size: 12px;
      line-height: 18px;
      text-align: left;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      span {
        color: #4b4b4b;
        color: var(--purpley-grey);
      }
    }
  }

  .ratings-block {
    position: absolute 30px 30px auto auto
  }

</style>
