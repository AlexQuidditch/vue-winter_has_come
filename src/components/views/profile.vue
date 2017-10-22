<template lang="html">
	<main class="main _profile">
		<personal></personal>
		<social></social>
		<portfolio></portfolio>
		<!-- <reviews></reviews> -->
    <wall></wall>
	</main>
</template>

<script>

  import personal from './profile/personal.vue';
  import reviews from '@views/profile/reviews.vue';
  import portfolio from '@views/profile/portfolio.vue';
  import social from '@views/profile/social.vue';
  import wall from './profile/wall.vue';

  export default {
    name: "profile",
    components: { personal , reviews , portfolio , social , wall }
  };

</script>

<style lang="scss">
	.main._profile {
		padding: 0;
	}
</style>
