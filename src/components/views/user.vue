<template lang="html">
	<main class="main _user">
		<agent-personal v-if="User.isAgent" :User="User"></agent-personal>
		<user-personal v-else :User="User"></user-personal>
    <div class="user-container">
      <portfolio v-if="!User.isAgent" :User="User"></portfolio>
      <tasks v-else :User="User"></tasks>
      <wall :User="User" @addPostUserToUser="addPostUser($event)"></wall>
    </div>
    <social :User="User"></social>
	</main>
</template>

<script>

  import API from '@api';

  import userTemplate from '@collections/userTemplate.json';

  import UserPersonal from './user/user-personal.vue';
  import AgentPersonal from './user/agent-personal.vue';

  import tasks from './user/tasks.vue';
	import portfolio from './user/portfolio.vue';

  import social from './user/social.vue';
  import wall from './user/wall.vue';

	export default {
		name: "user",
		components: { UserPersonal , AgentPersonal , tasks , portfolio , social , wall },
    props: {
      'id': {
        type: String,
        required: true
      }
    },
    data: () => ({
      User: {
      	_id: '',
      	isAgent: null,
      	wall: [],
      	personal: {
      		avatar: '',
      		name: '',
      		sename: '',
      		email: '',
      		password: '',
      		born: '',
      		gender: '',
      		caption: '',
          about: ''
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
      		},
      		company: {
      			title: '',
      			link: ''
      		}
      	},
      	registrationDate: '',
      	popularity: '',
      	responses: {
      		issued: 0,
      		positive: 0,
      		negative: 0
      	},
      	ratings: {
      		mainRate: 0,
      		average: 0,
      		completed: 0,
      		tests: {
      			value: 0,
      			total: 0,
      			rate: 0
      		}
      	},
      	social: {
      		contacts: {
      			vk: '',
      			fb: '',
      			skype: '',
      			telegram: ''
      		},
      		teams: [],
      		company: {
      			activities: '',
      			starts: '',
      			achivements: ''
      		}
      	},
      	portfolio: [],
        reviews: [],
      	tasks: []
      }
    }),
    created() {
      API.get( `users/get/${ this.id }` )
        .then( ({ body }) => Object.assign( this.User , body ) )
        .catch( error => {
          console.error(error);
          this.$swal( 'Ошибка!' , 'Не могу получить данные' , 'error' )
        })
    },
    methods: {
      addPostUser( newPostID ) {
        this.User.wall.unshift( newPostID );
      }
    }
	};

</script>

<style lang="scss">

	.main._user {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
    align-content: flex-start;
		padding: 0;
	}

  .user-container {
    width: 640px;
  }

</style>
