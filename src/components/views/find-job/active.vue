<template lang="html">
  <transition-group name="fade" mode="out-in" class="find-job _active">
    <task-item v-for="taskItem in Tasks" :key="taskItem._id"
               :taskItem = "taskItem">
    </task-item>
  </transition-group>
</template>

<script>

import taskItem from '@templates/task-item';

export default {
  name: "find-job_active",
  components: { taskItem },
  computed: {
    Tasks() {
      return this.$store.state.Tasks
    }
  }
};

</script>

<style lang="scss">

  .find-job._active {}

</style>
