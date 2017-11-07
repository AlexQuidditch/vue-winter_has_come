<template lang="html">
  <transition-group name="fade" mode="out-in" appear>
    <section v-if="canResponse()"
             key="response"
             class="task-response">
      <h4 class="task-response__title">Откликнуться:</h4>
      <response-form :id="id" @emitResponse="$emit( 'emitResponse' , $event )"></response-form>
    </section>
    <section key="haveResponses" class="task-response">
      <h4 class="task-response__title">{{ taskItem.responses.length ? 'Отклики:' : 'Пока что нет откликов... ' }}</h4>
      <transition-group name="list" tag="ul" class="response-list">
        <response-item v-for="responseID in taskItem.responses" :key="responseID"
                       :ResponseID="responseID"
                       :taskItem="taskItem"
                       v-on="$listeners"
                       >
        </response-item>
      </transition-group>
    </section>
  </transition-group>
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
      },
      'id': {
        type: String,
        required: true
      }
    },
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      }
    },
    methods: {
      log() {
        console.log(
          this.canResponse,
          this.taskItem.authorID !== this.currentUserID,
          this.taskItem.completed.status == 'notCompleted',
          !this.taskItem.isEngaged
        );
      },
      canResponse() {
        return this.taskItem.authorID !== this.currentUserID && this.taskItem.completed.status == 'notCompleted' && !this.taskItem.isEngaged;
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
