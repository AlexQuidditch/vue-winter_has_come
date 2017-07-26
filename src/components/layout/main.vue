<template lang="html">
	<transition name="fade" mode="out-in" appear>
		<router-view></router-view>
	</transition>
</template>

<script>

    export default {
        name: "main",
    }

</script>

<style lang="scss">

    .main {
    	position: relative;
    	top: 100px;
		width: 975px;
		min-height: calc( 100vh - 100px );
		padding: 30px;
		background-color: #f0f4f7;
		background-color: var(--pale-grey);
    }

</style>
