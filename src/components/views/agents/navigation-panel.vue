<template lang="html">
  <nav class="agent-navigation">
    <router-link :to="{ name: 'agents', query: { section: 'all' } }"
                 class="agent-navigation__link waves-effect waves-dark"
      >Все агенты ({{ agentQuantity }})
    </router-link>
    <router-link :to="{ name: 'agents', query: { section: 'online' } }"
                 class="agent-navigation__link waves-effect waves-dark"
      >Агенты онлайн ({{ agentOnline }})
    </router-link>
  </nav>
</template>

<script>

  export default {
    name: "navigation-panel",
    computed: {
      agentQuantity() {
        const quantity = this.$store.state.Stub.friends
          .filter( agent => agent.isAgent );
        return quantity.length;
      },
      agentOnline() {
        const online = this.$store.state.Stub.friends
          .filter( user => user.isAgent && user.isOnline );
        return online.length;
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .agent-navigation {
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
