<template lang="html">
    <nav :class="{ '_menu-is-opened' : partnerMenuIsOpened }" class="partner-menu">
		<p class="partner-menu__title">Выберите:</p>
		<ul class="partner-menu-list">
			<li v-for="( linkItem , index ) in Links" :key="index"
				class="partner-menu-item">
				<router-link :to="{ name : linkItem.route , query: linkItem.query }" class="partner-menu-item__link">{{ linkItem.text }}</router-link>
			</li>
		</ul>
		<a :href="bankLink" class="partner-menu__link">Перейти на сайт банка ></a>
		<img src="/static/assets/header/bars.png" alt="АКБ Барс официальный партнёр"
                class="partner-menu__image" />
    </nav>
</template>

<script>

    export default {
        name: "partner-menu",
        data() {
            return {
				Links: [
					{
						route: '/',
						text: 'Оплата услуг'
					},
					{
						text: 'Настройки',
						route: 'settings',
						query: {
							section: 'common'
						}
					},
					{
						route: 'support',
						text: 'Поддержка',
						query: {
							section: 'opened'
						}
					}
				],
				bankLink: '//akbars.ru'
            }
        },
		computed: {
		    partnerMenuIsOpened() {
		        return this.$store.state.Header.partnerMenuIsOpened
		    }
		}
    };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .partner-menu {
		position: absolute 62.5px 37px auto auto;
    	opacity: 0;
		visibility: hidden;
		size: 240px 160px;
		padding: 15px 20px;
		background-color: #fff;
		background-color: var(--whited);
		transform: translateY( -10% );
		transition:
			opacity .2s ease-in-out,
			visibility .2s ease-in-out,
			transform .2s ease-in-out;
		@include MDShadow-4;
		&:hover,
		&._menu-is-opened {
			opacity: 1;
			visibility: visible;
			transform: translateY( 0 )
		}
		&::before {
			position: absolute -15px auto auto 40px;
			content: '';
			size: 0;
			border-style: solid;
			border-width: 0 10px 15px 10px;
			border-color: transparent transparent #fff transparent;
			border-color: transparent transparent var(--whited) transparent;
		}
		&__title {
			margin: 0;
			font-size: 13px;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__link {
			display: block;
			margin-top: 20px;
			font-size: 12px;
			color: #009d2f;
			color: var(--irish-green);
		}
		&__image {
			position: absolute 15px 20px auto auto;
			size: 65px 30px;
			object-fit: contain;
		}
    }

	.partner-menu-list {
		margin-top: 8px;
	}
	.partner-menu-item {
		&__link {
			font-size: 12px;
			line-height: 1.75;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}
	}

</style>
