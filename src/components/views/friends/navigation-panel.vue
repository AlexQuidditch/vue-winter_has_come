<template lang="html">
	<nav class="friends-navigation">
		<router-link :to="{ name: 'friends', query: { section: 'all' } }"
			class="friends-navigation__link waves-effect waves-dark"
			>Все друзья ({{ Friends.Counters.state }})
		</router-link>
		<router-link :to="{ name: 'friends', query: { section: 'online' } }"
			class="friends-navigation__link waves-effect waves-dark"
			>Друзья онлайн (21)
		</router-link>
		<router-link :to="{ name: 'friends', query: { section: 'requests' } }"
			v-if="!!Friends.Counters.add"
			class="friends-navigation__link waves-effect waves-dark"
			>Заявки (+{{ Friends.Counters.add }})
		</router-link>
		<router-link :to="{ name: 'friends', query: { section: 'blacklist' } }"
			class="friends-navigation__link waves-effect waves-dark"
			>Чёрный список (2)
		</router-link>
	</nav>
</template>

<script>

    export default {
        name: "navigation-panel",
		computed: {
		    Friends() {
		        return this.$store.state.Menu.list.friends
		    }
		}
    };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .friends-navigation {
    	position: relative;
    	display: flex;
		height: 45px;
		padding: 0 10px;
		margin-bottom: 20px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
    	&__link {
			height: 45px;
			padding: 0 10px;
			font-size: 12px;
			line-height: 45px;
			color: #4b4b4b;
			color: var(--purpley-grey);
			box-shadow: inset 0 -5px 0 transparent;
			transition:
				color .3s ease-in-out,
				color .3s ease-in-out,
				box-shadow .3s ease-in-out;
			&._exact-active {
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
				box-shadow: inset 0 -5px 0 var(--irish-green);
			}
			&:last-child {
				position: absolute;
				right: 10px;
			}
    	}
    }

</style>
