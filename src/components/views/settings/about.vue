<template lang="html">
  <section class="settings _about">
    <h3 class="settings__title">Информация обо мне</h3>
    <div class="settings-container">
      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Специализация:</h6>
          <input type="text" class="settings-column__input">
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Ваш город:</h6>
          <input type="text" class="settings-column__input">
        </label>

      </div>

      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">ВУЗ</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Факультет</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Степень</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Год окончания</h6>
          <input type="text" class="settings-column__input" />
        </label>

      </div>
      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Профиль Вконтакте</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Профиль Facebook</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Skype</h6>
          <input type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Telegram</h6>
          <input type="text" class="settings-column__input" />
        </label>

      </div>
    </div>
    <div class="settings-bottom">

    </div>
  </section>
</template>

<script>

	import { mapActions } from 'vuex';

  export default {
    name: "Settings_About",
    data: () => ({
      Placeholders: {
        email: 'Ваш почтн',
        phone: '+7 *** *** ** 35',
        link: 'elena.ivanova',
        bornDate: '22-06-1994',
        password: 'Обновлен 6 дней назад',
        caption: 'Здесь находится Ваша подпись.\nНапример, контакты.'
      }
    }),
    computed: {
      Common() {
				return this.$store.state.User
			}
    },
    methods: {
			...mapActions([])
    }
  };

</script>

<style lang="scss">

  .settings._about {}

</style>
