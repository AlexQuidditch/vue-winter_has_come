<template lang="html">
  <section class="social">
		<social-contacts></social-contacts>
		<social-company></social-company>
  </section>
</template>

<script>

  import socialContacts from './social/social-contacts.vue';
  import socialCompany from './social/social-company.vue';

  export default {
    name: "social",
    components: { socialContacts , socialCompany }
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
