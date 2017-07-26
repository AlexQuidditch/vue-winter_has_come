<template lang="html">
	<main class="main">
	</main>
</template>

<script>

    export default {
        name: "profile",
        data() {
            return {
				title: 'Hello'
            }
        },
		computed: {
		    Personal() {
		        return this.$store.state.User.personal
		    },
			Information() {
				return this.$store.state.User.information
			}
		}
    }

</script>

<style lang="scss">

    .profile {}

</style>
