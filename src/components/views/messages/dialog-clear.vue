<template lang="html">
  <div class="dialog-clear">
		<icon-send></icon-send>
  </div>
</template>

<script>

	import iconSend from '@icons/send.vue';

  export default {
		name: "dialog-clear",
		components: { iconSend },
	};

</script>

<style lang="scss">

	.dialog-clear {
		width: 920px;
		padding: 20px;
	}

</style>
