<template lang="html">
	<section class="settings _confidential">
		<h3 class="settings__title">Настройки конфиденциальности</h3>
		<div class="settings-container">
			<div class="settings-column">
				<label for="email" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть мои контакты</h6>
					<select :value="Confidential.contacts" @change="updateContacts($event.target.value)"
									class="settings-column__select">
						<option disabled value="">Выберите один из вариантов</option>
						<option v-for="selectorItem in Selectors" :key="selectorItem.value"
							:value="selectorItem.value"
							>{{ selectorItem.title }}
						</option>
					</select>
				</label>
				<label for="phone" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть мои команды</h6>
					<select :value="Confidential.teams" @change="updateTeams($event.target.value)"
									class="settings-column__select">
						<option disabled value="">Выберите один из вариантов</option>
						<option v-for="selectorItem in Selectors" :key="selectorItem.value"
							:value="selectorItem.value"
							>{{ selectorItem.title }}
						</option>
					</select>
				</label>
			</div>
			<div class="settings-column">
				<label for="caption" class="settings-column__label">
					<h6 class="settings-column__title">Кто может отправлять мне сообщения</h6>
					<select :value="Confidential.messages" @change="updateMessages($event.target.value)"
							 		class="settings-column__select">
						<option disabled value="">Выберите один из вариантов</option>
						<option v-for="selectorItem in Selectors" :key="selectorItem.value"
							:value="selectorItem.value"
							>{{ selectorItem.title }}
						</option>
					</select>
				</label>
				<label for="link" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть отзывы обо мне</h6>
					<select :value="Confidential.reviews" @change="updateReviews($event.target.value)"
									class="settings-column__select">
						<option disabled value="">Выберите один из вариантов</option>
						<option v-for="selectorItem in Selectors" :key="selectorItem.value"
							:value="selectorItem.value"
							>{{ selectorItem.title }}
						</option>
					</select>
				</label>
			</div>
			<div class="settings-bottom">
				<button @click="saveChanges()"
					class="settings-bottom__button _confidential waves-effect waves-dark"
					type="button">
					<icon-check class="settings-bottom__button-icon"></icon-check>
					Сохранить изменения
				</button>
			</div>
		</div>
	</section>
</template>

<script>

	import { mapActions } from 'vuex';

	import iconCheck from '@icons/check-square';

	export default {
		name: "confidential-settings",
		components: { iconCheck },
		data() {
			return {
				Selectors: [
					{
						title: 'Только агенты',
						value: 0
					},
					{
						title: 'Только пользователи',
						value: 1
					},
					{
						title: 'Пользователи и агенты',
						value: 2
					},
					{
						title: 'Только друзья',
						value: 3
					},
					{
						title: 'Никто',
						value: 4
					}
				],
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
			Confidential() {
				return this.$store.state.Settings.confidential
			}
		},
		methods: {
			...mapActions([
				'updateContacts', 'updateTeams',
				'updateMessages', 'updateReviews'
			]),
			saveChanges() {
				this.$swal( 'Сохранено!' , `${ this.Confidential.email }` , 'success' )
			}
		}
	};

</script>

<style lang="scss">

    .settings._confidential {
    	padding-bottom: 20px;
		.settings-container {
			display: flex;
			flex-flow: row wrap;
		}
    }

	.settings-column {
		&__select {
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
		}
	}
	.settings-bottom__button._confidential {
		margin-bottom: 10px;
	}

</style>
