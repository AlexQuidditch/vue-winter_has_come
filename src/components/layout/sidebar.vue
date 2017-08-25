<template lang="html">
    <aside class="aside">
		<user-info></user-info>
		<div class="divider"></div>
		<user-menu></user-menu>
		<div class="divider"></div>
		<recommendations></recommendations>
		<div class="divider"></div>
    </aside>
</template>

<script>

	import userInfo from '@layout/sidebar/user-info';
	import userMenu from '@layout/sidebar/user-menu';
	import recommendations from '@layout/sidebar/recommendations';

    export default {
        name: "aside",
		components: { userInfo , userMenu ,	recommendations },
        data() {
            return {}
        }
    }

</script>

<style lang="scss">

    .aside {
    	margin-top: 100px;
		width: 205px;
		padding: 30px;
		background-color: #ffffff;
		background-color: var(--whited);
		border: solid 1px rgba(151, 151, 151, 0.2);
    }

	.divider {
		height: 1px;
		opacity: 0.2;
		border-top: solid 1px #4b4b4b;
		border-top: solid 1px var(--purpley-grey);
	}

</style>
