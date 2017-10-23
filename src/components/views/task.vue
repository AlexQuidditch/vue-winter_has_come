<template lang="html">
	<main class="main _task">
		<section class="task">
			<task-detail :taskItem="taskItem" :Author="Author" :id="id"></task-detail>
			<task-response :taskItem="taskItem" :id="id"></task-response>
		</section>
		<task-summary :taskItem="taskItem" :id="id"></task-summary>
	</main>
</template>

<script>

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
      taskItem: {
        _id: '',
        authorID: '',
        attached: [],
        engagedID: '',
        title: '',
        picture: '',
        published: '',
        description: '',
        budget: '',
        isAgreement: '',
        deadline: '',
        isRush: '',
        views: '',
        response: '',
        isEngaged: '',
        completed: {
          rate: '',
          status: '',
          review: ''
        }
      },
      Author: {
        _id: '',
        isAgent: null,
        wallID: '',
        personal: {
          avatar: '',
          name: '',
          sename: '',
          email: '',
          password: '',
          born: '',
          gender: '',
          caption: ''
        },
        information: {
          specialization: '',
          lastVisit: '',
          status: '',
          town: '',
          country: '',
          education: {
            place: '',
            faculty: ''
          }
        },
      	registrationDate: '',
      	popularity: '',
      	responses: {
      		issued: '',
      		positive: '',
      		negative: ''
      	},
        ratings: {
          mainRate: '',
          average: '',
          completed: '',
          tests: {
            value: '',
            total: '',
            rate: '',
          }
        },
        social: {
          contacts: {
            vk: '',
            fb: '',
            skype: '',
            telegram: ''
          },
          teams: []
        },
        portfolio: [],
        reviews: []
      }
    }),
    created() {
      this.$store.dispatch( 'getTaskByID' , this.id )
        .then( ({ body }) => {
          Object.assign( this.taskItem , body );
          this.$http.get( `user/${ this.taskItem.authorID }` )
            .then( ({ body }) => Object.assign( this.Author , body ) )
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
