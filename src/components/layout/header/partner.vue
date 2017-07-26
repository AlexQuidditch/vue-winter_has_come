<template lang="html">
    <div class="partner">
		<img src="../../../../static/assets/header/bars.png" alt="АКБ Барс официальный партнёр"
			 class="partner__image" />
    </div>
</template>

<script>

    export default {
        name: "partner",
        data() {
            return {

            }
        }
    }

</script>

<style lang="scss">

    .partner {
    	size: 207px 60px;
		background-color: rgba(155, 155, 155, 0.2);
		background-color: var(--purpley-grey-20);
		&__image {
			object-fit: contain;
			height: 100%;
		}
    }

</style>
