<template lang="html">
    <section class="settings _common">
		<h3 class="settings__title">Настройки конфиденциальности</h3>
		<div class="settings-container">
			<div class="settings-column">
				<label class="settings-column__label">
					<h6 class="settings-column__title">Электронная почта:</h6>
					<input :value="Common.email" @input="updateEmail($event)"
						:placeholder="Placeholders.email"
						type="email" class="settings-column__input" />
				</label>
				<label class="settings-column__label">
					<h6 class="settings-column__title">Номер телефона:</h6>
					<masked-input :value="Common.phone" @input="updatePhone($event)"
						mask="\+\7 (111) 111-11-11"
						type="tel"
						:placeholder="Placeholders.phone"
						class="settings-column__input">
					</masked-input>
				</label>
			</div>
			<div class="settings-column">
				<label class="settings-column__label">
					<h6 class="settings-column__title">Ссылка на страницу:</h6>
					<input :value="Common.link" @input="updateLink($event)"
						:placeholder="Placeholders.link"
						type="email" class="settings-column__input" />
				</label>
				<label class="settings-column__label">
					<h6 class="settings-column__title">Дата рождения:</h6>
					<datepicker :value="Common.bornDate" @selected="updateBornDate($event)"
						:format="Datepicker.format"
						:language="Datepicker.language"
						:inputClass=" 'settings-column__input' ">
					</datepicker>
					<icon-calendar class="settings-column__label-icon"></icon-calendar>
				</label>
			</div>
			<div class="settings-column">
			<label class="settings-column__label">
				<h6 class="settings-column__title">Подпись:</h6>
				<textarea :value="Common.caption" @input="updateCaption($event)"
					:placeholder="Placeholders.caption"
					class="settings-column__input _textarea">
				</textarea>
			</label>
			</div>
		</div>
		<div class="settings-bottom">
			<label class="settings-bottom__label">
				<h6 class="settings-bottom__title">Пароль:</h6>
				<input :value="Common.password" @input="updatePassword($event)"
				:placeholder="Placeholders.password"
				type="password" class="settings-bottom__input" />
			</label>
			<label class="settings-bottom__label _checkbox">
				<checkbox value="cat" color="#009d2f"
					class="settings-bottom__checkbox">Не публиковать на сайте</checkbox>
			</label>
			<button @click="saveChanges()"
				class="settings-bottom__button waves-effect waves-dark"
				type="button">
				<icon-check class="settings-bottom__button-icon"></icon-check>
				Сохранить изменения
			</button>
		</div>
    </section>
</template>

<script>

	import iconCheck from '@icons/check-square';
	import iconCalendar from '@icons/calendar';

	export default {
		name: "settings_common",
		components: { iconCheck , iconCalendar },
		data() {
			return {
				Datepicker: {
					format: 'dd-MM-yyyy',
					language: 'ru',
					wrapperClass: 'column-settings__label',
					inputClass: 'column-settings__input',
					calendarButton: true,
					calendarButtonIcon: 'fa fa-calendar'
				},
				Placeholders: {
					email: 'elena.ivanova@gmail.com',
					phone: '+7 *** *** ** 35',
					link: 'elena.ivanova',
					bornDate: '22-06-1994',
					password: 'Обновлен 6 дней назад',
					caption: 'Здесь находится Ваша подпись.\nНапример, контакты. '
				}
			}
		},
		computed: {
			Common() {
				return this.$store.state.Settings.common
			}
		},
		methods: {
			saveChanges() {
				this.$swal( 'Сохранено!' , `${ this.Common.email }` , 'success' )
			},
			updatePassword(e) {
				this.$store.dispatch( 'updatePassword', e.target.value );
			},
			updatePhone(e) {
				this.$store.dispatch( 'updatePhone', e );
			},
			updateLink(e) {
				this.$store.dispatch( 'updateLink', e.target.value );
			},
			updateBornDate(e) {
				this.$store.dispatch( 'updateBornDate', e );
			},
			updateCaption(e) {
				this.$store.dispatch( 'updateCaption', e.target.value );
			},
			updateCheck(e) {
				this.$store.dispatch( 'updateCheck', e );
			}
		}
	};

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .settings {
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

	.settings-container {
		display: flex;
		justify-content: space-between;
	}

	.settings-column {
		width: 270px;
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
		}
		&__label-icon {
			position: absolute;
			top: 34px; right: 10px;
			width: 22px;
		}
		&__input {
			display: block;
			size: 270px 35px;
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
				height: 109px;
				resize: none;
			}
		}
	}
	.settings-bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
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
			&._checkbox {
				width: 250px;
			}
		}
		&__input {
			display: block;
			size: 270px 35px;
			margin-top: 10px;
			padding: 10px;
			font-size: 12px;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
			border-radius: 3px;
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
		}
		&__checkbox {
			margin: 9px 0 !important;
			.checkbox_label {
				font-size: 12px;
				line-height: 1.5;
				color: #9b9b9b;
				color: var(--purpley-grey);
			}
		}
		&__button {
			size: 270px 35px;
			padding: 0 10px;
			margin-top: 30px;
			font-size: 12px;
			line-height: 35px;
			color: #9b9b9b;
			color: var(--purpley-grey);
			background-color: transparent;
			border-radius: 3px;
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
			transition: box-shadow .3s ease-in-out;
			&:hover {
				@include MDShadow-1;
			}
		}
		&__button-icon {
			vertical-align: middle;
			width: 20px;
			margin-right: 10px;
			stroke-width: 2;
			stroke: #009d2f;
			stroke: var(--irish-green);
		}
	}

</style>
