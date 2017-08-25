<template lang="html">
    <form @submit.prevent="searchByRequest(request)" class="search">
		<label for="search-field" class="search-field">
			<img src="/static/assets/header/ic-search-24-px.svg" alt="Поиск..."
				class="search-field__icon" />
			<input v-model="request" placeholder="Найдите задание своей мечты..."
				id="search-field" name="search-field"
				class="search-field__input" />
		</label>
		<button type="submit" name="Find"
			class="search-field__button waves-effect waves-light"
			>Найти
		</button>
    </form>
</template>

<script>

    export default {
        name: "search",
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

    .search {
    	display: flex;
		align-items: center;
		margin-right: 32px;
    }

	.search-field {
		position: relative;
		&__icon {
			position: absolute 9px 0 0 14px;
		}
		&__input {
			display: flex;
			align-items: center;
			size: 455px 30px;
			padding: 0 15px 0 36px;
			font-size: 14px;
			line-height: 30px;
			border-radius: 3px;
			background-color: #ffffff;
			background-color: var(--whited);
			border: none;
			@include MDShadow-1;
			&::placeholder {
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
		&__button {
			display: block;
			size: 130px 30px;
			margin-left: 20px;
			font-size: 12px;
			font-weight: 500;
			color: #ffffff;
			color: var(--whited);
			background-color: #009d2f;
			background-color: var(--irish-green);
			border: none;
			border-radius: 3px;
			@include MDShadow-1;
		}
	}

</style>
