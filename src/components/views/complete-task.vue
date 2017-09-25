<template lang="html">
	<main class="main">
		<section class="complete-task">
			<h1 class="complete-task__title">
				<span>Завершить задание</span> | {{ taskItem.title }}
			</h1>
			<form @submit.prevent="saveComplete([ $event , $route.query.id ])" class="complete-task-container">

				<header class="complete-task-header">
					<div class="complete-task-column">
						<div class="complete-task-column__label">
							<h6 class="complete-task-column__title">Статус задачи:</h6>
							<div class="statuses-list">
								<v-radio v-for="( statusItem , index ) in Statuses" :key="index"
												 @input="updateStatus([ $event , $route.query.id ])"
												 :value="taskItem.completed.status"
												 :expected="statusItem.status"
												 class="statuses-item"
												 >{{ statusItem.text }}
								</v-radio>
							</div>
						</div>
						<label class="complete-task-column__label">
							<h6 class="complete-task-column__title">Оценка исполнителю:</h6>
							<star-rating @rating-selected="updateRate([ $event , $route.query.id ])"
                           :rating="taskItem.completed.rate"
          								 :increment="1"
          								 :star-size="18"
          								 :show-rating="false"
          								 active-color="#009d2f"
          								 inactive-color="rgba(0, 157, 47, 0.35)">
							</star-rating><span :class="taskItem.completed.rate < 3 ? '_red' : ''">{{ taskItem.completed.rate }} из 5</span>
						</label>
					</div>
					<div class="complete-task-column _user">
						<h6 class="complete-task-column__title">Исполнитель:</h6>
						<div class="user">
							<router-link :to="{ name: 'user', query: { id: Engage.id } }"
								tag="div" class="user-avatar">
								<img :src=" '/static/assets/shared/' + Engage.avatar " :alt="Engage.name + ' ' + Engage.sename"
										 class="user-avatar__image"/><h3 class="user-avatar__name">
											 {{ Engage.name + ' ' + Engage.sename }} <span>({{ Engage.rating }})</span> <br />
										 	 Веб-дизайн, реклама<br />
											 СПбГУТД, графический дизайн
										 </h3>
							 </router-link>
						</div>
					</div>
				</header>

				<label class="complete-task-column__label">
					<h6 class="complete-task-column__title">Отзыв об исполнителе:</h6>
					<textarea :value="taskItem.completed.review" @input="updateReview([ $event.target.value , $route.query.id ])"
						:placeholder="Placeholders.description" required
						class="complete-task-column__input _textarea"
						name="description" maxlength="200">
					</textarea>
				</label>

				<footer class="complete-task-bottom">
					<button class="complete-task-bottom__button waves-effect waves-light"
									type="submit" name="Complete">
						<icon-check class="complete-task-bottom__button-icon"></icon-check>
						Завершить задание
					</button>
				</footer>

			</form>
		</section>
	</main>
</template>

<script>

	import { mapActions } from 'vuex';

	import StarRating from 'vue-star-rating';
	import vRadio from '@custom-elements/vue-radio';
	import iconCheck from '@icons/check-square';

	export default {
		name: "complete-task",
		components: { vRadio , StarRating , iconCheck },
		data: () => ({
			Statuses: [
				{
					status: 'completed',
					text: 'Выполнена'
				},
				{
					status: 'notCompleted',
					text: 'Не выполнена'
				},
				{
					status: 'cancelled',
					text: 'Отменена'
				}
			],
			Placeholders: {
				description: 'Описание задачи ( макс. 200 символов )'
			}
		}),
		computed: {
			taskItem() {
				return this.$store.state.Tasks.find( item => item.id == this.$route.query.id );
			},
			Engage() {
				return this.$store.state.Stub.friends.find( item => item.id == this.taskItem.engagedID );
			}
		},
		methods: {
			...mapActions([ 'updateRate' , 'updateReview' , 'updateStatus' ]),
			saveComplete(payload) {
				this.$store.dispatch( 'saveComplete' , payload )
					// .then( response => console.log(response) );
			},
			getEngageAvatar(ID) {
				let avatar = '';
				this.$store.state.Stub.friends.filter( item => {
					if ( item.id === ID ) avatar = item.avatar;
				});
				return avatar;
			},
			getEngageName(ID) {
				let fullName = '';
				this.$store.state.Stub.friends.filter( item => {
					if ( item.id === ID ) fullName = item.name + ' ' + item.sename;
				});
				return fullName;
			}
		}
	};

