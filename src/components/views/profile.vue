<template lang="html">
	<main class="main _profile">
		<personal></personal>
		<social></social>
    <wall></wall>
		<portfolio></portfolio>
	</main>
</template>

<script>

  import personal from './profile/personal.vue';
  import social from './profile/social.vue';
  import portfolio from './/profile/portfolio.vue';
  import wall from './profile/wall.vue';

  export default {
    name: "profile",
    components: { personal , portfolio , social , wall }
  };

</script>

<style lang="scss">

	.main._profile {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0;
	}
  
</style>
