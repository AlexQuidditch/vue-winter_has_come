<template lang="html">
	<label for="search-task" class="search-task">
		<img src="/static/assets/header/ic-search-24-px.svg" alt="Поиск..."
			class="search-task__icon" />
		<input v-model="request" @input="searchByRequest(request)"
    			 placeholder="Поиск по названию"
    			 id="search-task" name="search-task"
    			 class="search-task__input" />
    <transition name="fade">
      <button v-if="request.length" @click.prevent="clearRequest()"
              type="button" aria-label="Очистить запрос"
              class="search-task__clear-button">
        <icon-close class="search-task__clear-icon"></icon-close>
      </button>
    </transition>
	</label>
</template>

<script>

  import IconClose from '@icons/close.js';

  export default {
    name: "Search-Task",
    components: { IconClose },
    data: () => ({ request: '' }),
    methods: {
      searchByRequest( q ) {
        this.$emit( 'searchByTitle' , q );
      },
      clearRequest() {
        this.request = '';
        this.searchByRequest( '' );
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
    &__clear-button {
      position: absolute;
      top: 0; right: 0;
      size: 35px;
			background-color: transparent;
			border: none;
    }
    &__clear-icon {
      display: inline-block;
      vertical-align: middle;
      size: 20px;
      border-radius: 3px;
      fill: #fff;
      fill: var(--whited);
      background-color: #d0011b;
      background-color: var(--scarlet);
      @include MDShadow-1;
    }
	}

</style>
