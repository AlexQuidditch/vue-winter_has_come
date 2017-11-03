<template lang="html">
  <header class="header">
		<div class="header-row _first">
			<div class="container">
				<router-link tag="img" to="/"
                     src="/static/assets/header/logo.png"
                     class="header__logo">
				</router-link>
				<search></search>
				<partner></partner>
				<partner-menu></partner-menu>
			</div>
		</div>
		<div class="header-row _second">
			<nav class="container">
				<router-link :to="{ name: 'find-job' , query: { section : 'all' } }"
                     class="header-row__link waves-effect waves-light">
           <icon-home class="header-row__link-icon"></icon-home>
          <span>{{ currentUserIsAgent ? 'Посмотреть задания' : 'Найти работу' }}</span>
        </router-link>
				<div class="header-row__divider"></div>
				<router-link :to="{ name : 'users' }" class="header-row__link waves-effect waves-light">Исполнители</router-link>
				<router-link :to="{ name : 'agents' }" class="header-row__link waves-effect waves-light">Агенты</router-link>
				<router-link :to="{ name : 'teams' }" class="header-row__link waves-effect waves-light">Команды</router-link>
				<router-link :to="{ name : 'logout' }" @click.native="logout()" class="header-row__link _logout waves-effect waves-light">Выйти</router-link>
			</nav>
		</div>
  </header>
</template>

<script>

	import search from './header/search.vue';
	import partner from './header/partner.vue';
	import partnerMenu from './header/partner-menu.vue';
	import iconHome from '@icons/home';

	export default {
		name: "header",
		components: { search , partner , partnerMenu , iconHome },
    computed: {
      currentUserIsAgent() {
        return this.$store.state.User.isAgent
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('cleanInstance');
        this.$store.dispatch('changeAuth');
      }
    }
	};

</script>

<style lang="scss">

	.header {
		z-index: 900;
		position: fixed;
		top: 0;
		width: 100%;
		&__logo {
			height: 40px;
			object-fit: contain;
			cursor: pointer;
		}
	}

	.header-row {
		&._first {
			height: 60px;
			background-color: #f8f8f8;
			background-color: var(--white-two);
			.container {
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 0 0 30px;
			}
		}
		&._second {
			height: 40px;
			background-color: #009d2f;
			background-color: var(--irish-green);
			box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
			box-shadow: 0 0 5px 0 var(--black-25);
			.container {
				display: flex;
				align-items: center;
				padding: 0 30px 0 20px;
			}
		}
		&__divider {
			size: 0 20px;
			margin: 0 5px;
			opacity: 0.4;
			border-left: solid 1px #fff;
			border-left: solid 1px var(--whited);
		}
		&__link {
			padding: 0 15px;
			font-size: 13px;
			font-weight: 600;
			color: #fff;
			color: var(--whited);
			line-height: 40px;
			box-shadow: inset 0 2px 0 transparent;
			transition:
  			color .3s ease-in-out,
  			box-shadow .3s ease-in-out;
			&._active {
				box-shadow: inset 0 -2px 0 #fff;
				box-shadow: inset 0 -2px 0 var(--whited);
			}
      &._logout {
        position: absolute;
        right: 30px;
      }
			&:first-child {
				padding-left: 12px;
			}
		}
		&__link-icon {
			vertical-align: middle;
			margin: 0 4px 4px 0;
			width: 18px;
			line-height: 45px;
			stroke-width: 2;
			stroke: #fff;
			stroke: var(--whited);
		}
	}

</style>
