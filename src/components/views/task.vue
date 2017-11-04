<template lang="html">
	<main class="main _task">
		<section class="task" v-cloak>
			<task-detail :taskItem="taskItem" :Author="Author" :id="id"></task-detail>
			<task-response :taskItem="taskItem" :id="id"
			               @emitResponse="addResponse($event)"
                     @takeEngaged="takeEngaged($event)">
      </task-response>
		</section>
		<task-summary :taskItem="taskItem" :id="id"></task-summary>
	</main>
</template>

<script>

  import API from '@api';

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

          API.get( `user/${ this.taskItem.authorID }` )
            .then( ({ body }) => {
							Object.assign( this.Author , body );
							this.$store.dispatch( 'changeTask' , [ this.id , this.taskItem ] )
                .then( ({ body }) => console.log( 'Task viewed -' , body.views ))
						})
            .catch( error => console.error(error) )

        })
        .catch( error => console.error(error) );
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        API.get( `users/get/${ vm.$store.state.User._id }` )
          .then( ({ body }) => vm.$store.dispatch( 'updateInstance' , body ) )
          .catch( error => console.error( error ) )
      })
    },
    methods: {
      addResponse( responseID ) {
        this.taskItem.responses.push( responseID );
        this.$store.dispatch( 'changeTask' , [ this.id , this.taskItem ] )
          .then( ({ body }) => console.log( 'Response saved' ))
      },
      takeEngaged( AuthorID ) {
        console.log( AuthorID );
        this.$swal({
          title: 'Вы уверены?',
          text: "Подтвердите действие",
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Назначить',
          cancelButtonText: 'Отменить'
        })
        .then( () => {
          this.taskItem.engagedID = AuthorID;
          this.taskItem.isEngaged = true;
          return API.post( `task/edit/${ this.taskItem._id }` , this.taskItem )
            .then( ({ body }) => {
              this.$swal(
                'Отлично!',
                'Исполнитель назначен.',
                'success'
              )
            })
            .catch( error => console.error(error) )
        })
      }
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
