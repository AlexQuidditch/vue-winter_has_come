<template lang="html">
  <aside class="task-summary">
    <img :src=" backendLocation + '/upload/' + taskItem.attached[0] "
         alt="" class="task-summary__picture" />
    <p class="task-summary__item">Город: <span>{{ taskItem.town }}</span></p>
    <p class="task-summary__item">Необходимые навыки: <span>{{ taskItem.skills }}</span></p>
    <p class="task-summary__item">Специализация:</p>
    <ul class="task-summary__list specialization-list">
      <li v-for="( skillItem , index ) in taskItem.specialization" :key="index"
          :title="skillItem"
          class="specialization-item"
        >{{ skillItem }}
      </li>
    </ul>
    <p class="task-summary__item">Приклепленные файлы:</p>
    <ul class="attached-list">
      <li v-for="( attacheItem , index ) in taskItem.attached" :key="index"
          class="attached-item">
        <img :src=" backendLocation + '/upload/' + attacheItem "
             alt="" class="attached-item__picture" />
      </li>
    </ul>
  </aside>
</template>

<script>

  export default {
    name: "task-summary",
    props: {
      'taskItem': {
        type: Object,
        required: true
      }
    },
    computed: {
      backendLocation() {
        return this.$store.state.General
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins";

  .task-summary {
    position: sticky;
    top: 130px;
    width: 205px;
    min-height: 480px;
    padding: 20px;
    color: #4a4a4a;
    color: var(--charcoal-grey);
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__picture {
      display: block;
      size: 100% 115px;
      object-fit: contain
    }
    &__item {
      margin: 10px 0;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.46;
      word-wrap: break-word;
      span {
        color: #9b9b9b;
      }
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }

  .specialization-list {
    margin-bottom: 10px;
  }
  .specialization-item {
    overflow: hidden;
    height: 25px;
    padding: 0 15px;
    margin: 5px 0;
    font-size: 11px;
    font-weight: 600;
    line-height: 25px;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: inherit;
    border-radius: 3px;
    @include MDShadow-1;
  }

  .attached-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 5px;
  }
  .attached-item {
    size: 50px;
    margin: 5px 0;
    @include MDShadow-1;
    &__picture {
      size: 100%;
      object-fit: cover;
    }
  }

</style>
