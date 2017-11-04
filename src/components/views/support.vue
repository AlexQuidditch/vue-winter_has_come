<template lang="html">
  <main class="main _support">
    <navigation-panel></navigation-panel>
    <transition name="fade" mode="out-in">
      <component :is=" $route.query.section || 'opened' "></component>
    </transition>
  </main>
</template>

<script>

  import navigationPanel from './support/navigation-panel.vue';
  import opened from './support/opened.vue';
  import closed from './support/closed.vue';
  import newReq from './support/new.vue';

  export default {
    name: "support",
    components: { opened , closed , newReq , navigationPanel }
  };

</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins";

  .main._support {
    padding: 30px;
  }

</style>
