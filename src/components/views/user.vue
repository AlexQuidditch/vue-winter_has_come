<template lang="html">
	<main class="main _user">
		<personal></personal>
		<social></social>
		<portfolio></portfolio>
		<reviews></reviews>
	</main>
</template>

<script>

	import personal from '@views/user/personal';
	import reviews from '@views/user/reviews';
	import portfolio from '@views/user/portfolio';
	import social from '@views/user/social';

	export default {
		name: "user",
		components: { personal , reviews , portfolio , social }
	};

</script>

<style lang="scss">
	.main._user {
		padding: 0;
	}
</style>
