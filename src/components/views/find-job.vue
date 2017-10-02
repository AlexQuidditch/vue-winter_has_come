<template lang="html">
  <main class="main _find-job">
    <section class="find-job">
      <navigation-panel></navigation-panel>
      <search-task></search-task>
      <transition name="fade" mode="out-in">
        <component :is=" $route.query.section || 'all' "></component>
      </transition>
    </section>
    <filter-panel></filter-panel>
  </main>
</template>

<script>

  import filterPanel from './find-job/filter-panel.vue';
  import searchTask from './find-job/search-task.vue';
  import navigationPanel from './find-job/navigation-panel.vue';

  import all from './find-job/all.vue';
  import rush from './find-job/rush.vue';
  import active from './find-job/active.vue';
  import completed from './find-job/completed.vue';

  export default {
    name: "find-job",
    components: {
      filterPanel , searchTask , navigationPanel,
      all , rush , active , completed
    },
    beforeCreate() {
      this.$store.dispatch('getTasks')
        .then( response => console.log(response) )
        .catch( error => console.error(error) )
    }
  };

</script>

<style lang="scss">

.main._find-job {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 30px;
}

.find-job {
  width: 100%;
  max-width: 690px;
}

</style>
