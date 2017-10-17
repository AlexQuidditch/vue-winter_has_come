<template lang="html">
  <div class="user">
		<router-link :to="{ name: 'profile' }" tag="div" class="user-avatar">
			<img :src=" backendLocation + '/upload/' + Personal.avatar " :alt="Personal.name + ' ' + Personal.sename"
				   class="user-avatar__image"/><h3 class="user-avatar__name">{{ Personal.name + ' ' + Personal.sename }}</h3>
		</router-link>
		<nav class="user-controls">
			<router-link to="/" v-for="control in Controls" :key="control.name"
				           class="user-control">
				<img :src=" '/static/assets/sidebar/' + control.icon " :alt="control.name"
					   class="user-control__icon" />
				<span v-if="control.counter !== 0 "
					    class="user-control__counter">{{ control.counter }}</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

  export default {
    name: "user-info",
    computed: {
      Personal() {
        return this.$store.state.User.personal
      },
      Controls() {
        return this.$store.state.Controls.indicators
      },
      backendLocation() {
        return this.$store.state.General.host;
      }
    }
  };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

  .user {}

	.user-avatar {
		&__image {
			display: inline-block;
			vertical-align: middle;
			size: 50px;
			object-fit: cover;
			object-position: top;
			border-radius: 50%;
			cursor: pointer;
			@include MDShadow-1;
		}
		&__name {
			display: inline-block;
			vertical-align: middle;
			width: 83px;
			margin-left: 10px;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
      cursor: pointer;
      &:hover {
        text-decoration: underline !important
      }
		}
	}

	.user-controls {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		align-items: center;
	}

	.user-control {
		position: relative;
		height: 46px;
		padding: 15px;
		margin: 9px 0;
		&__icon {
			size: 20px;
		}
		&__counter {
			position: absolute 11px 11px auto auto;
			display: flex;
			justify-content: center;
			align-items: center;
			size: 14px;
			font-size: 8px;
			text-align: center;
			color: #ffffff;
			color: var(--whited);
			background-color: #009d2f;
			background-color: var(--irish-green);
			border-radius: 50%
		}
	}

</style>
