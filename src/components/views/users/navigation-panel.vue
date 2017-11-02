<template lang="html">
  <nav class="users-navigation">
    <router-link :to="{ name: 'users', query: { section: 'all' } }"
                 class="users-navigation__link waves-effect waves-dark"
      >Все исполнители ({{ usersQuantity }})
    </router-link>
    <router-link :to="{ name: 'users', query: { section: 'online' } }"
                 class="users-navigation__link waves-effect waves-dark"
      >Исполнители онлайн ({{ usersOnline }})
    </router-link>
  </nav>
</template>

<script>

  export default {
    name: "navigation-panel",
    computed: {
      usersQuantity() {
        return this.$store.state.Users.length;
      },
      usersOnline() {
        const online = this.$store.state.Users
          .filter( user => user.isOnline );
        return online.length;
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .users-navigation {
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
    }
  }

</style>
