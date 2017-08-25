<template lang="html">
    <ul class="find-job _rush">
		<task-item v-for="taskItem in Tasks" :key="taskItem.id"
			:taskItem = "taskItem">
		</task-item>
    </ul>
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
