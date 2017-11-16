<template lang="html">
  <main class="main _find-job">
    <section class="find-job">
      <navigation-panel></navigation-panel>
      <search-task @searchByTitle="searchByTitle($event)"></search-task>
      <transition-group tag="ul" name="list" mode="out-in" class="find-job _all">
        <task-item v-for="( taskItem , index ) in Tasks" :key="taskItem._id"
                   :taskItem = "taskItem">
        </task-item>
        <h3 v-if="!Tasks.length" key="no-content" class="no-result-to-display">Нет контента для отображения</h3>
      </transition-group>
    </section>
    <filter-panel @searchByTown="searchByTown($event)" @searchByBudget="searchByBudget($event)"></filter-panel>
  </main>
</template>

<script>

  import filterPanel from './find-job/filter-panel.vue';
  import searchTask from './find-job/search-task.vue';
  import navigationPanel from './find-job/navigation-panel.vue';

  import taskItem from '@templates/task-item.vue';

  export default {
    name: "Find-Job",
    components: { filterPanel , searchTask , navigationPanel, taskItem },
    data: () => ({
      Tasks: []
    }),
    computed: {
      storeTasks() {
        return this.$store.state.Tasks
      },
      currentUserID() {
        return this.$store.state.User._id;
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        return vm.$store.dispatch('getTasks')
          .then( response => {
            if ( response.length ) {
              switch ( to.query.section ) {
                case 'all':
                  vm.Tasks = vm.storeTasks
                    .filter( task => task.completed.status === 'notCompleted' );
                  break;
                case 'rush':
                  vm.Tasks = vm.storeTasks
                    .filter( task => task.completed.status === 'notCompleted' && task.isRush );
                  break;
                case 'active':
                  vm.Tasks = vm.storeTasks
                    .filter( task => ( task.completed.status === 'notCompleted' && ( vm.currentUserID === task.engagedID || vm.currentUserID === task.authorID ) ) );
                  break;
                case 'completed':
                  vm.Tasks = vm.storeTasks
                    .filter( task => ( task.completed.status !== 'notCompleted' && ( vm.currentUserID === task.engagedID || vm.currentUserID === task.authorID ) ) );
                  break;
                default:
                  vm.Tasks = vm.storeTasks
                    .filter( task => task.completed.status === 'notCompleted' );
                return;
              }
            }
          })
      })
    },
    beforeRouteUpdate ( to , from , next ) {
      this.createTaskList( to.query.section );
      next();
    },
    methods: {
      searchByTitle( query ) {
        if ( query.length ) {
          this.Tasks = this.Tasks
            .filter( task => task.title.includes( query ) );
        } else {
          this.createTaskList( this.$route.query.section );
        }
      },
      searchByTown( query ) {
        if ( query.length ) {
          this.Tasks = this.Tasks
            .filter( task => task.town.includes( query ) );
        } else {
          this.createTaskList( this.$route.query.section );
        }
      },
      searchByBudget( query ) {
        if ( query.length ) {
          this.Tasks = this.Tasks
            .filter( task => task.budget.includes( query ) );
        } else {
          this.createTaskList( this.$route.query.section );
        }
      },
      createTaskList( section ) {
        switch ( section ) {
          case 'all':
            this.Tasks = this.storeTasks
              .filter( task => task.completed.status === 'notCompleted' );
            break;
          case 'rush':
            this.Tasks = this.storeTasks
              .filter( task => task.completed.status === 'notCompleted' && task.isRush );
            break;
          case 'active':
            this.Tasks = this.storeTasks
              .filter( task => ( task.completed.status === 'notCompleted' && ( this.currentUserID === task.engagedID || this.currentUserID === task.authorID ) ) );
            break;
          case 'completed':
            this.Tasks = this.storeTasks
              .filter( task => ( task.completed.status !== 'notCompleted' && ( this.currentUserID === task.engagedID || this.currentUserID === task.authorID ) ) );
            break;
          default:
            this.Tasks = this.storeTasks
              .filter( task => task.completed.status === 'notCompleted' );
        }
      }
    }
  };

</script>

<style lang="scss">

.main._find-job {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 30px;
}

.find-job {
  width: 100%;
  max-width: 690px;
  &__no-content-message {
    margin-top: 20px;
    text-align: center;
  }
}

</style>
