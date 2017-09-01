<template lang="html">
	<main class="main _task">
	    <section class="task">
			<task-detail></task-detail>
			<task-response></task-response>
	    </section>
		<task-summary></task-summary>
	</main>
</template>

<script>

	import taskSummary from './task/task-summary.vue';
	import taskDetail from './task/task-detail.vue';
	import taskResponse from './task/task-response.vue';

    export default {
        name: "task",
		components: { taskSummary , taskDetail , taskResponse }
    };

</script>

<style lang="scss">

    .main._task {
    	display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 30px;
    }

	.task {
		width: 100%;
		max-width: 690px;
	}

</style>
