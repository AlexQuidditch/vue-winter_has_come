<template lang="html">
	<label for="search-task" class="search-task">
		<img src="/static/assets/header/ic-search-24-px.svg" alt="Поиск..."
			class="search-task__icon" />
		<input v-model="request" @input="searchByRequest(request)"
			placeholder="Поиск по ключевым словам"
			id="search-task" name="search-task"
			class="search-task__input" />
	</label>
</template>

<script>

    export default {
        name: "search-task",
		data() {
			return {
				request: ''
			}
		},
		methods: {
		    searchByRequest(q) {
		        this.$swal( 'Идёт поиск...' , q , 'info' )
		    }
		}
    };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

	.search-task {
		position: relative;
		display: block;
		height: 35px;
		&__icon {
			z-index: 10;
			position: absolute 11px 0 0 14px;
		}
		&__input {
			display: flex;
			align-items: center;
			width: 100%;
			height: 35px;
			padding: 0 15px 0 36px;
			font-size: 14px;
			line-height: 35px;
			background-color: #fff;
			background-color: var(--whited);
			border: none;
			@include MDShadow-1;
			&::placeholder {
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
	}

</style>
