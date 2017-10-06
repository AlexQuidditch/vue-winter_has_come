<template lang="html">
    <ul class="find-job _completed">
		<task-item v-for="taskItem in Tasks" :key="taskItem._id"
			:taskItem = "taskItem">
		</task-item>
    </ul>
</template>

<script>

	import taskItem from '@templates/task-item';

    export default {
        name: "find-job_completed",
		components: { taskItem },
		computed: {
		    Tasks() {
		        return this.$store.state.Tasks
		    }
		}
    };

</script>

<style lang="scss">

    .find-job._completed {}

</style>
