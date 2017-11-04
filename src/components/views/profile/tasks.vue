<template lang="html">
  <section :class="{ '_folded' : isFolded }" class="tasks">
    <icon-case :Width="1" class="tasks__icon"></icon-case>
		<h3 class="tasks__title">Мои задания</h3>
    <button @click="foldSection()"
            class="tasks__fold-button waves-effect waves-dark"
            type="button" name="fold-portfolio"
      >{{ isFolded ? 'Развернуть' : 'Свернуть' }}
    </button>
		<transition-group tag="ul" name="list" mode="out-in" class="tasks-list">
			<tasks-item v-for="( tasksID , index ) in Tasks" :key="tasksID"
									:tasksID="tasksID">
			</tasks-item>
		</transition-group>
  </section>
</template>

<script>

  import IconCase from '@icons/case.js';
	import tasksItem from '@templates/tasks-item.vue';

	export default {
		name: "tasks",
		components: { tasksItem , IconCase },
    data: () => ({ isFolded : false }),
		computed: {
			Tasks() {
				return this.$store.state.User.tasks;
			}
		},
    methods: {
      foldSection() {
        this.isFolded =! this.isFolded
      }
    }
	};

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

	.tasks {
    overflow: hidden;
    position: relative;
		display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    size: 100% 300px;
    padding: 20px 30px 0 30px;
    transition: height .4s ease;
    &._folded {
      height: 68px;
    }
		&__title {
			margin-left: 10px;
			font-size: 18px;
			line-height: 28px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__subtitle {
			width: 100%;
			margin: 10px 0 0 0;
			font-size: 12px;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
    &__fold-button {
      position: absolute;
      top: 20px; right: 30px;
      size: 100px 28px;
      margin: 0; padding: 0;
      font-family: 'Lato', Arial, sans-serif;font-size: 12px;
      font-weight: 600;
      line-height: 28px;
      background-color: #fff;
      background-color: var(--whited);
      border-radius: 3px;
      border: none;
      transition: box-shadow .3s ease-in-out;
      @include MDShadow-1;
    }
	}

	.tasks-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 20px 0 0 0;
	}

</style>
