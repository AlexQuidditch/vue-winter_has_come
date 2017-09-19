<template lang="html">
  <main class="main _messages">
    <section class="messages">
			<div class="vue-bar" v-bar>
				<transition-group tag="ul" name="list" mode="out-in"
													class="dialog-list">
					<dialog-item v-for="dialogItem in Dialogs" :key="dialogItem.id"
											 :DialogItem="dialogItem">
					</dialog-item>
				</transition-group>
			</div>
			<transition name="fade" mode="out-in" appear>
				<router-view></router-view>
				<dialog-clear v-if="!id"></dialog-clear>
			</transition>
    </section>
  </main>
</template>

<script>

	import dialogItem from '@templates/dialog-item.vue';
	import dialogClear from '@views/messages/dialog-clear.vue';

	export default {
		name: 'messages',
		components: { dialogItem , dialogClear },
		props: ['id'],
		computed: {
	    Dialogs() {
				return this.$store.state.Messages.dialogs
	    }
		}
	};

</script>

<style lang="scss">

	@import "../../stylesheets/partials/_mixins.scss";

	.messages {
		position: sticky;
		top: 130px;
		display: flex;
		justify-content: space-between;
    max-height: calc( 100vh - 160px );
		background-color: #fff;
		background-color: var(--whited);
		border-radius: 3px;
		@include MDShadow-1;
	}

	.dialog-list,
	.vue-bar {
		min-width: 300px;
	}

</style>
