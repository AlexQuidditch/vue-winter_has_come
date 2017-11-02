<template lang="html">
  <section class="personal">
    <img :src=" backendLocation + '/upload/' + User.personal.avatar "
         :alt="User.personal.name + ' ' + User.personal.sename"
         class="personal-avatar" />

    <div class="personal-info">
      <h3 class="personal-info__name">{{ User.personal.name + ' ' + User.personal.sename }}</h3>
      <div class="personal-more">
        <p class="personal-more__item _is-agent">Агент</p>
        <p class="personal-more__item">Последний визит: <span>{{ User.information.lastVisit }}</span></p>
        <p class="personal-more__item">Статус: <span>{{ User.information.status }}</span></p>
      </div>
      <div class="personal-more">
        <p class="personal-more__item">{{ User.information.town }} ({{ User.information.country }})</p>
        <p class="personal-more__item">{{ User.information.company.title }}</p>
        <a :href="User.information.company.link" class="personal-more__item _link">{{ User.information.company.link }}</a>
      </div>
      <p class="personal-info__about">{{ User.information.about }}</p>
      <div class="personal-bottom">
        <div class="personal-bottom__column">
          <button class="personal-bottom__button _contact-me">
            <img src="/static/assets/agent/personal/contacts.svg" alt="Написать письмо" />
            <span>Написать</span>
          </button>
        </div>
        <div class="personal-bottom__column">
          <button class="personal-bottom__button">
            <img src="/static/assets/agent/personal/minus-circle-bold.svg" alt="" />
          </button>
          <button class="personal-bottom__button" aria-label="Заблокировать агента">
            <img src="/static/assets/agent/personal/slash-bold.svg" alt="Заблокировать агента" />
          </button>
        </div>
      </div>
    </div>

    <agent-ratings-block :Ratings="User.ratings"  class="ratings-block"></agent-ratings-block>

  </section>

</template>

<script>

  import AgentRatingsBlock from './personal/agent-ratings-block.vue';

  export default {
    name: "Agent-Personal",
    components: { AgentRatingsBlock },
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
      img {
        size: 20px;
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
      &._is-agent,
      &._link {
        font-weight: 600;
        color: #009d2f;
        color: var(--irish-green);
      }
    }
  }

  .ratings-block {
    position: absolute 30px 30px auto auto
  }

</style>
