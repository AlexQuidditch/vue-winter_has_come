<template lang="html">
	<main class="main">
		<section class="complete-task">
			<h1 class="complete-task__title">
				<span>Завершить задание</span> | {{ taskItem.title }}
			</h1>
			<form @submit.prevent="changeTask()"
						class="complete-task-container">

				<header class="complete-task-header">
					<div class="complete-task-column">
						<div class="complete-task-column__label">
							<h6 class="complete-task-column__title">Статус задачи:</h6>
							<div class="statuses-list">
								<v-radio v-for="( statusItem , index ) in Statuses" :key="index"
												 v-model="taskItem.completed.status"
												 :expected="statusItem.status"
												 class="statuses-item"
												 >{{ statusItem.text }}
								</v-radio>
							</div>
						</div>
						<label class="complete-task-column__label">
							<h6 class="complete-task-column__title">Оценка исполнителю:</h6>
							<star-rating v-model="taskItem.completed.rate"
          								 :increment="1"
          								 :star-size="18"
          								 :show-rating="false"
          								 active-color="#009d2f"
          								 inactive-color="rgba(0, 157, 47, 0.35)"
                           class="complete-task-column__rating">
							</star-rating>
              <span :class="taskItem.completed.rate < 3 ? '_red' : ''"
                    class="complete-task-column__rate">
                    {{ taskItem.completed.rate }} из 5
              </span>
						</label>
					</div>
					<div class="complete-task-column _user">
						<h6 class="complete-task-column__title">Исполнитель:</h6>
						<div class="user">
							<router-link :to=" currentUserID === Engage._id ? { name: 'profile' } : { name: 'user', params: { id: Engage._id } } "
								           tag="div" class="user-avatar">
								<img :src=" backendLocation + '/upload/' + Engage.personal.avatar "
                     :alt="Engage.personal.name + ' ' + Engage.personal.sename"
										 class="user-avatar__image"/><h3 class="user-avatar__name">
											 {{ Engage.personal.name + ' ' + Engage.personal.sename }}
                       <span>({{ Engage.ratings.mainRate }})</span> <br />
                       {{ Engage.information.specialization }}<br />
                       {{ Engage.information.education.place + ', ' + Engage.information.education.faculty }}
										 </h3>
							 </router-link>
						</div>
					</div>
				</header>

				<label class="complete-task-column__label">
					<h6 class="complete-task-column__title">Отзыв об исполнителе:</h6>
					<textarea v-model="taskItem.completed.review"
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

  import API from '@api';

	import { mapActions } from 'vuex';

  import taskTemplate from '@collections/taskTemplate.json';

	import StarRating from 'vue-star-rating';
	import vRadio from '@custom-elements/vue-radio.vue';
	import iconCheck from '@icons/check-square.vue';

	export default {
		name: "complete-task",
		components: { vRadio , StarRating , iconCheck },
    props: {
      'id': {
        type: String,
        required: true
      }
    },
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
			},
      taskItem: taskTemplate,
      Engage: {
      	_id: '',
      	isAgent: null,
      	wall: [],
      	personal: {
      		avatar: '',
      		name: '',
      		sename: '',
      		email: '',
      		password: '',
      		born: '',
      		gender: '',
      		caption: '',
          about: ''
      	},
      	information: {
      		specialization: '',
      		lastVisit: '',
      		status: '',
      		town: '',
      		country: 'Россия',
      		education: {
      			place: '',
      			faculty: ''
      		},
      		company: {
      			title: '',
      			link: ''
      		}
      	},
      	registrationDate: '',
      	popularity: '',
      	responses: {
      		issued: 0,
      		positive: 0,
      		negative: 0
      	},
      	ratings: {
      		mainRate: 0,
      		average: 0,
      		completed: 0,
      		tests: {
      			value: 0,
      			total: 0,
      			rate: 0
      		}
      	},
      	social: {
      		contacts: {
            phone: '',
      			vk: '',
      			fb: '',
      			skype: '',
      			telegram: ''
      		},
      		teams: [],
      		company: {
      			activities: '',
      			starts: '',
      			achivements: ''
      		}
      	},
      	portfolio: [],
        reviews: [],
      	tasks: []
      }
		}),
    created() {
      this.$store.dispatch( 'getTaskByID' , this.id )
        .then( ({ body })  => {
          Object.assign( this.taskItem , body );
          API.get( `users/get/${ this.taskItem.engagedID }` )
            .then( ({ body }) => Object.assign( this.Engage , body ) )
            .catch( error => console.error(error) )
        })
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        API.get( `users/get/${ vm.$store.state.User._id }` )
          .then( ({ body }) => vm.$store.dispatch( 'updateInstance' , body ) )
          .catch( error => console.error( error ) )
      })
    },
		computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      backendLocation() {
        return this.$store.state.General;
      }
		},
		methods: {
			...mapActions([ 'updateRate' , 'updateReview' , 'updateStatus' ]),
			changeTask() {
				this.$store.dispatch( 'changeTask' , [ this.id , this.taskItem ] )
					.then( response => {
            this.Engage.portfolio.unshift( this.taskItem._id );
            API.post( `user/edit/${ this.Engage._id }` , this.Engage )
              .then( ({ body }) => {
                console.log(body);
                this.postComment = '';
              })
            console.log(response);
            this.$router.push({ name: 'task' , params : { id : this.id } })
          });
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
				.complete-task-column__rating {
					display: inline-block !important;
          .vue-star-rating-pointer {
  					margin: 5px 4px;
          }
				}
        &__rate {
          display: inline-block;
          vertical-align: top;
          height: 33px;
          margin: 0 0 0 10px;
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
