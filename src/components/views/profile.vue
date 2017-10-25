<template lang="html">
	<main class="main _profile">
		<personal></personal>
    <div class="profile-container">
      <portfolio></portfolio>
      <wall></wall>
    </div>
    <social></social>
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
    align-content: flex-start;
		padding: 0;
	}

  .profile-container {
    width: 640px;
  }

</style>
