<template lang="html">
	<main class="main">
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
    }

</script>
