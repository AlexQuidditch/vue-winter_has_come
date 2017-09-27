<template lang="html">
  <main class="main _login">
    <div class="login-container">
      <button @click="isSingIn =! isSingIn"
              class="login-container__button">Вход</button>
      <button @click="isSingIn =! isSingIn"
              class="login-container__button">Регистрация</button>
      <transition name="fade" mode="out-in" appear>
        <form v-if="isSingIn" key="sing"
              @submit.prevent=""
              class="login-form">
          <img src="" alt="" class="login-form__avatar" />
        </form>
        <form v-else key="login"
              @submit.prevent=""
              class="login-form">
              lol
        </form>
      </transition>
    </div>
  </main>
</template>

<script>

  export default {
    name: "login-page",
    data: () => ({
      isSingIn: true
    }),
    methods: {

    }
  };

</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins.scss";

  .main._login {
    display: flex;
    justify-content: center;
    align-items: center;
    size: 100% 100vh;
    margin-top: 0;
  }

  .login-container {
    size: 500px auto;
		background-color: #fff;
		background-color: var(--whited);
    @include MDShadow-5;
    transition: .3s ease;
  }

  .login-form {
    &__avatar {}

  }

</style>
