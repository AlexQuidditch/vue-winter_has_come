<template lang="html">
  <nav class="teams-navigation">
    <router-link :to="{ name: 'teams', query: { section: 'all' } }"
                 class="teams-navigation__link waves-effect waves-dark"
      >Все команды ({{ friendsQuantity }})
    </router-link>
    <router-link :to="{ name: 'teams', query: { section: 'requests' } }"
                 v-if="!!Friends.Counters.add"
                 class="teams-navigation__link waves-effect waves-dark"
      >Приглашения (+{{ Friends.Counters.add }})
    </router-link>
    <router-link :to="{ name: 'teams', query: { section: 'blacklist' } }"
                 class="teams-navigation__link waves-effect waves-dark"
      >Чёрный список (2)
    </router-link>
  </nav>
</template>

<script>

  export default {
    name: "navigation-panel",
    computed: {
      Friends() {
        return this.$store.state.Menu.list.friends
      },
      friendsQuantity() {
        return this.$store.state.Stub.friends.length;
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .teams-navigation {
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
      box-shadow: inset 0 -5px 0 transparent;
      transition:
      color .3s ease-in-out,
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
        right: 10px;
      }
    }
  }

</style>
