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
        <p class="personal-more__item">Статус: <span>{{ User.information.status }}</span></p>
      </div>
      <div class="personal-more">
        <p class="personal-more__item">{{ User.information.town }}</p>
        <p class="personal-more__item _education">{{ User.information.education.place }}, {{ User.information.education.faculty }}</p>
      </div>
      <p class="personal-info__about">{{ User.information.about }}</p>
    </div>

    <user-ratings-block :Ratings="User.ratings" class="ratings-block"></user-ratings-block>

  </section>
</template>

<script>

  import UserRatingsBlock from './personal/user-ratings-block.vue';

  export default {
    name: "User-Personal",
    components: { UserRatingsBlock },
    props: {
      'User': {
        type: Object,
        required: true
      }
    },
    computed: {
      backendLocation() {
        return this.$store.state.General;
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
    }
  }

  .ratings-block {
    position: absolute 30px 30px auto auto
  }

</style>
