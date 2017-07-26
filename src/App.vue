<template lang="html">
	<wrapper>
		<layout-header></layout-header>
		<layout-sidebar></layout-sidebar>
		<layout-main></layout-main>
		<layout-footer></layout-footer>
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
		data() {
		    return {}
		},
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
				loggedIn == false
				? this.isExpanded = false
				: this.isExpanded = true
			}
		},
		mounted() {
			this.$nextTick( () => {
				Waves.init();
				Waves.attach('[ripple-dark]', 'waves-dark');
				Waves.attach('[ripple-light]', 'waves-light');
			})
		},
		methods: {
		    toggleSize() {
				this.$store.state.Auth.isLoggedIn == true
				? this.isExpanded =! this.isExpanded
				: this.isExpanded = false
		    }
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
  		--purpley-grey: #9b9b9b;
		--purpley-grey-20: rgba(155, 155, 155, 0.2);
		--pale-grey: #f0f4f7;

		--whited: #fff;
		--blacked: #000;

		--accent-color: var(--irish-green);
		--descent-color: var(--white);

	}

	html , body {
		font-size: 16px;
	}
	body {
		height: 100%;
		-webkit-tap-highlight-color: transparent;
		background-color: #f8f8f8;
  		background-color: var(--white-two);
		::selection {
			background-color: #009d2f;
			background-color: var(--irish-green);
		}
	}
	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		width: 100%;
		max-width: 1180px;
		margin: 0 auto;
		min-height: 100vh;
		color: #4a4a4a;
		color: var(--charcoal-grey);
		background-color: #f8f8f8;
		background-color: var(--white-two);
		@include font-smoothing;
	}

	@include waves-light( $whited , .6 );
	@include waves-dark( $red , .6 );

	button {
		cursor: pointer;
	}

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

</style>
