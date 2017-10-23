<template lang="html">
  <form @submit.prevent="sendResponse()"
        class="response-form">
    <header class="response-form-header">
      header
    </header>
    <div class="response-form-content"></div>
    <footer class="response-form-footer"></footer>
  </form>
</template>

<script>

  export default {
    name: "Response-Form",
    data: () => ({

    })
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .response-form {
    margin-top: 20px;
    padding: 20px;
    color: #4a4a4a;
    color: var(--charcoal-grey);
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
  }

</style>
