<template lang="html">
	<main class="main _friends">
		<section class="friends">
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

	import filterPanel from './friends/filter-panel';
	import searchFriend from './friends/search-friend';
	import navigationPanel from './friends/navigation-panel';

	import all from './friends/all';
	import online from './friends/online';
	import requests from './friends/requests';
	import blacklist from './friends/blacklist';

    export default {
        name: "friends",
		components: {
			filterPanel , searchFriend , navigationPanel,
			all , online , requests , blacklist
		}
    };

</script>

<style lang="scss">

    .main._friends {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
    }

	.friends {
		width: 100%;
		max-width: 690px;
	}

</style>
