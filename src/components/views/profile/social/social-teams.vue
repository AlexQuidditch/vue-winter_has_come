<template lang="html">
    <div class="social-teams">
		<img src=" ../../../../../static/assets/profile/social/users.svg " alt="Команды"
				class="social-teams__icon" />
		<h4 class="social-teams__title">Команды</h4>
		<p class="social-teams__text">
			<span v-for="( teamItem , index ) in Teams" :key="index">{{ teamItem }} </span>
		</p>
    </div>
</template>

<script>

    export default {
        name: "social-teams",
		computed: {
		    Teams() {
		        return this.$store.state.User.social.teams
		    }
		}
    }

</script>

<style lang="scss">

    .social-teams {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		width: 410px;
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
			margin: 20px 0 0 0;
			font-size: 13px;
			font-weight: 300;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}

</style>
