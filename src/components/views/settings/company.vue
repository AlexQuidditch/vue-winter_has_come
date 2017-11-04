<template lang="html">
  <section class="settings _about">
    <h3 class="settings__title">Информация о компании</h3>
    <div class="settings-container">
      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Название:</h6>
          <input v-model="title"
      					 :placeholder="Placeholders.title"
                 type="text" class="settings-column__input">
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Ссылка:</h6>
          <input v-model="link"
      					 :placeholder="Placeholders.link"
                 type="text" class="settings-column__input">
        </label>

      </div>

      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Род деятельности</h6>
          <input v-model="activities"
      					 :placeholder="Placeholders.activities"
                 type="text" class="settings-column__input" />
        </label>

        <label class="settings-column__label">
          <h6 class="settings-column__title">Дата основания</h6>
          <input v-model="starts"
      					 :placeholder="Placeholders.starts"
                 type="text" class="settings-column__input" />
        </label>

      </div>

      <div class="settings-column">

        <label class="settings-column__label">
          <h6 class="settings-column__title">Достижения компании</h6>
          <input v-model="achivements"
      					 :placeholder="Placeholders.achivements"
                 type="text" class="settings-column__input" />
        </label>

  			<button @click="saveCompany()"
  							class="settings-bottom__button _company waves-effect waves-dark"
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
    name: "Settings_Company",
    components: { iconCheck },
    data: () => ({
      Placeholders: {
        title: '',
        link: '',
        activities: '',
        starts: '',
        achivements: ''
      }
    }),
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      Company() {
        return this.$store.state.Settings.company;
      },
      title: {
        get () { return this.Company.title },
        set (value) { this.$store.commit( 'COMPANY_TITLE_UPDATE', value ) }
      },
      link: {
        get () { return this.Company.link },
        set (value) { this.$store.commit( 'COMPANY_LINK_UPDATE' , value ) }
      },
      activities: {
        get () { return this.Company.activities },
        set (value) { this.$store.commit( 'COMPANY_ACTIVITIES_UPDATE' , value ) }
      },
      starts: {
        get () { return this.Company.starts },
        set (value) { this.$store.commit( 'COMPANY_STARTS_UPDATE', value ) }
      },
      achivements: {
        get () { return this.Company.achivements },
        set (value) { this.$store.commit( 'COMPANY_ACHIVEMENTS_UPDATE' , value ) }
      }
    },
    created() {
      const currentUser = this.$store.state.User;
      this.Placeholders = {
        title: currentUser.information.company.title,
        link: currentUser.information.company.link,
        activities: currentUser.social.company.activities,
        starts: currentUser.social.company.starts,
        achivements: currentUser.social.company.achivements
      };
    },
    methods: {
      saveCompany() {
        this.$store.dispatch( 'saveCompany' , this.currentUserID )
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
