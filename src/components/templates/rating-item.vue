<template lang="html">
	<li class="ratings-item">
		<img :src=" '/static/assets/profile/ratings/' + Item.icon " :alt="Item.text"
				class="ratings-item__icon" />
		<span v-if="!Item.value == 0"
			class="ratings-item__value">
			{{ Item.value }}
		</span>
		<span v-if="Item.value == 0"
			class="ratings-item__value">
			{{ Item.total + ' / ' + Item.rate }}
		</span>
		<p class="ratings-item__text">{{ Item.text }}</p>
	</li>
</template>

<script>

    export default {
        name: "ratings-item",
		props: {
		    'Item': {
		        type: Object,
		        required: true
			}
		}
    };

</script>

<style lang="scss" scoped>

	.ratings-item {
		width: 30%;
		margin-top: 10px;
		&__icon {
			display: block;
			size: 22px;
			margin: 0 auto;
			object-fit: contain;
		}
		&__value {
			display: block;
			width: 100%;
			margin: 5px auto;
			text-align: center;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__text {
			margin: 0;
			text-align: center;
			font-size: 12px;
			line-height: 1.5;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}
	}

</style>
