<template lang="html">
  <section class="personal">
    <img :src=" '/static/assets/shared/' + Personal.avatar " :alt="Personal.name + ' ' + Personal.sename"
    class="personal-avatar" />
    <div class="personal-info">
      <h3 class="personal-info__name">{{ Personal.name + ' ' + Personal.sename }}</h3>
      <div class="personal-more">
        <p class="personal-more__item">{{ Information.specialization }}</p>
        <p class="personal-more__item">Последний визит: <span>{{ Information.lastVisit }}</span></p>
        <p class="personal-more__item">Статус: <span>{{ Information.status }}</span></p>
      </div>
      <div class="personal-more">
        <p class="personal-more__item">{{ Information.town }} ({{ Information.country }})</p>
        <p class="personal-more__item">{{ Information.education.place }}, {{ Information.education.faculty }}</p>
      </div>
      <p class="personal-info__about">{{ Information.about }}</p>
    </div>
    <ratings-block class="ratings-block"></ratings-block>
  </section>
</template>

<script>

  import ratingsBlock from './personal/ratings-block.vue';

  export default {
    name: "personal",
    components: { ratingsBlock },
    data() {
      return {}
    },
    computed: {
      Personal() {
        return this.$store.state.User.personal
      },
      Information() {
        return this.$store.state.User.information
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
    height: 250px;
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
  }

  .personal-more {
    position: relative;
    margin: 8px 0;
    &:nth-child(2) {
      width: 45%;
    }
    &:nth-child(3) {
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
