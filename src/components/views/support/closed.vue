<template lang="html">
	<section class="support _closed">
		<h3 class="support__title">Закрытые обращения:</h3>
	</section>
</template>

<script>

    export default {
        name: "support_closed"
	};

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

	.support {
		padding: 30px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
		&._closed {}
		&__title {
			font-size: 18px;
			font-weight: 600;
			color: #009d2f;
			color: var(--irish-green);
		}
	}

</style>
