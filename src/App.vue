<template lang="html">
	<wrapper>
    <transition name="fade-long">
  		<layout-header v-if=" $route.path !== '/login' "></layout-header>
    </transition>
		<div class="container _main">
      <transition name="fade-long">
    		<layout-sidebar v-if=" $route.path !== '/login' "></layout-sidebar>
      </transition>
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
		name: 'VDele',
		components: { wrapper , layoutHeader , layoutSidebar , layoutMain ,layoutFooter },
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

	@import "./stylesheets/transitions.scss";

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
		@include font-smoothing;
		-webkit-tap-highlight-color: transparent;
	}
	body {
		height: 100%;
		font-family: 'Lato', Arial, sans-serif;
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
		min-height: 100vh;
		color: #4a4a4a;
		color: var(--charcoal-grey);
	}

	.container {
	  position: relative;
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
		border-radius: 0
	}

	@include waves-light( #fff , $ripple-opacity );
	@include waves-dark( #009d2f , $ripple-opacity );

  .no-result-to-display {
    width: 690px;
    padding: 30px;
    text-align: center;
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
