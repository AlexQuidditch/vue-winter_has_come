<template lang="html">
    <header class="header">
		<div class="header-row _first">
			<img src="../../../static/assets/header/logo.png"
			     	class="header__logo" />
			<search></search>
			<partner></partner>
		</div>
		<nav class="header-row _second">
			<router-link to="/" class="header-row__link">Найти работу</router-link>
			<div class="header-row__devider"></div>
			<router-link to="/" class="header-row__link">Исполнители</router-link>
			<router-link to="/" class="header-row__link">Агенты</router-link>
			<router-link to="/" class="header-row__link">Команды</router-link>
		</nav>
    </header>
</template>

<script>

	import search from './header/search';
	import partner from './header/partner';

    export default {
        name: "header",
		components: { search , partner },
        data() {
            return {}
        }
    }

</script>

<style lang="scss">

    .header {
    	z-index: 900;
        position: fixed;
        top: 0;
		width: 100%;
		max-width: 1180px;
		&__logo {
            size: 164px 17px;
			height: 100%;
			object-fit: contain;
		}
    }

	.header-row {
		&._first {
			display: flex;
			justify-content: space-between;
			height: 60px;
			padding: 0 30px;
			background-color: #f8f8f8;
			background-color: var(--white-two);
		}
		&._second {
			display: flex;
			align-items: center;
			height: 40px;
			padding: 0 30px;
			background-color: #009d2f;
			background-color: var(--irish-green);
			box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
			box-shadow: 0 0 5px 0 var(--black-25);
		}
		&__devider {
			width: 0;
			height: 20px;
			margin: 0 5px;
			opacity: 0.4;
			border-left: solid 1px #ffffff;
			border-left: solid 1px var(--whited);
		}
		&__link {
			padding: 0 15px;
			font-size: 13px;
			font-weight: 600;
			color: #ffffff;
			color: var(--whited);
			line-height: 40px;
			box-shadow: inset 0 2px 0 transparent;
			transition:
				color .3s ease-in-out,
				box-shadow .3s ease-in-out;
			&:first-child {
				padding-left: 0;
			}
			&._active {
				box-shadow: inset 0 -2px 0 #fff;
				box-shadow: inset 0 -2px 0 var(--whited);
			}
		}
	}

</style>
