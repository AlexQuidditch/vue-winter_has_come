<template lang="html">
	<wrapper>
		<layout-header></layout-header>
		<div class="container _main">
			<layout-sidebar></layout-sidebar>
			<layout-main></layout-main>
		</div>
		<!-- <layout-footer></layout-footer> -->
	</wrapper>
</template>

<script>

	import auth from '@/router/auth.js';

	import wrapper from '@custom-elements/wrapper';
	import layoutHeader from '@layout/header';
	import layoutSidebar from '@layout/sidebar';
	import layoutMain from '@layout/main';
	import layoutFooter from '@layout/footer';

	export default {
		name: 'Winter-has-Come',
		components: { wrapper , layoutHeader , layoutSidebar , layoutMain ,layoutFooter },
		beforeCreate() {
			// firebase.auth().onAuthStateChanged( user => {
			// 	if ( user ) {
			// 		this.user = user;
			// 	} else {
			// 		firebase.auth().signInAnonymously()
			// 			.catch( console.error )
			// 	}
			// }),
			auth.onChange = loggedIn => {
				this.$store.dispatch( 'changeAuth' , !!window.localStorage.token );
				loggedIn === false
				? this.isExpanded = false
				: this.isExpanded = true
			}
		},
		methods: {
			toggleSize() {
				this.$store.state.Auth.isLoggedIn == true
				? this.isExpanded =! this.isExpanded
				: this.isExpanded = false
			}
		},
		mounted() {
			this.$nextTick( () => Waves.init() );
		}
	};

</script>

<style src="normalize-css/normalize.css" lang="css"></style>
<style src="node-waves/dist/waves.css" lang="css"></style>

<style lang="scss">

	@import "./stylesheets/partials/_layout";
	@import "./stylesheets/partials/_mixins";
	@import "./stylesheets/partials/_variables";

	@import "./stylesheets/layout/resets";

	:root {
		--black-25: rgba(0, 0, 0, 0.25);
		--charcoal-grey: #4a4a4a;
		--irish-green: #009d2f;
		--white-two: #f8f8f8;
  		--purpley-grey: #4b4b4b;
		--purpley-grey-20: rgba(75, 75, 75, 0.5);
		--pale-grey: #f0f4f7;
		--scarlet: #d0011b;

		--whited: white;
		--blacked: black;

		--accent-color: var(--irish-green);
		--descent-color: var(--white);
	}

	html , body {
		font-size: 16px;
	}
	body {
		height: 100%;
		font-family: 'Lato', Arial, sans-serif;
		-webkit-tap-highlight-color: transparent;
		background-color: #f0f4f7;
		background-color: var(--pale-grey);
		::selection {
			color: #fff;
			color: var(--whited);
			background-color: #009d2f;
			background-color: var(--irish-green);
		}
	}
	.wrapper {
		position: relative;
		width: 100%;
		color: #4a4a4a;
		color: var(--charcoal-grey);
		@include font-smoothing;
	}

	.container {
		size: 100% auto;
		min-height: 100%;
		max-width: 1180px;
		margin: 0 auto;
		&._main {
			display: flex;
			flex-flow: row wrap;
			align-items: stretch;
		}
	}

	.main {
		padding: 30px;
	}

	button {
		cursor: pointer;
	}

	@include waves-light( #fff , $ripple-opacity);
	@include waves-dark( #009d2f , $ripple-opacity);

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	.fade-move {
		transition: transform 1s ease-in-out;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition:
			opacity .3s ease-in-out,
			transform .3s ease-in-out
	}

	.fade-fast-enter,
	.fade-fast-leave-to {
		opacity: 0;
	}
	.fade-fast-enter-active,
	.fade-fast-leave-active {
		transition:
			opacity .15s ease-in-out,
			transform .15s ease-in-out
	}

	.list-enter,
	.list-leave-to {
		opacity: 0;
		transform: scale(0.9);
	}
	.list-move {
		transition: .3s ease-in-out
	}
	.list-enter-active,
	.list-leave-active {
		transition: .3s ease-in-out
	}

	.vb > .vb-dragger {
    z-index: 5;
    width: 8px;
    right: 0;
		padding: 10px 0;
	}

	.vb > .vb-dragger > .vb-dragger-styler {
		display: block;
		height: 100%;
		margin: 0;
    background-color: rgba( #009d2f , 0);
    border-radius: 5px;
		backface-visibility: hidden;
		transform: rotate3d(0,0,0,0);
		transition:
			background-color 150ms ease-out,
	}

	.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba( #009d2f , .3);
	}

	.vb > .vb-dragger:hover > .vb-dragger-styler,
	.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
		background-color: rgba( #009d2f , .75);
	}

	.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba( #009d2f , .5);
	}

</style>
