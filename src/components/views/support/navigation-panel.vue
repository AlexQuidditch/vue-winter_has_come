<template lang="html">
	<nav class="support-navigation">
		<router-link v-for="( route , index ) in Routes" :key="index"
			:to="{ name: route.name || 'support' , query: route.query }"
			:class="[ Routes.indexOf( route ) === Routes.length - 1 ? 'waves-light' : 'waves-dark' ]"
			class="support-navigation__link waves-effect"
			>{{ route.text }}
		</router-link>
	</nav>
</template>

<script>

    export default {
        name: "navigation-panel",
		data() {
		    return {
				Routes: [
					{
						text: 'Открытые обращения',
						query: {
							section: 'opened'
						}
					},
					{
						text: 'Закрытые обращения',
						query: {
							section: 'closed'
						}
					},
					{
						text: 'Новое обращение',
						query: {
							section: 'newReq'
						}
					}
				]
		    }
		}
	 };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .support-navigation {
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
				right: 0;
				width: 150px;
				height: 45px;
				text-align: center;
				font-weight: 600;
				color: #fff;
				color: var(--whited);
				background-color: #009d2f;
				background-color: var(--irish-green);
				@include MDShadow-1;
			}
    	}
    }

</style>
