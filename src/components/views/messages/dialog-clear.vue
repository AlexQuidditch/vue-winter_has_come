<template lang="html">
  <div class="dialog-clear">
		<icon-send :Color="'rgba(0, 157, 47, .5)'"
							 class="dialog-clear__icon">
		</icon-send>
		<h3 class="dialog-clear__title">Выберите диалог</h3>
  </div>
</template>

<script>

	import iconSend from '@icons/send.vue';

  export default {
		name: "dialog-clear",
		components: { iconSend }
	};

</script>

<style lang="scss">

	.dialog-clear {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		width: 920px;
		padding: 20px;
		border-left: solid 1px rgba( #9b9b9b , .3 );
		&__icon {
			size: 200px;
		}
		&__title {}
	}

</style>
