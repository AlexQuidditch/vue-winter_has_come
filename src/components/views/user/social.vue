<template lang="html">
  <section class="social">
    <social-contacts></social-contacts>
    <social-teams></social-teams>
  </section>
</template>

<script>

  import socialContacts from './social/social-contacts.vue';
  import socialTeams from './social/social-teams.vue';

  export default {
    name: "social",
    components: { socialContacts , socialTeams }
  };

</script>

<style lang="scss">

  .social {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 30px;
    background-color: #fff;
    background-color: var(--whited);
  }

</style>
