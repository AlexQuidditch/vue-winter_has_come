<template lang="html">
	<li class="portfolio-item">
		<input v-model="portfolioItem.title" type="text" name="title"
			placeholder="Название"
			class="portfolio-item__input" />
		<input v-model="portfolioItem.picture" type="text" name="picture"
			placeholder="Изображение"
			class="portfolio-item__input" />
		<textarea v-model="portfolioItem.description"
			name="description" rows="3" cols="40"
			placeholder="Описание"
			class="portfolio-item__textarea">
		</textarea>
		<input v-model="portfolioItem.link" type="text" name="link"
			placeholder="Ссылка"
			class="portfolio-item__input" />
		<input v-model="portfolioItem.repository" type="text" name="repository"
			placeholder="Репозиторий"
			class="portfolio-item__input" />
		<button @click="$emit( 'remove' )"
			class="portfolio-item__button waves-effect waves-light"
			>Удалить
		</button>
	</li>
</template>

<script>

    export default {
        name: "portfolio-item",
		props: {
		    'portfolioItem': {
		        type: Object,
		        required: true
			}
		}
    }

</script>

<style lang="scss">

	@import "../stylesheets/partials/_mixins";
	@import "../stylesheets/partials/_variables";

	.portfolio-item {
		width: 375px;
		padding: 8px 16px;
		margin: 16px 0;
		background-color: google-color( grey , 100 );
		@include MDShadow-1;
		transition: 1s ease-in-out;
		&__input,
		&__textarea {
			size: 100% auto;
			padding: 1rem;
			margin: 8px 0;
			font-size: 1rem;
			color: $red $whited;
			border: solid 3px $red;
			@include MDShadow-1;
			transition:
				box-shadow .3s ease-in-out,
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&::placeholder {
				color: google-color( blueGrey , 800 )
			}
		}
		&__button {
			@include MDButton( $whited , $red ) {
				size: 100% 3rem;
				line-height: 3rem;
			};
		}
		&._new-item {
			flex: none;
		}
	}

</style>
