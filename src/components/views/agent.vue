<template lang="html">
  <main class="main _agent">
    <personal></personal>
    <div class="agent-container">
      <tasks></tasks>
      <wall></wall>
    </div>
    <social></social>
  </main>
</template>

<script>

  import personal from './agent/personal.vue';
  import social from './agent/social.vue';
  import tasks from './agent/tasks.vue';
  import wall from './profile/wall.vue';

  export default {
    name: "agent",
    components: { personal , tasks , social , wall }
  };

</script>

<style lang="scss">

	.main._agent {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
    align-content: flex-start;
		padding: 0;
	}

  .agent-container {
    width: 640px;
  }

</style>
