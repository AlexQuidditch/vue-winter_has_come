<template lang="html">
	<main class="main _teams">
		<section class="teams">
			<navigation-panel></navigation-panel>
			<search-friend></search-friend>
			<transition name="fade" mode="out-in">
				<component :is=" $route.query.section || 'all' "></component>
			</transition>
		</section>
		<filter-panel></filter-panel>
	</main>
</template>

<script>

  import API from '@api';

	import filterPanel from './teams/filter-panel';
	import searchFriend from './teams/search-friend';
	import navigationPanel from './teams/navigation-panel';

	import all from './teams/all';
	import online from './teams/online';
	import requests from './teams/requests';
	import blacklist from './teams/blacklist';

	export default {
		name: "teams",
		components: {
			filterPanel , searchFriend , navigationPanel,
			all , online , requests , blacklist
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

	.main._teams {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.teams {
		width: 100%;
		max-width: 690px;
	}

</style>
