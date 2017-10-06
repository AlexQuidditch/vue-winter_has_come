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
								<datepicker :value="CreateTask.deadline" @selected="updateDeadline($event)"
														:format="Datepicker.format" required
														:language="Datepicker.language"
														:inputClass=" 'create-task-column__input' "
														placeholder="Выберите число">
								</datepicker>
								<icon-calendar class="create-task-column__label-icon"></icon-calendar>
							</label>
						</div>
						<div class="create-task-column">
							<label class="create-task-column__label">
								<h6 class="create-task-column__title">Прикрепить файлы:</h6>
								<ul class="attached-list">
									<li v-for="( attachedItem , index ) in CreateTask.attached" :key="index"
										class="attached-item">
										<img :src=" '/static/assets/shared/' + attachedItem " alt="Загруженное изображение"
												 class="attached-item__picture" />
									</li>
                  <label for="attachFile" class="attached-item">
                    <input @change="filler()"
                           id="attachFile" type="file"
                           multiple accept="image"
                           name="attachFile"
                           class="attached-item__input" />
                           +
                  </label>
								</ul>
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
                    aria-label="Удалить специализацию">+
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

	import { mapActions } from 'vuex';

	import { Money } from 'v-money';
	import iconCheck from '@icons/check-square';
	import iconCalendar from '@icons/calendar.js';
	import vChip from '@custom-elements/vue-chip';

	export default {
		name: 'create-task',
		components: { Money , iconCheck , iconCalendar , vChip },
		data: () => ({
			specKeyword: '',
			moneyOptions: {
				thousands: ' ',
				precision: 0,
				masked: true
			},
			Datepicker: {
				format: 'dd-MM-yyyy',
				language: 'ru',
				wrapperClass: 'column-settings__label',
				calendarButton: true
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
      this.$store.dispatch( 'setAuthorID' , this.$store.state.User._id )
    },
		computed: {
      isEdit() {
        return this.$route.name === 'edit-task';
      },
			CreateTask() {
        if ( this.isEdit ) {
          return this.$store.state.Tasks
            .find( task => task._id == this.$route.query.id );
        } else {
          return this.$store.state.CreateTask
        }
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
				this.$store.dispatch('saveTask')
					.then( ({ data }) => {
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
							this.$swal(
								'Сохранено!',
								'Задача опубликована.',
								'success'
							);
							this.$store.dispatch('clearDraft');
						}, dismiss => {
							if ( dismiss === 'cancel' ) {
								this.$swal(
									'Отменено!',
									'Отредактируйте, или сохраните черновик',
									'info'
								)
							}
						});
					})
          .catch( error => {
            console.error(error);
            this.$swal( 'Упс!' , 'Что-то пошло не так...' , 'error' )
          });
      },
      saveDraft() {
        this.$store.dispatch('saveDraft')
          .then( ({ data }) => {
            console.log(data);
            this.$swal( 'Ура!' , `ID задачи: ${ data._id }` , 'success' );
            this.$store.dispatch('clearDraft')
          })
          .catch( error => console.error(error) );
      },
			addSpecialization(specKeyword) {
        if (specKeyword) {
          this.$store.dispatch( 'addSpecialization' , specKeyword );
          this.specKeyword = '';
        }
			},
			filler() {
				const attachFile = document.getElementById('attachFile');
				if ( ( 'files' in attachFile ) && attachFile.files.length ) {
					for ( let file of attachFile.files ) {
						console.log( file.name );
					};
					// this.$http.post( '/upload' , file. )
					// 	.then( response => {
					//
					// 	})
				}
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
			.attached-list {
				display: flex;
				flex-flow: row wrap;
				margin-top: 10px;
			}
			.attached-item {
				size: 62px;
				margin: 0 7px 7px 0;
				&:last-child {
					size: 62px;
					margin: 0;
					text-align: center;
					font-size: 40px;
					line-height: 62px;
					color: rgba(155, 155, 155, 0.2);
					color: var(--purpley-grey-20);
					background-color: transparent;
					cursor: pointer;
					border: solid 1px rgba(155, 155, 155, 0.2);
					border: solid 1px var(--purpley-grey-20);
					border-radius: 3px;
					transition: box-shadow .3s ease-in-out;
					&:hover {
						@include MDShadow-1;
					}
				}
				&__picture {
					size: 62px;
					object-fit: cover;
					border-radius: 3px;
					@include MDShadow-1;
				}
				&__input {
					display: none;
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
