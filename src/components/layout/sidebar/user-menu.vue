<template lang="html">
    <ul class="user-menu">
		<li class="menu-item">
			<router-link :to="{ name: Menu.main.route }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.main.text }}</span>
			</router-link>
		</li>
		<li class="menu-item">
			<router-link :to="{ name: Menu.messages.route }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.messages.text }}</span>
				<span class="menu-item__counter _state">({{ Menu.messages.Counters.state }})</span>
				<span v-if="Menu.messages.Counters && Menu.messages.Counters.add !== 0"
					class="menu-item__counter _add">(+{{ Menu.messages.Counters.add }})</span>
			</router-link>
		</li>
		<li class="menu-item">
			<router-link :to="{ name: Menu.friends.route, query: { section: 'all' } }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.friends.text }}</span>
				<span class="menu-item__counter _state">({{ Menu.friends.Counters.state }})</span>
				<span v-if="Menu.friends.Counters && Menu.friends.Counters.add !== 0"
					class="menu-item__counter _add">(+{{ Menu.friends.Counters.add }})</span>
			</router-link>
		</li>
		<li class="menu-item">
			<router-link :to="{ name: Menu.teams.route }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.teams.text }}</span>
				<span class="menu-item__counter _state">({{ Menu.teams.Counters.state }})</span>
				<span v-if="Menu.teams.Counters && Menu.teams.Counters.add !== 0"
					class="menu-item__counter _add">(+{{ Menu.teams.Counters.add }})</span>
			</router-link>
		</li>
		<li class="menu-item">
			<router-link :to="{ name: Menu.settings.route }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.settings.text }}</span>
			</router-link>
		</li>
		<li class="menu-item">
			<router-link :to="{ name: Menu.support.route }" class="menu-item__link">
				<span class="menu-item__text">{{ Menu.support.text }}</span>
			</router-link>
		</li>
    </ul>
</template>

<script>

    export default {
        name: "user-menu",
        data() {
            return {}
        },
		computed: {
		    Menu() {
		        return this.$store.state.Menu.list
		    }
		}
    };

</script>

<style lang="scss">

    .user-menu {
    	padding: 16px 0;
    }

	.menu-item {
		&__link {
			margin-left: 15px;
			font-size: 13px;
			font-weight: 600;
			line-height: 32px;
			&._exact-active {
				.menu-item__text {
					color: #009d2f !important;
					color: var(--irish-green) !important;
				}
			}
		}
		&__text {
			color: #4a4a4a;
			color: var(--charcoal-grey);
			transition: color .3s;
		}
		&__counter {
			&._state {
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
			&._add {
				color: #009d2f;
				color: var(--irish-green);
			}
		}
	}

</style>
