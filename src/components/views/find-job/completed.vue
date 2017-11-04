<template lang="html">
  <transition-group name="fade" mode="out-in" class="find-job _completed">
    <h3 v-if="!Tasks.length" key="notCompletedTasks" class="find-job__no-content-message">Заданий пока нет.</h3>
    <task-item v-for="taskItem in Tasks" :key="taskItem._id" v-else
               :taskItem = "taskItem">
    </task-item>
  </transition-group>
</template>

<script>

	import taskItem from '@templates/task-item';

  export default {
    name: "find-job_completed",
    components: { taskItem },
    computed: {
      Tasks() {
        return this.$store.state.Tasks
          .filter( task => task.completed.status === 'completed' )
      }
    }
  };

</script>

<style lang="scss">

  .find-job._completed {}

</style>
