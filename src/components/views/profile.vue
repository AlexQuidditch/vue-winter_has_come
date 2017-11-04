<template lang="html">
	<main class="main _profile">
		<agent-personal v-if="User.isAgent"></agent-personal>
		<user-personal v-else></user-personal>
    <div class="profile-container">
      <tasks v-if="User.isAgent"></tasks>
      <portfolio v-else></portfolio>
      <wall></wall>
    </div>
    <social></social>
	</main>
</template>

<script>

  import API from '@api';

  import UserPersonal from './profile/user-personal.vue';
  import AgentPersonal from './profile/agent-personal.vue';

  import tasks from './profile/tasks.vue';
  import portfolio from './profile/portfolio.vue';

  import social from './profile/social.vue';
  import wall from './profile/wall.vue';

  export default {
    name: "profile",
    components: { UserPersonal , AgentPersonal , tasks , portfolio , social , wall },
    computed: {
      User() {
        return this.$store.state.User;
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        API.get( `users/get/${ vm.$store.state.User._id }` )
          .then( ({ body }) => vm.$store.dispatch( 'updateInstance' , body ) )
          .catch( error => console.error( error ) )
      })
    }
  };

</script>

<style lang="scss">

	.main._profile {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
    align-content: flex-start;
		padding: 0;
	}

  .profile-container {
    width: 640px;
  }

</style>
