<template lang="html">
	<main class="main _agent">
		<personal></personal>
		<social></social>
		<tasks></tasks>
		<reviews></reviews>
	</main>
</template>

<script>

	import personal from '@views/agent/personal';
	import social from '@views/agent/social';
	import tasks from '@views/agent/tasks';
	import reviews from '@views/agent/reviews';

    export default {
        name: "agent",
		components: { personal , social , tasks , reviews }
    };

</script>

<style lang="scss">
	.main._agent {
		padding: 0;
	}
</style>
