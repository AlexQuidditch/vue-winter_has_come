<template lang="html">
  <div class="social-teams">
		<img src=" /static/assets/profile/social/users.svg " alt="Команды"
				class="social-teams__icon" />
		<h4 class="social-teams__title">Мои команды</h4>
		<p v-if="!Teams.length" class="social-teams__text">Вы не состоите в командах</p>
    <p class="social-teams__text">
			<span v-for="( teamItem , index ) in Teams" :key="index">
				{{ teamItem.title }}
				<span>{{ Teams.indexOf( teamItem ) === Teams.length - 1 ? '' : ' | ' }}</span>
			</span>
		</p>
  </div>
</template>

<script>

  export default {
    name: "Social-Teams",
    computed: {
      Teams() {
        const storeTeams = this.$store.state.User.social.teams;
        const Teams = [];
        storeTeams.forEach( item => {
          this.$store.state.Teams.filter( team => {
            if ( team._id === item ) Teams.push( team );
          })
        });
        return Teams;
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../../stylesheets/partials/mixins.scss";

  .social-teams {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 291px;
    padding: 20px 30px;
    margin-top: 20px;
    border-radius: 3px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
    &__icon {
      width: 28px;
    }
    &__title {
      margin-left: 10px;
      font-size: 18px;
      line-height: 28px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__text {
      margin: 10px 0 0 0;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.46;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
  }

</style>
