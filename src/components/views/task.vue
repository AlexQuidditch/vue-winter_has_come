<template lang="html">
	<main class="main _task">
		<section class="task">
			<task-detail :taskItem="taskItem"></task-detail>
			<task-response :taskItem="taskItem"></task-response>
		</section>
		<task-summary :taskItem="taskItem"></task-summary>
	</main>
</template>

<script>

	import taskSummary from './task/task-summary.vue';
	import taskDetail from './task/task-detail.vue';
	import taskResponse from './task/task-response.vue';

	export default {
		name: "Task",
		components: { taskSummary , taskDetail , taskResponse },
    data: () => ({
      taskItem: {
    		id: 0,
    		authorID: 1,
    		engagedID: 0,
    		title: '',
    		picture: '',
    		published: '',
    		description: '',
    		budget: null,
    		isAgreement: false,
    		deadline: '',
    		isRush: false,
    		views: 0,
    		response: 0,
    		isEngaged: false,
    		completed: {
    			rate: 0,
    			status: 'notCompleted',
    			review: ''
    		}
    	}
    }),
    created() {
      this.$store.dispatch( 'getTaskByID' , this.$route.query.id )
        .then( response  => {
          console.log({ body });
          Object.assign( this.taskItem , response );
          this.taskItem.authorID = 1;
        })
    }
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
