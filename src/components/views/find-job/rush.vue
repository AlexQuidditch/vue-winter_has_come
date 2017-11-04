<template lang="html">
  <transition-group name="fade" mode="out-in" class="find-job _rush">
    <h3 v-if="!Tasks.length" key="noRushTasks" class="find-job__no-content-message">Заданий пока нет.</h3>
    <task-item v-for="taskItem in Tasks" :key="taskItem._id" v-else
               :taskItem = "taskItem">
    </task-item>
  </transition-group>
</template>

<script>

  import taskItem from '@templates/task-item';

  export default {
    name: "find-job_rush",
    components: { taskItem },
    computed: {
      Tasks() {
        return this.$store.state.Tasks.filter( item => item.isRush )
      }
    }
  };

</script>

<style lang="scss">

  .find-job._rush {}

</style>
