<template lang="html">
	<main class="main _task">
		<section class="task" v-cloak>
			<task-detail :taskItem="taskItem" :Author="Author" :id="id"></task-detail>
			<task-response :taskItem="taskItem" :id="id"></task-response>
		</section>
		<task-summary :taskItem="taskItem" :id="id"></task-summary>
	</main>
</template>

<script>

  import userTemplate from '@collections/userTemplate.json';
  import taskTemplate from '@collections/taskTemplate.json';

  import taskSummary from './task/task-summary.vue';
  import taskDetail from './task/task-detail.vue';
  import taskResponse from './task/task-response.vue';

  export default {
    name: "Task",
    components: { taskSummary , taskDetail , taskResponse },
    props: {
      'id': {
        type: String,
        required: true
      }
    },
    data: () => ({
      taskItem: taskTemplate,
      Author: userTemplate
    }),
    created() {
      this.$store.dispatch( 'getTaskByID' , this.id )
        .then( ({ body }) => {
          Object.assign( this.taskItem , body );
          this.taskItem.views += 1;
          this.$http.get( `user/${ this.taskItem.authorID }` )
            .then( ({ body }) => {
							Object.assign( this.Author , body );
							this.$store.dispatch( 'hasViewed' , [ this.id , this.taskItem ] )
                .then( ({ body }) => console.log( 'Task viewed -' , body.views ))
						})
            .catch( error => console.error(error) )
        })
        .catch( error => console.error(error) );
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
