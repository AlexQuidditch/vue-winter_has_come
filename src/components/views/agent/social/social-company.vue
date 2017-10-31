<template lang="html">
  <div class="social-company">
    <img src=" /static/assets/agent/social/home.svg " alt="О компании"
         class="social-company__icon" />
    <h4 class="social-company__title">О компании</h4>
    <p class="social-company__text">Род деятельности: <span>{{ Company.activities }}</span></p>
    <p class="social-company__text">Дата основания: <span>{{ Company.starts }}</span></p>
    <p class="social-company__text">Достижения компании: <span>{{ Company.achivements }}</span></p>
  </div>
</template>

<script>

  export default {
    name: "social-company",
    computed: {
      Company() {
        return this.$store.state.Agent.social.company
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../../stylesheets/partials/mixins.scss";

  .social-company {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 291px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 3px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__icon {
      width: 28px;
    }
    &__title {
      margin: 0 0 20px 10px;
      font-size: 18px;
      line-height: 28px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__text {
      margin: 0;
      font-size: 13px;
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

</style>
