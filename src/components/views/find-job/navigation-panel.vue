<template lang="html">
  <nav class="find-job-navigation">
    <router-link v-for="( route , index ) in Routes" :key="index"
                 tag="button"
                 :to="{ name: route.name || 'find-job' , query: route.query }"
                 :class="[ index == Routes.length - 1 ? 'waves-light' : 'waves-dark' ]"
                 :disabled="(index == Routes.length - 1) && !currentUserIsAgent"
                 class="find-job-navigation__link waves-effect"
      >{{ route.text }}
    </router-link>
  </nav>
</template>

<!-- :class="[ index == Routes.length - 1 ? 'waves-light' : 'waves-dark', currentUserIsAgent ? '_disabled' : '' ] -->

<script>

  export default {
    name: "navigation-panel",
    data: () => ({
      Routes: [
        {
          text: 'Все задания',
          query: {
            section: 'all'
          }
        },
        {
          text: 'Срочные',
          query: {
            section: 'rush'
          }
        },
        {
          text: 'Активные',
          query: {
            section: 'active'
          }
        },
        {
          text: 'Завершенные',
          query: {
            section: 'completed'
          }
        },
        {
          name: 'create-task',
          text: 'Создать задание'
        }
      ]
    }),
    computed: {
      currentUserIsAgent() {
        return this.$store.state.User.isAgent
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins";

  .find-job-navigation {
    position: relative;
    display: flex;
    height: 45px;
    padding: 0 10px;
    margin-bottom: 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__link {
      height: 45px;
      padding: 0 10px;
      font-size: 12px;
      line-height: 45px;
      color: #4b4b4b;
      color: var(--purpley-grey);
  		background-color: #fff;
  		background-color: var(--whited);
      border: none;
      box-shadow: inset 0 -5px 0 transparent;
      transition:
        color .3s ease-in-out,
        box-shadow .3s ease-in-out;
      &._exact-active {
        font-weight: 600;
        color: #009d2f;
        color: var(--irish-green);
        box-shadow: inset 0 -5px 0 var(--irish-green);
      }
      &:last-child {
        position: absolute;
        right: 0;
        size: 150px 45px;
        text-align: center;
        font-weight: 600;
        color: #fff;
        color: var(--whited);
        background-color: #009d2f;
        background-color: var(--irish-green);
        @include MDShadow-1;
        &:disabled {
          background-color: #4a4a4a;
          background-color: var(--charcoal-grey);
          box-shadow: none;
        }
      }
    }
  }

</style>
