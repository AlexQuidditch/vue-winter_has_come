<template lang="html">
	<nav class="settings-navigation">
		<router-link v-for="( route , index ) in Routes" :key="index"
								 :to="{ name: route.name || 'settings' , query: route.query }"
								 class="settings-navigation__link waves-effect waves-dark"
			>{{ route.text }}
		</router-link>
	</nav>
</template>

<script>

	export default {
		name: "Navigation-Panel",
		data: () => ({
      Routes: [
        {
          text: 'Общие настройки',
          query: {
            section: 'common'
          }
        },
        {
          text: 'Настройки конфиденциальности',
          query: {
            section: 'confidential'
          }
        },
        {
          text: 'Настройки оплаты',
          query: {
            section: 'payments'
          }
        },
        {
          text: 'Обо мне',
          query: {
            section: 'about'
          }
        }
      ]
    })
	};

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

	.settings-navigation {
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
		}
	}

</style>
