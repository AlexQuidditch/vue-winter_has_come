<template lang="html">
  <div class="dialog-view">
		<header class="dialog-header">
			<img :src=" '/static/assets/shared/' + Author.avatar" :alt="Author.name + ' ' + Author.sename"
					 class="dialog-header__avatar" />
			<div class="dialog-header__user">
				<h4 class="dialog-header__user-name">{{ Author.name + ' ' + Author.sename }}</h4>
				<span class="dialog-header__user-column">
					{{ Author.information.specialization }} <br />
					Статус: {{ Author.information.status }}
				</span>
				<span class="dialog-header__user-column _right">
					{{ Author.information.town }} ({{ Author.information.country }}) <br />
					{{ Author.information.education.place }}, {{ Author.information.education.faculty }}
				</span>
			</div>
			<transition name="fade">
				<span v-if="Dialog.isOnline" class="dialog-header__user-online">Онлайн</span>
			</transition>
		</header>
		<div id="v-bar" class="dialog-main vue-bar">
			<transition-group tag="ul" name="messaging"
												class="message-list">
				<li v-for="( instanceItem , index ) in dialogInstance"
						:key="index"
						class="message-item _right">
						<span class="message-item__content">{{ instanceItem.content }}</span>
				</li>
			</transition-group>
		</div>
		<footer class="dialog-footer">
			<form @submit.prevent="sentMessage($event)" class="dialog-footer__form">
				<textarea v-model="newMessage"
									name="newMessage"
									placeholder="Новое сообщение..."
									class="dialog-footer__form-textarea"
									required>
				</textarea>
				<button class="dialog-footer__form-submit waves-effect waves-light"
								type="submit" name="sendMessage">
					<icon-send class="dialog-footer__form-icon"></icon-send>
				</button>
			</form>
		</footer>
  </div>
</template>

<script>

	import iconSend from '@icons/send.vue';

	export default {
		name: "dialog-view",
		components: { iconSend },
		props: ['id'],
		computed: {
			Dialog() {
				return this.$store.state.Messages.dialogs
				.find( dialog => dialog.id == this.id )
			},
			dialogInstance() {
				const thread = this.$store.state.Messages.threads
				.find( thread => thread.id == this.id );
				return thread.dialogInstance
			},
			Author() {
				return this.$store.state.Stub.friends
				.find( item => item.id === this.Dialog.authorID )
			},
			newMessage: {
				get() {
					return this.$store.state.Messages.dialogs[this.id].draft
				},
				set(payload) {
					this.$store.dispatch( 'updateMessage' , [ this.id , payload ] )
				}
			}
		},
		methods: {
			sentMessage() {
				this.$store.dispatch( 'sendMessage' , this.id )
				.then( response => {
					this.newMessage = '';
					this.scrollToEnd();
				})
				.catch( error => console.error(error) )
			},
			scrollToEnd() {
				const container = document.querySelector("#v-bar");
				container.scrollTop = container.scrollHeight;
			}
		}
	};

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins.scss";

  .dialog-view {
  	position: relative;
		width: 920px;
  	padding: 0 10px 0 18px;
		font-size: 12px;
		border-left: solid 1px rgba( #9b9b9b , .3 );
  }

	.dialog-header {
		position: relative;
		display: flex;
		padding: 20px 0;
		&__avatar {
			size: 50px;
			object-fit: cover;
			border-radius: 50%;
			@include MDShadow-1;
		}
		&__user {
			display: flex;
			flex-wrap: wrap;
			margin-left: 10px;
		}
		&__user-name {
			width: 100%;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #009d2f;
			color: var(--irish-green);
		}
		&__user-column {
			display: block;
			width: 120px;
			margin-right: 20px;
			&._right {
				width: auto;
				padding-left: 20px;
				border-left: solid 1px rgba( #9b9b9b , .3 );
			}
		}
		&__user-online {
			position: absolute;
			top: 20px; right: 10px;
			font-size: 12px;
			font-weight: 600;
			line-height: 1.58;
			color: #009d2f;
			color: var(--irish-green);
		}
	}

	.dialog-main {
		overflow-y: auto;
		max-height: calc( 100% - 170px);
	}

	.dialog-footer {
		position: absolute;
		left: 0; bottom: 1px;
		size: 100% 80px;
		padding: 10px 20px;
		background-color: #fff;
		background-color: var(--whited);
		border-top: solid 1px rgba( #9b9b9b , .3 );
		&__form {
			display: flex;
			justify-content: space-between;
			align-items: center;
			size: 100%;
		}
		&__form-textarea {
			size: 88% 100%;
			padding: 8px;
			margin: 0;
			resize: none;
			border: none;
			border-radius: 3px;
			@include MDShadow-1;
		}
		&__form-submit {
			display: flex;
			justify-content: center;
			align-items: center;
			size: 50px;
			margin: 0;
			padding: 0;
			background-color: #009d2f;
			background-color: var(--irish-green);
			border: none;
			border-radius: 50%;
			@include MDShadow-1;
			transition: box-shadow .3s ease-in-out;
			&:hover {
				@include MDShadow-2;
			}
		}
		&__form-icon {
			size: 24px;
		}
	}

	.message-list {
		display: flex;
		flex-flow: column nowrap;
		padding: 0 15px 10px 0;
	}

	.message-item {
		&._right {
			text-align: right;
		}
		&__content {
			display: inline-block;
			padding: 10px;
			margin: 5px;
			text-align: left;
			white-space: pre-wrap;
			background-color: #fff;
			background-color: var(--whited);
			border-radius: 3px;
			@include MDShadow-1;
		}
	}

	.messaging-enter-active,
	.messaging-leave-active {
	  transition: all .25s;
	}
	.messaging-enter,
	.messaging-leave-to {
	  opacity: 0;
	  transform: translateY(10px);
	}

</style>
