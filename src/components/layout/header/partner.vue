<template lang="html">
    <div class="partner">
		<img src="/static/assets/header/chevron-down.svg" alt="Меню"
				class="partner__arrow">
		<img src="/static/assets/header/bars.png" alt="АКБ Барс официальный партнёр"
			 class="partner__image" />
		<p class="partner__title">Официальный партнёр</p>
    </div>
</template>

<script>
    export default { name: "partner" };
</script>

<style lang="scss">

    .partner {
    	position: relative;
    	display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
    	size: 267px 60px;
		padding: 0 30px;
		text-align: left;
		background-color: inherit;
		cursor: pointer;
		&:hover + .partner-menu {
			opacity: 1;
			visibility: visible;
			transform: translateY( 0 )
		}
		&__arrow {
			width: 20px;
		}
		&__image {
			width: 65px;
			object-fit: contain;
		}
		&__title {
			width: 90px;
			font-size: 12px;
			line-height: 1.5;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
    }

</style>
