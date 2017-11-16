<template lang="html">
	<main class="main">
		<section class="create-task">
			<h1 class="create-task__title">{{ isEdit ? 'Редактировать задание' : 'Создать задание' }}</h1>
			<form @submit.prevent="saveTask()" class="create-task-container">

				<div class="create-task-column _wide">
					<label class="create-task-column__label">
						<h6 class="create-task-column__title">Название задачи:</h6>
						<input :value="CreateTask.title" @input="updateTitle($event.target.value)"
									 :placeholder="Placeholders.title" required
									 type="text" class="create-task-column__input" />
					</label>
					<label class="create-task-column__label">
						<h6 class="create-task-column__title">Описание задачи:</h6>
						<textarea :value="CreateTask.description" @input="updateDescription($event.target.value)"
											:placeholder="Placeholders.description" required
											class="create-task-column__input _textarea"
											name="description" maxlength="500">
						</textarea>
					</label>
					<div class="create-task-container">
						<div class="create-task-column">
							<label class="create-task-column__label">
								<h6 class="create-task-column__title">Бюджет, в баллах:</h6>
								<money :value="CreateTask.budget" @input="updateBudget($event)"
											 v-bind="moneyOptions" required
											 class="create-task-column__input">
								</money>
							</label>
							<label class="create-task-column__label">
								<h6 class="create-task-column__title">Сроки выполнения задания:</h6>
								<datepicker :value="CreateTask.deadline" @input="updateDeadline($event)"
														:config="{ wrap: true , dateFormat: 'd.m.Y' , locale: ru }"
                            class="create-task-column__datepicker">
									<icon-calendar class="create-task-column__label-icon" data-toggle></icon-calendar>
							  </datepicker>
							</label>
						</div>
						<div class="create-task-column">
							<label class="create-task-column__label">
								<h6 class="create-task-column__title">Прикрепить файлы:</h6>
								<transition-group name="list" mode="out-in" class="attached-list">
									<li v-for="( attachedItem , index ) in CreateTask.attached" :key="index"
										  class="attached-item">
										<img :src=" backendLocation + '/upload/' + attachedItem " alt="Загруженное изображение"
												 class="attached-item__picture" />
                    <button @click="deleteAttached(index)" class="attached-item__remove"
                            type="button" aria-label="Удалить специализацию">
                      <icon-close class="attached-item__remove-icon"></icon-close>
                    </button>
									</li>
                  <label v-if="CreateTask.attached.length < 4" key="label"
												 for="attachFile" class="attached-item _label">
                    <input @change="filler($event.target.files)"
                           id="attachFile" type="file"
                           multiple accept="image"
                           name="attachFile"
                           class="attached-item__input" />
                    <span>+</span>
                  </label>
								</transition-group>
							</label>
							<label class="create-task-bottom__label _checkbox">
								<checkbox :checked="CreateTask.isRush" @change="updateRush($event)"
													:color=" '#d0011b' "
													class="create-task-bottom__checkbox"
									>{{ Placeholders.isRush }}
								</checkbox>
							</label>
						</div>
					</div>
				</div>

				<div class="create-task-column">
					<label class="create-task-column__label">
						<h6 class="create-task-column__title">Город:</h6>
						<input :value="CreateTask.town" @input="updateTown($event.target.value)"
									 :placeholder="Placeholders.town" required
									 type="text" class="create-task-column__input" />
					</label>
					<label class="create-task-column__label">
						<h6 class="create-task-column__title">Необходимые навыки:</h6>
						<textarea :value="CreateTask.skills" @input="updateSkills($event.target.value)"
											:placeholder="Placeholders.skills" required
											class="create-task-column__input _textarea"
											name="skills" maxlength="140">
						</textarea>
					</label>
					<label class="create-task-column__label specialization-label">
						<h6 class="create-task-column__title">Специализация:</h6>
						<input v-model="specKeyword"
									 @keyup.enter="addSpecialization(specKeyword)"
									 type="text" placeholder="Введите..." name="specKeyword"
									 class="specialization-label__input _keyword" />
						<button @click="addSpecialization(specKeyword)"
										class="specialization-label__label-button"
										type="button" name="addSpecKeyword"
                    aria-label="Добавить специализацию">+
						</button>
						<transition-group tag="ul" name="list" class="chips-list">
							<v-chip v-for="( keywordItem , index ) in CreateTask.specialization" :key="index"
											:word="keywordItem"
											@remove="removeSpecialization(index)"
											class="_create-task">
							</v-chip>
						</transition-group>
					</label>
				</div>

				<div class="create-task-bottom">
					<button class="create-task-bottom__button _publish waves-effect waves-light"
									type="submit" name="Publish">
						<icon-check class="create-task-bottom__button-icon"></icon-check>
						Опубликовать
					</button>
          <button @click.prevent="saveDraft()"
                  class="create-task-bottom__button _draft waves-effect waves-light"
                  type="button" name="Draft"
            >Сохранить как черновик
          </button>
				</div>
			</form>
		</section>
	</main>
