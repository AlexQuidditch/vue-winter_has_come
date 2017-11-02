<template lang="html">
	<main class="main _users">
		<section class="users">
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

	import filterPanel from './users/filter-panel.vue';
	import searchFriend from './users/search-friend.vue';
	import navigationPanel from './users/navigation-panel.vue';

	import all from './users/all.vue';

	export default {
		name: "users",
		components: {
			filterPanel , searchFriend , navigationPanel,
			all
		},
    beforeRouteEnter ( to , from , next ) {
      next( vm => vm.$store.dispatch('getUsers') )
    }
	};

</script>

<style lang="scss">

	.main._users {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.users {
		width: 100%;
		max-width: 690px;
	}

</style>
