<template lang="html">
    <section class="tasks">
		<img src="/static/assets/profile/portfolio/case.svg" alt="Портфолио"
				 class="tasks__icon">
		<h3 class="tasks__title">Задания</h3>
		<transition-group name="list" mode="out-in" class="tasks-list">
			<tasks-item v-for="( tasksItem , index ) in Tasks" :key="index"
									:tasksItem="tasksItem">
			</tasks-item>
		</transition-group>
  </section>
</template>

<script>

	import tasksItem from '@templates/tasks-item';

	export default {
		name: "tasks",
		components: { tasksItem },
		computed: {
			Tasks() {
				const storeTasks = this.$store.state.Agent.tasks;
				const Tasks = [];
				storeTasks.forEach( item => {
					this.$store.state.Tasks.filter( task => {
						if ( task.id === item ) Tasks.push( task );
					})
				});
				return Tasks;
			}
		}
	};

</script>

<style lang="scss">

	.tasks {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		padding: 30px;
		&__icon {
			width: 28px;
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
	}

	.tasks-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 20px 0 0 0;
	}

</style>
