<template lang="html">
    <section class="settings _payments">
		<h3 class="settings__title">Настройки платежей ( в работе )</h3>
		<div class="settings-container">
			<div class="settings-column">
				<label for="email" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть мои контакты</h6>
				</label>
				<label for="phone" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть мои команды</h6>
				</label>
			</div>
			<div class="settings-column">
				<label for="caption" class="settings-column__label">
					<h6 class="settings-column__title">Кто может отправлять мне сообщения</h6>
				</label>
				<label for="link" class="settings-column__label">
					<h6 class="settings-column__title">Кто может видеть отзывы обо мне</h6>
				</label>
			</div>
			<div class="settings-column">
				<button @click="saveChanges()"
					class="settings-bottom__button _payments waves-effect waves-dark"
					type="button">
					<icon-check class="settings-bottom__button-icon"></icon-check>
					Сохранить изменения
				</button>
			</div>
		</div>
    </section>
</template>

<script>

	import iconCheck from '@icons/check-square';

	export default {
		name: "payments-settings",
		components: { iconCheck },
		data() {
			return {
				Selectors: [],
				Placeholders: {}
			}
		},
		computed: {
			Payments() {
				return this.$store.state.Settings.payments
			}
		},
		methods: {
			saveChanges() {
				this.$swal( 'Сохранено!' , `${ this.Confidential.email }` , 'success' )
			}
		}
	};

</script>

<style lang="scss">

    .settings._payments {}

</style>
