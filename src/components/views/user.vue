<template lang="html">
	<main class="main _user">
		<personal></personal>
		<social></social>
		<portfolio></portfolio>
	</main>
</template>

<script>

	import personal from './user/personal.vue';
	import portfolio from './user/portfolio.vue';
	import social from './user/social.vue';

	export default {
		name: "user",
		components: { personal , portfolio , social }
	};

</script>

<style lang="scss">
	.main._user {
		padding: 0;
	}
</style>
