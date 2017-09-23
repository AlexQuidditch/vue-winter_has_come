<template lang="html">
  <aside class="wall-filter">
		<v-radio v-for="filter in filterList" :key="filter.value"
             v-model="filterBy"
             :value="filter.value"
             name="sorting"
			       :expected="filter.value"
             class="wall-filter__radio"
      >{{ filter.text }}
		</v-radio>
  </aside>
</template>

<script>

  import vRadio from '@custom-elements/vue-radio';

  export default {
    name: "wall-filter",
    components: { vRadio },
    data: () => ({
      filterList: [
        {
          value: 'all',
          text: 'Все посты'
        },
        {
          value: 'interests',
          text: 'Интересные'
        },
        {
          value: 'photo',
          text: 'Фотографии'
        },
        {
          value: 'updates',
          text: 'Обновления'
        },
        {
          value: 'comments',
          text: 'Комментарии'
        }
      ],
      filterBy: 'all'
    })
  };

</script>

<style lang="scss">

  @import "../../../../stylesheets/partials/_mixins.scss";

  .wall-filter {
    position: sticky;
    top: 48px;
    display: flex;
    flex-flow: column;
    size: 205px 485px;
    padding: 15px 20px 30px 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__radio {
      margin: 7.5px 0;
      .material-radio-wrapper {
        size: 18px !important;
      }
      .material-radio-label {
        height: 18px !important;
        font-size: 14px !important;
        line-height: 18px !important;
      }
    }
  }

</style>
