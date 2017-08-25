<template lang="html">
	<transition name="fade" mode="out-in" appear>
		<router-view></router-view>
	</transition>
</template>

<script>

    export default { name: "main" }

</script>

<style lang="scss">

    .main {
    	margin-top: 100px;
		width: 975px;
    }

</style>
