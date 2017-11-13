<template lang="html">
  <main class="main _messages">
    <section class="messages">
			<div class="vue-bar" v-bar>
				<transition-group tag="ul" name="list" mode="out-in"
													class="dialog-list">
					<dialog-item v-for="dialogItem in Dialogs" :key="dialogItem._id"
											 :DialogItem="dialogItem">
					</dialog-item>
				</transition-group>
			</div>
			<transition name="fade" mode="out-in" appear>
				<router-view v-if="id"></router-view>
				<dialog-clear v-else></dialog-clear>
			</transition>
    </section>
  </main>
</template>

<script>

  import API from '@api';

  import dialogItem from '@templates/dialog-item.vue';
  import dialogClear from '@views/messages/dialog-clear.vue';

  export default {
    name: 'messages',
    components: { dialogItem , dialogClear },
    props: {
      'id': { //  получаем из роутера
        type: [ String , Number ]
      }
    },
    computed: {
      Dialogs() {
        return this.$store.state.Messages.dialogs
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        API.get( `users/get/${ vm.$store.state.User._id }` )
          .then( ({ body }) => vm.$store.dispatch( 'updateInstance' , body ) )
          .catch( error => console.error( error ) )
      })
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
    height: 100%;
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
