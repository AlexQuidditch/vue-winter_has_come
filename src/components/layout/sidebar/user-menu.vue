<template lang="html">
    <ul class="user-menu">
		<li v-for="( menuItem , index ) in menuList" :key="index"
			class="menu-item">
			<router-link to="/"
				class="menu-item__link">
				<!-- <router-link :to="{ name: menuItem.route }" -->
				<span class="menu-item__text">{{ menuItem.text }}</span>
				<span v-if="menuItem.Counters" class="menu-item__counter _state">({{ menuItem.Counters.state }})</span>
				<span v-if="menuItem.Counters && menuItem.Counters.add !== 0"
					class="menu-item__counter _add">(+{{ menuItem.Counters.add }})</span>
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
		    menuList() {
		        return this.$store.state.Menu.list
		    }
		}
    }

</script>

<style lang="scss">

    .user-menu {
    	padding: 16px 0;
    }

	.menu-item {
		&__link {
			padding-left: 15px;
			font-size: 13px;
			line-height: 32px;
		}
		&__text {
			font-weight: 600;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__counter {
			&._state {
				color: #9b9b9b;
				color: var(--purpley-grey);
			}
			&._add {
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
		}
	}

</style>