</script>

<style lang="scss">

	@import "../../stylesheets/partials/_mixins.scss";

    .complete-task {
    	padding: 30px;
			border-radius: 3px;
			background-color: #fff;
			background-color: var(--whited);
			@include MDShadow-1;
			&__title {
				overflow: hidden;
				margin-bottom: 20px;
				font-size: 18px;
				font-weight: 600;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #4a4a4a;
				color: var(--charcoal-grey);
				span {
					color: #009d2f;
					color: var(--irish-green);
				}
			}

			.complete-task-header {
				display: flex;
				justify-content: space-between;
			}

			.complete-task-column {
				width: 50%;
				&._user {
					width: 270px;
				}
				&__title {
					width: 100%;
					font-size: 13px;
					font-weight: 600;
					line-height: 1.46;
					color: #4a4a4a;
					color: var(--charcoal-grey);
				}
				&__label {
					position: relative;
					display: block;
					width: 100%;
				}
				&__label-icon {
					position: absolute;
					top: 34px; right: 10px;
					width: 22px;
				}
				&__input {
					display: block;
					size: 100% 35px;
					margin: 10px 0;
					padding: 10px;
					font-size: 12px;
					line-height: 1.5;
					color: #9b9b9b;
					color: var(--purpley-grey);
					border-radius: 3px;
					border: solid 1px rgba(155, 155, 155, 0.2);
					border: solid 1px var(--purpley-grey-20);
					&._textarea {
						height: 115px;
						resize: none;
					}
				}
				.star-rating {
					display: inline-block !important;
					margin: 5px auto;
					~ span {
						display: inline-block;
						vertical-align: top;
						height: 33px;
						margin: 5px 0 5px 20px;
						font-size: 12px;
						font-weight: 600;
						line-height: 33px;
						color: #009d2f;
						color: var(--irish-green);
						transition: color .15s ease-in-out;
						&._red {
							color: #d0011b;
						  color: var(--scarlet);
						}
					}
				}
			}

			.user {
				margin-top: 10px;
			}
			.user-avatar {
				&__name {
					max-width: 210px;
					width: auto;
					span {
						color: #009d2f;
						color: var(--irish-green);
					}
				}
			}

			.statuses-list {
				display: flex;
				flex-flow: row wrap;
			}
			.statuses-item {
				margin: 10px 20px 20px 0;
				.material-radio-label {
					padding-left: 10px;
				}
			}

			.complete-task-bottom {
				display: block;
				width: 100%;
				margin-top: 20px;
				&__button {
					display: flex;
					justify-content: center;
					align-items: center;
					size: 100% 35px;
					padding: 0 10px;
					font-size: 12px;
					line-height: 35px;
					color: #fff;
					color: var(--whited);
					background-color: #009d2f;
					background-color: var(--irish-green);
					border: none;
					border-radius: 3px;
					transition: box-shadow .35s ease-in-out;
					&:focus, &:hover {
						@include MDShadow-1;
					}
					&:active {
						@include MDShadow-2;
					}
				}
				&__checkbox {
					margin: 12px 0 !important;
					.checkbox_label {
						font-size: 12px;
						line-height: 1.5;
						color: #9b9b9b;
						color: var(--purpley-grey);
					}
					input:focus {
						@include MDShadow-3;
					}
				}
				&__button-icon {
					width: 20px;
					margin-right: 10px;
					stroke-width: 2;
					stroke: #fff;
					stroke: var(--whited);
				}
			}
		}

</style>
