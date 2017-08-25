<template lang="html">
	<li class="chip-item">
		<button @click="$emit('remove')"
			class="chip-item__remove"
			type="button"
			><icon-circle-minus class="chip-item__remove-icon"></icon-circle-minus>
		</button>
		<span class="chip-item__content">{{ word }}</span>
	</li>
</template>

<script>

	import iconCircleMinus from '@icons/minus-circle-bold';

	export default {
		name: "video",
		components: { iconCircleMinus },
		props: {
			word : {
				type: String,
				required: true
			}
		}
	};

</script>

<style lang="scss">

	@import '../../stylesheets/partials/_mixins';

	.chip-item {
		overflow: hidden;
		height: 25px;
		padding: 0 8px 0 0;
		margin: 5px 0;
		line-height: 25px;
		white-space: nowrap;
		text-overflow: ellipsis;
		border-radius: 3px;
		background-color: #fff;
		background-color: var(--whited);
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
		@include MDShadow-1;
		&__remove {
			height: 25px;
			padding: 0 10px;
			background-color: transparent;
			border: none
		}
		&__remove-icon {
			vertical-align: middle;
			size: 14px;
			stroke: #d0011b;
			stroke: var(--scarlet);
		}
		&__content {
			font-size: 10px;
			font-weight: 600;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
	}

</style>
