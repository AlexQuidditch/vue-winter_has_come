<template lang="html">
  <section class="settings _about">
    <h3 class="settings__title">Информация обо мне</h3>
    <div class="settings-container">
      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Специализация:</h6>
          <input v-model="specialization"
      					 :placeholder="Placeholders.specialization"
                 type="text" class="settings-column__input">
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Ваш город:</h6>
          <input v-model="town"
      					 :placeholder="Placeholders.town"
                 type="text" class="settings-column__input">
        </label>

				<label class="settings-column__label">
					<h6 class="settings-column__title">О себе:</h6>
					<textarea v-model="about"
      					    :placeholder="Placeholders.about"
	        					class="settings-column__input _textarea">
					</textarea>
				</label>

      </div>

      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">ВУЗ</h6>
          <input v-model="EDUPlace"
      					 :placeholder="Placeholders.EDUPlace"
                 type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Факультет</h6>
          <input v-model="faculty"
      					 :placeholder="Placeholders.faculty"
                 type="text" class="settings-column__input" />
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
          <input v-model="vk"
      					 :placeholder="Placeholders.vk"
                 type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Профиль Facebook</h6>
          <input v-model="fb"
      					 :placeholder="Placeholders.fb"
                 type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Skype</h6>
          <input v-model="skype"
      					 :placeholder="Placeholders.skype"
                 type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Telegram</h6>
          <input v-model="telegram"
      					 :placeholder="Placeholders.telegram"
                 type="text" class="settings-column__input" />
        </label>

      </div>
    </div>
    <div class="settings-bottom">
			<button @click="saveCommon()"
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

  export default {
    name: "Settings_About",
    components: { iconCheck },
    data: () => ({
      Placeholders: {
        specialization: '',
        town: '',
        about: '',
        EDUPlace: '',
        faculty: '',
        vk: '',
        fb: '',
        skype: '',
        telegram: ''
      }
    }),
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      About() {
        return this.$store.state.Settings.about;
      },
      // INFORMATION
      specialization: {
        get () { return this.About.specialization },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_SPECIALIZATION', value ) }
      },
      town: {
        get () { return this.About.town },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_TOWN' , value ) }
      },
      about: {
        get () { return this.About.about },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_ABOUT' , value ) }
      },
      EDUPlace: {
        get () { return this.About.education.place },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_EDUPLACE', value ) }
      },
      faculty: {
        get () { return this.About.education.faculty },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_FACULTY' , value ) }
      },
      // SOCIAL
      vk: {
        get () { return this.About.vk },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_VK' , value ) }
      },
      fb: {
        get () { return this.About.fb },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_FB' , value ) }
      },
      skype: {
        get () { return this.About.skype },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_SKYPE' , value ) }
      },
      telegram: {
        get () { return this.About.telegram },
        set (value) { this.$store.commit( 'SETTINGS_UPDATE_TELEGRAM' , value ) }
      }
    },
    created() {
      const currentUser = this.$store.state.User;
      this.Placeholders = {
        specialization: currentUser.information.specialization,
        town: currentUser.information.town,
        about: currentUser.information.about,
        EDUPlace: currentUser.information.education.place,
        faculty: currentUser.information.education.faculty,
        vk: currentUser.social.contacts.vk,
        fb: currentUser.social.contacts.fb,
        skype: currentUser.social.contacts.skype,
        telegram: currentUser.social.contacts.telegram
      };
    },
    methods: {
      saveCommon() {
        this.$store.dispatch( 'saveAbout' , this.currentUserID )
          .then( ({ body }) => {
            this.$store.dispatch( 'updateInstance' , body );
            this.$swal( 'Ура!' , 'Изменения сохранены' , 'success' )
          })
          .catch( err => {
            console.error(err);
            this.$swal( 'Ой-йо-ой...' , 'Сервер не ответил!' , 'error' )
          });
      }
    }
  };

</script>

<style lang="scss">

  .settings._about {}

</style>
