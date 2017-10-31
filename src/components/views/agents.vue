<template lang="html">
	<main class="main _agents">
		<section class="agents">
			<navigation-panel></navigation-panel>
			<search-agent></search-agent>
			<transition name="fade" mode="out-in">
				<component :is=" $route.query.section || 'all' "></component>
			</transition>
		</section>
		<filter-panel></filter-panel>
	</main>
</template>

<script>

	import filterPanel from './agents/filter-panel.vue';
	import searchAgent from './agents/search-agent.vue';
	import navigationPanel from './agents/navigation-panel.vue';

	import all from './agents/all.vue';
	import online from './agents/online.vue';

	export default {
		name: "agents",
		components: {
			filterPanel , searchAgent , navigationPanel,
			all , online
		}
	};

</script>

<style lang="scss">

	.main._agents {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.agents {
		width: 100%;
		max-width: 690px;
	}

</style>
