<template lang="html">
	<main class="main">
		<personal></personal>
		<social></social>
		<portfolio></portfolio>
		<reviews></reviews>
	</main>
</template>

<script>

	import personal from '@views/profile/personal';
	import reviews from '@views/profile/reviews';
	import portfolio from '@views/profile/portfolio';
	import social from '@views/profile/social';

    export default {
        name: "profile",
		components: { personal , reviews , portfolio , social }
    }

</script>
