<template lang="html">
  <transition appear>
    <section v-if="taskItem.authorID === currentUserID"
             class="task-response">
      <h4 class="task-response__title">Отклики:</h4>
      <transition-group name="list" tag="ul" class="response-list">
        <response-item v-for="( responseItem , index ) in Responses" :key="index"
                       :responseItem="responseItem">
        </response-item>
      </transition-group>
    </section>
    <section v-else class="task-response">
      <h4 class="task-response__title">Откликнуться:</h4>
      <response-form></response-form>
    </section>
  </transition>
</template>

<script>

  import responseItem from '@templates/response-item.vue';
  import ResponseForm from './response-form.vue';

  export default {
    name: "task-response",
    components: { responseItem , ResponseForm },
    props: {
      'taskItem': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      Responses: [
        {
          authorID: 1,
          postedAgo: 12,
          feedBack: 'Готова выполнить! Пишите! Работу выполняю быстро, ответственно. Для примера смотрите мое портфолио.',
          caption: 'Здесь находится подпись. Например, контакты. Заполняется в настройках.',
          isEngage: true
        },
        {
          authorID: 2,
          postedAgo: 5,
          feedBack: 'Готова выполнить! Пишите! Работу выполняю быстро, ответственно. Для примера смотрите мое портфолио.',
          caption: 'Здесь находится подпись. Например, контакты. Заполняется в настройках.',
          isEngage: false
        },
        {
          authorID: 3,
          postedAgo: 22,
          feedBack: 'Здравствуйте! Сделаю оперативно, имею достаточный опыт в подобных проектах.',
          caption: 'Всегда на связи. Телефон: 8 (800) 555 35-35',
          isEngage: false
        }
      ]
    }),
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins";

  .task-response {
    &__title {
      margin: 20px;
      font-size: 18px;
      font-weight: 600;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
  }

</style>
