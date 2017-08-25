<template lang="html">
    <aside class="job-filter-panel">
		<h4 class="job-filter-panel__title _first">Специализация:</h4>
		<form @submit.prevent="addKeyword(Filter.keyword)" class="job-filter-panel__label _keyword">
			<input v-model="Filter.keyword"
				type="text" placeholder="Введите..." name="keyword" required
				id="keyword" class="job-filter-panel__input _keyword" />
			<button class="job-filter-panel__label-button"
				type="submit" name="addKeyword"
				>+
			</button>
		</form>
		<transition-group tag="ul" name="list">
			<v-chip v-for="( keywordItem , index ) in Filter.Keywords" :key="index"
				:word="keywordItem"
				@remove="remove(index)">
			</v-chip>
		</transition-group>
		<label for="town" class="job-filter-panel__label">
			<h6 class="job-filter-panel__title">Город:</h6>
			<input v-model="Filter.town"
				type="text" placeholder="Введите..." name="town"
				id="town" class="job-filter-panel__input" />
		</label>
		<label for="budget" class="job-filter-panel__label">
			<h6 class="job-filter-panel__title">Бюджет:</h6>
			<input v-model="Filter.budget"
				type="text" placeholder="Введите..." name="education"
				id="budget" class="job-filter-panel__input" />
		</label>
    </aside>
</template>

<script>

	import vRadio from '@custom-elements/vue-radio';
	import vChip from '@custom-elements/vue-chip';

    export default {
        name: "filter-panel",
		components: { vRadio , vChip },
        data() {
            return {
				Filter: {
					keyword: '',
					Keywords: [],
					town: '',
					budget: ''
				}
            }
        },
		methods: {
			addKeyword(word) {
				this.Filter.Keywords.push(word);
				this.Filter.keyword = '';
			},
			remove( i ) {
				this.Filter.Keywords.splice( i , 1 );
			}
		}
    }

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .job-filter-panel {
		position: sticky;
		top: 130px;
    	display: flex;
		flex-flow: column;
		size: 205px 500px;
		padding: 15px 20px 30px 20px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
		&__title {
			margin: 20px 0 15px 0;
			font-size: 13px;
			font-weight: 600;
			color: #4a4a4a;
			color: var(--charcoal-grey);
			&._first {
				margin-top: 0;
			}
		}
		&__label {
			position: relative;
			&._keyword {
				margin-bottom: 5px;
			}
		}
		&__label-button {
			position: absolute;
			top: 0;
			right: 0;
			padding: 0;
			size: 35px;
			font-size: 22px;
			color: #4b4b4b;
			color: var(--purpley-grey);
			background-color: transparent;
			border: none;
		}
		&__input {
			padding: 0 15px;
			size: 100% 35px;
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
			&._keyword {
				padding-right: 40px;
			}
		}
    }

</style>
