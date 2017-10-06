<template lang="html">
  <transition-group name="list" mode="out-in" class="find-job _all">
    <task-item v-for="( taskItem , index ) in Tasks" :key="index"
               :taskItem = "taskItem">
    </task-item>
  </transition-group>
</template>

<script>

  import taskItem from '@templates/task-item';

  export default {
    name: "find-job_all",
    components: { taskItem },
    computed: {
      Tasks() {
        return this.$store.state.Tasks
      }
    }
  };

</script>

<style lang="scss">

  .find-job._all {}

</style>
