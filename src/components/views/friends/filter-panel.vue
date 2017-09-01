<template lang="html">
    <aside class="filter-panel">
		<h4 class="filter-panel__title">Сортировать:</h4>
		<v-radio v-model="Filter.sortByLast"
			name="sorting"
			:expected="false"
			>По популярности
		</v-radio>
		<v-radio v-model="Filter.sortByLast"
			name="sorting"
			:expected="true"
			>Последние
		</v-radio>
		<div class="filter-panel__divider"></div>
		<h5 class="filter-panel__title">Профиль:</h5>
		<input v-model="Filter.gender"
			type="text" placeholder="Введите..." name="gender"
			class="filter-panel__input" />
		<h6 class="filter-panel__title">Город:</h6>
		<input v-model="Filter.town"
			type="text" placeholder="Введите..." name="town"
			class="filter-panel__input" />
		<h6 class="filter-panel__title">Учебное заведение:</h6>
		<input v-model="Filter.education"
			type="text" placeholder="Введите..." name="education"
			class="filter-panel__input" />
		<h6 class="filter-panel__title">Специальность:</h6>
		<input v-model="Filter.specialization"
			type="text" placeholder="Введите..." name="specialization"
			class="filter-panel__input" />
    </aside>
</template>

<script>

	import vRadio from '@custom-elements/vue-radio';

	export default {
		name: "filter-panel",
		components: { vRadio },
		data() {
			return {
				Filter: {
					sortByLast: true,
					gender: '',
					town: '',
					education: '',
					specialization: ''
				}
			}
		}
	};

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .filter-panel {
		position: sticky;
		top: 130px;
    	display: flex;
		flex-flow: column;
		size: 205px 485px;
		padding: 15px 20px 30px 20px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
		&__title {
			margin: 0 0 10px 10px;
			font-size: 13px;
			font-weight: 600;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		.material-radio__component {
			margin: 5px 0;
		}
		&__divider {
			margin: 20px 0;
			border-bottom: solid 1px rgba( #4b4b4b , .4 );
		}
		&__input {
			margin: 5px 0 20px 0;
			padding: 0 15px;
			height: 35px;
			font-family: 'Lato', Arial, sans-serif;
			font-size: 12px;
			line-height: 35px;
			color: #4b4b4b;
			color: var(--purpley-grey);
			border-radius: 3px;
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
			&:last-child {
				margin: 0;
			}
			&::placeholder {
				font-family: 'Lato', Arial, sans-serif;
				font-size: 12px;
				line-height: 35px;
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
    }

</style>
