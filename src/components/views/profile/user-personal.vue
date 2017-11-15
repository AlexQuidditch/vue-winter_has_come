<template lang="html">
  <section class="personal">
    <img :src=" backendLocation + '/upload/' + Personal.avatar "
         :alt="Personal.name + ' ' + Personal.sename"
         class="personal-avatar" />

    <div class="personal-info">
      <h3 class="personal-info__name">{{ Personal.name + ' ' + Personal.sename }}</h3>
      <div class="personal-more">
        <p class="personal-more__item">{{ Information.specialization }}</p>
        <p class="personal-more__item">Последний визит: <span>{{ Information.lastVisit }}</span></p>
        <p class="personal-more__item _status">Статус: <span @click="updateStatus()">{{ Information.status | placeholder('не указан') }}</span></p>
      </div>
      <div class="personal-more">
        <p class="personal-more__item">{{ Information.town }}</p>
        <p class="personal-more__item _education">{{ Information.education.place }}, {{ Information.education.faculty }}</p>
      </div>
      <transition name="fade" mode="out-in">
        <p v-if="Information.about.length" class="personal-info__about">{{ Information.about }}</p>
        <router-link :to="{ name: 'settings' , query: { section : 'about' } }" v-else class="personal-info__about-button">Добавить информацию о себе</router-link>
      </transition>
    </div>

    <user-ratings-block class="ratings-block"></user-ratings-block>

  </section>
</template>

<script>

  import UserRatingsBlock from './personal/user-ratings-block.vue';

  export default {
    name: "User-Personal",
    components: { UserRatingsBlock },
    computed: {
      User() {
        return this.$store.state.User;
      },
      Personal() {
        return this.$store.state.User.personal
      },
      Information() {
        return this.$store.state.User.information
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    methods: {
      updateStatus() {
        this.$swal({
          title: 'Выберите статус',
          input: 'select',
          inputOptions: {
            'Свободен': 'Свободен',
            'Занят': 'Занят',
            'Не беспокоить': 'Не беспокоить',
            'Йа креветко': 'Йа креветко'
          },
          inputPlaceholder: 'Доступные статусы',
          showCancelButton: true,
          cancelButtonText: 'Отмена'
        })
        .then( result => {
          this.$store.dispatch( 'updateStatus' , result )
            .then( success => {
              this.$store.dispatch( 'changeUser' , [ this.User._id , this.User ] )
                .then( response => {
                  this.$swal({
                    type: 'success',
                    html: `Ваш новый статус: ${ result }`
                  });
                })
            })
        })
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
      &._status {
        display: inline-block;
        width: auto;
        cursor: pointer;
        &:hover {
          text-decoration: underline !important;
        }
      }
    }
  }

  .ratings-block {
    position: absolute 30px 30px auto auto
  }

</style>
