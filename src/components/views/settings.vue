<template lang="html">
	<main class="main _settings">
		<navigation-panel></navigation-panel>
		<transition name="fade" mode="out-in">
			<component :is=" $route.query.section || 'common' "></component>
		</transition>
  </main>
</template>

<script>

	import navigationPanel from './settings/navigation-panel.vue';
	import common from './settings/common.vue';
	import confidential from './settings/confidential.vue';
	import payments from './settings/payments.vue';

	export default {
		name: "settings",
		components: { common , confidential , payments , navigationPanel }
	};

</script>
