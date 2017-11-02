<template lang="html">
  <section class="social">
    <social-contacts :Contacts="User.social.contacts"></social-contacts>
    <social-teams :Teams="User.social.teams"></social-teams>
    <social-company v-if="User.isAgent" :Company="User.social.company"></social-company>
  </section>
</template>

<script>

  import SocialContacts from './social/social-contacts.vue';
  import SocialTeams from './social/social-teams.vue';
  import SocialCompany from './social/social-company.vue';

  export default {
    name: "social",
    components: { SocialContacts , SocialTeams , SocialCompany },
    props: {
      'User': {
        type: Object,
        required: true
      }
    }
  };

</script>

<style lang="scss">

  .social {
    width: 321px;
  }

</style>
