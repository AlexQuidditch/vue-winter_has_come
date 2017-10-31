<template lang="html">
	<main class="main _user">
		<personal :User="User"></personal>
    <div class="user-container">
      <portfolio :User="User"></portfolio>
      <wall></wall>
    </div>
    <social :User="User"></social>
	</main>
</template>

<script>

  import userTemplate from '@collections/userTemplate.json';

	import personal from './user/personal.vue';
	import portfolio from './user/portfolio.vue';
	import social from './user/social.vue';
  import wall from './profile/wall.vue';

	export default {
		name: "user",
		components: { personal , portfolio , social , wall },
    data: () => ({
      User: userTemplate
    })
	};

</script>

<style lang="scss">

	.main._user {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
    align-content: flex-start;
		padding: 0;
	}

  .user-container {
    width: 640px;
  }

</style>
