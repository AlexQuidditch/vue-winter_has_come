<template lang="html">
    <form @submit.prevent="searchByRequest(request)" class="search">
		<label for="search-field" class="search-field">
			<img :src="icon" alt=""
				class="search-field__icon" />
			<input v-model="request" placeholder="Найдите задание своей мечты..."
				id="search-field" name="search-field"
				class="search-field__input" />
		</label>
		<button type="submit" name="Find"
			class="search-field__button"
			>Найти
		</button>
    </form>
</template>

<script>

    export default {
        name: "search",
        data() {
            return {
				icon: '../../../../static/assets/header/ic-search-24-px.svg',
				request: ''
            }
        },
		methods: {
		    searchByRequest(q) {
		        this.$swal( 'Идёт поиск...' , q , 'info' )
		    }
		}
    }

</script>

<style lang="scss">

    .search {
    	display: flex;
		align-items: center;
    }

	.search-field {
		display: flex;
		align-items: center;
		size: 455px 30px;
		padding: 0 15px;
		border-radius: 3px;
		background-color: #ffffff;
		background-color: var(--whited);
		border: none;
		&__icon {}
		&__input {
			width: 90%;
			margin-left: 10px;
			border: none;
			&::placeholder {
				font-size: 12px;
				line-height: 1.5;
				color: #9b9b9b;
				color: var(--purpley-grey);
			}
			&:focus {
				outline: none;
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
		}
	}

</style>
