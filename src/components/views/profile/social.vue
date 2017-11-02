<template lang="html">
  <section class="social">
    <social-contacts></social-contacts>
    <social-teams></social-teams>
    <social-company v-if="User.isAgent"></social-company>
  </section>
</template>

<script>

  import SocialContacts from './social/social-contacts.vue';
  import SocialTeams from './social/social-teams.vue';
  import SocialCompany from './social/social-company.vue';

  export default {
    name: "social",
    components: { SocialContacts , SocialTeams , SocialCompany },
    computed: {
      User() {
        return this.$store.state.User;
      }
    }
  };

</script>

<style lang="scss">

  .social {
    width: 321px;
  }

</style>
