<template lang="html">
    <main class="main">
		<section id="login-page" class="login-page">
			<h1>{{ 'login page'.toUpperCase() }}</h1>
			<router-link :to="{ name: 'main-page' }">main-page</router-link>
	    </section>
    </main>
</template>

<script>

    export default {
        name: "login-page",
        data() {
            return {

            }
        }
    }

</script>

<style lang="scss">

    .login-page {}

</style>