</template>

<script>

  import API from '@api';

  import { mapActions } from 'vuex';

  import { Money } from 'v-money';
  import iconCheck from '@icons/check-square';
  import iconCalendar from '@icons/calendar.js';
  import IconClose from '@icons/close.js';
  import vChip from '@custom-elements/vue-chip';

	import Datepicker from 'vue-bulma-datepicker';
  import { ru } from "flatpickr/dist/l10n/ru.js";

  export default {
    name: 'create-task',
    components: { Money , iconCheck , iconCalendar , vChip , IconClose , Datepicker },
		props: {
		  'id': {
		    type: String
		  }
		},
    data: () => ({
      specKeyword: '',
      moneyOptions: {
        thousands: ' ',
        precision: 0,
        masked: true
      },
      Placeholders: {
        title: 'Введите название задачи',
        town: 'Ваш населённый пункт',
        skills: 'Навыки, которыми должен обладать исполнитель',
        specialization: 'Выберите из списка',
        attached: '*первое изображение будет заглавным',
        description: 'Описание задачи ( макс 500 символов )',
        budget: 'Установите бюджет',
        deadline: 'Сроки выполнения задачи',
        isRush: 'Срочное задание'
      }
    }),
    created() {
      this.$store.dispatch( 'setAuthorID' , this.$store.state.User._id );
      if ( this.isEdit ) {
        let taskToEdit = this.$store.state.Tasks
          .find( task => task._id == this.id );
        this.$store.dispatch( 'setTaskToEdit' , taskToEdit );
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        API.get( `users/get/${ vm.$store.state.User._id }` )
          .then( ({ body }) => vm.$store.dispatch( 'updateInstance' , body ) )
          .catch( error => console.error( error ) )
      })
    },
    computed: {
      ru () { return ru },
      User() {
        return this.$store.state.User;
      },
      isEdit() {
        return this.$route.name === 'edit-task';
      },
      CreateTask() {
        return this.$store.state.CreateTask;
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    methods: {
      ...mapActions([
        'updateTitle' , 'updateDescription',
        'updateTown' , 'updateBudget',
        'updateDeadline' , 'updateRush',
        'updateSkills' , 'removeSpecialization'
      ]),
      saveTask() {

        if ( !this.isEdit ) {
          this.$swal({
            title: 'Вы уверены?',
            text: "Можете вернуться и отредактировать.",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#009d2f',
            cancelButtonColor: '#4a4a4a',
            confirmButtonText: 'Опубликовать!',
            cancelButtonText: 'Нет, ещё не всё.',
            confirmButtonClass: 'create-task-sweet__button waves-effect waves-light',
            cancelButtonClass: 'create-task-sweet__button _cancel waves-effect waves-light',
            buttonsStyling: false
          })
          .then( () => {
            this.$store.dispatch('saveTask')
              .then( ({ body }) => {
                this.$store.dispatch( 'updateTasks' , body._id );
                this.$store.dispatch( 'changeUser' , [ this.User._id , this.User ] )
                  .then( ({ body }) => console.log( 'Response saved' ))
              })
              .then( () => {
                this.$swal( 'Сохранено!' , 'Задача опубликована.' , 'success' );
                this.$store.dispatch('clearDraft');
	              this.$router.push({ name : 'find-job' , query: { section: 'active' } });
              })
              .catch( error => {
                console.error(error);
                this.$swal( 'Упс!' , 'Что-то пошло не так...' , 'error' )
              });
          }, dismiss => {
            if ( dismiss === 'cancel' ) {
              this.$swal( 'Отменено!' , 'Отредактируйте, или сохраните черновик' , 'info' )
            }
          });
        } else {
          this.$store.dispatch('updateTask')
            .then( () => {
              this.$swal( 'Сохранено!' , 'Задача отредактирована.' , 'success' );
              this.$store.dispatch('clearDraft');
              this.$router.push({ name : 'find-job' , query: { section: 'active' } });
            })
            .catch( error => {
              console.error(error);
              this.$swal( 'Упс!' , 'Что-то пошло не так...' , 'error' )
            });
        }

      },
      saveDraft() {
        this.$store.dispatch('saveDraft')
          .then( ({ data }) => {
            this.$swal( 'Ура!' , `ID задачи: ${ data._id }` , 'success' );
            this.$store.dispatch('clearDraft')
          })
          .catch( error => console.error(error) );
      },
      addSpecialization(specKeyword) {
        if ( specKeyword ) {
          this.$store.dispatch( 'addSpecialization' , specKeyword );
          this.specKeyword = '';
        }
      },
      filler(files) {
        const formData = new FormData();
				for ( let file of files ) {
					formData.append( 'image' , file )
				}
        this.$http.post( 'upload' , formData )
          .then( ({ body }) => {
						body.forEach( picture => this.$store.dispatch( 'addAttached' , picture._id ) )
          })
          .catch( err => console.error(err) )
      },
      deleteAttached(i) {
        this.$store.dispatch( 'deleteAttached' , i );
      }
    }
  };

</script>

<style lang="scss">

	@import "../../stylesheets/partials/_mixins.scss";

    .create-task {
    	padding: 30px;
			border-radius: 3px;
			background-color: #fff;
			background-color: var(--whited);
			@include MDShadow-1;
			&__title {
				margin-bottom: 20px;
				font-size: 18px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
		}

		.specialization-label {
			position: relative;
			&__label-button {
				position: absolute;
				top: 30px; right: 0;
				padding: 0;
				size: 35px 33px;
				font-size: 26px;
				color: rgba(155, 155, 155, 0.2);
				color: var(--purpley-grey-20);
				background-color: transparent;
				border: none;
			}
			&__input {
				padding: 0 10px;
				margin: 10px 0;
				size: 100% 35px;
				font-family: 'Lato', Arial, sans-serif;
				font-size: 12px;
				line-height: 35px;
				color: #4b4b4b;
				color: var(--purpley-grey);
				border-radius: 3px;
				border: solid 1px rgba(155, 155, 155, 0.2);
				border: solid 1px var(--purpley-grey-20);
				&:last-child {
					margin: 0;
				}
				&::placeholder {
					font-family: 'Lato', Arial, sans-serif;
					font-size: 12px;
					line-height: 35px;
					color: #4b4b4b;
					color: var(--purpley-grey);
				}
				&._keyword {
					padding-right: 40px;
				}
			}
		}
		.chips-list {
			display: flex;
			flex-flow: row wrap;
		}
		.create-task-container {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
		}

		.create-task-column {
			width: 270px;
			&._wide {
				width: 565px;
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
			&__datepicker {
				@extend .create-task-column__input;
				input {
					position: absolute;
					padding: 0;
					margin: 0;
					border: none;
				}
			}
			.attached-list {
				display: flex;
				flex-flow: row wrap;
				margin-top: 10px;
			}
			.attached-item {
			  position: relative;
				size: 62px;
				// margin: 0 7px 7px 0;
        border-radius: 3px;
				&._label {
					size: 62px;
  				// margin: 0 7px 7px 0;
					text-align: center;
					font-size: 40px;
					line-height: 58px;
					color: rgba(155, 155, 155, 0.2);
					color: var(--purpley-grey-20);
					background-color: transparent;
					cursor: pointer;
					border: solid 1px rgba(155, 155, 155, 0.2);
					border: solid 1px var(--purpley-grey-20);
					transition: box-shadow .3s ease-in-out;
					&:hover {
						@include MDShadow-1;
					}
				}
				&__picture {
					size: 62px;
					object-fit: contain;
          border-radius: 3px;
					@include MDShadow-1;
				}
				&__input {
					display: none;
				}
        &__remove {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -4px; right: -4px;
          padding: 0; margin: 0;
					background-color: transparent;
          border: none;
        }
        &__remove-icon {
          size: 20px;
    			border-radius: 3px;
    			fill: #fff;
    			fill: var(--whited);
          background-color: #d0011b;
          background-color: var(--scarlet);
    			@include MDShadow-1;
        }
			}
		}

		.create-task-bottom {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: 20px;
			&__button {
				display: flex;
				justify-content: center;
				align-items: center;
				size: calc( 100% - 290px ) 35px;
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
				&._draft {
					width: 270px;
					background-color: #4a4a4a;
					background-color: var(--charcoal-grey);
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

		.swal2-modal {
			.swal2-content {
				margin: 10px 0 30px 0;
			}
			.swal2-buttonswrapper {
				display: flex !important;
				justify-content: space-between;
			}
		}

		.create-task-sweet__button {
			size: 48.5% 35px;
			padding: 0 10px;
			font-size: 14px;
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
			&._cancel {
				width: 48.5%;
				background-color: #4a4a4a;
				background-color: var(--charcoal-grey);
			}
		}

</style>
