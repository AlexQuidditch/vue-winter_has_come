<template lang="html">
  <main class="main _login">
    <button @click="logOut()" key="wqdkq"
            :class="{ '_visible' : isLoggedIn.length }"
            class="logout-button waves-effect waves-light"
            >Это не я
    </button>
    <!-- <button @click="registred =! registred"
            class="logout-button _second waves-effect waves-light"
            >Это не sqdя
    </button> -->
    <transition name="fade" mode="out-in">

      <div v-if="!registred" key="notRegistred" class="login-hello-container">

        <div class="hello-message">
          <h1 class="hello-message__title">Добро пожаловать!</h1>
          <p class="hello-message__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius nisi ratione eveniet, quidem sequi molestiae! Ducimus ea, omnis, error culpa amet ab reprehenderit et neque atque soluta consectetur, quos.</p>
        </div>

        <div :class="{ '_registration' : !isSingIn }"
             class="login-container">
          <button @click="isSingIn = true"
                  :class="{ '_active' : isSingIn }"
                  class="login-container__button"
                  >Вход
          </button>

          <button @click="isSingIn = false"
                  :class="{ '_active' : !isSingIn }"
                  class="login-container__button"
                  >Регистрация
          </button>

          <login-sign-in :class="{ '_opened' : isSingIn }"></login-sign-in>

          <login-registration @Registered="setRegistered()" :class="{ '_opened' : !isSingIn }"></login-registration>

        </div>

      </div>

      <post-registration v-else key="registred"></post-registration>

    </transition>
  </main>
</template>

<script>

  import LoginSignIn from './login/sign-in.vue';
  import LoginRegistration from './login/registration.vue';
  import PostRegistration from './login/post-registration.vue';

  export default {
    name: "Login-Page",
    components: { PostRegistration , LoginSignIn , LoginRegistration },
    data: () => ({
      isSingIn: true,
      registred: false,
    }),
    watch: {
      isSingIn() {
        if ( !this.isSingIn ) {
          this.$store.dispatch( 'destroyInstance' );
        }
      }
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.Auth.email;
      }
    },
    methods: {
      setRegistered() {
        this.registred = true;
      },
      logOut() {
        this.$store.dispatch( 'destroyInstance' );
        this.$store.dispatch( 'destroyAuthData' );
      }
    }
  };

</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins.scss";

  .main._login {
    position: absolute 0;
    display: flex;
    justify-content: center;
    align-items: center;
    size: 100% 100vh;
    margin-top: 0;
  }

  .logout-button {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 5vmin; right: 5vmin;
    size: 100px 30px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    color: var(--whited);
    background-color: #009d2f;
    background-color: var(--irish-green);
    @include MDShadow-1;
    border: none;
    transition: .3s ease-in-out;
    &._visible {
      opacity: 1;
      visibility: visible;
    }
  }

  .login-hello-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .hello-message {
    flex: 1 1 300px;
    max-width: 500px;
    padding: 30px;
		background-color: #fff;
		background-color: var(--whited);
    @include MDShadow-2;
    border-radius: 3px;
    &__title {
      margin: 0;
      margin-bottom: 16px;
    }
    &__content {
      margin: 0;
    }
  }

  .login-container {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    size: 300px 420px;
		background-color: #fff;
		background-color: var(--whited);
    @include MDShadow-5;
    border-radius: 3px;
    transition: .3s ease;
    &._registration {
      height: 496px;
    }
    &__button {
      size: 50% 45px;
      text-align: center;
      font-weight: 600;
			color: #009d2f;
			color: var(--irish-green);
      background-color: #fff;
      background-color: var(--whited);
      @include MDShadow-1;
      border: none;
      transition:
        color .3s ease-in-out,
        background-color .3s ease-in-out,
        box-shadow .3s ease-in-out;
      &._active {
  			color: #fff;
  			color: var(--whited);
  			background-color: #009d2f;
  			background-color: var(--irish-green);
      }
    }
  }

  .login-form {
    position: absolute;
    top: 45px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    padding-top: 30px;
    transition: transform .3s ease;
    &._sign-in {
      transform: translateX(-100%)
    }
    &._sign-in._opened {
      transform: translateX(0)
    }
    &._registration {
      transform: translateX(100%)
    }
    &._registration._opened {
      transform: translateX(0)
    }
    &__title {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.46;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__gender {}
    &__gender-title {
      @extend .login-form__title;
      text-align: center;
    }
    &__gender-label {
      position: relative;
      display: block;
      size: 100px 30px;
      margin: 5px 0;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      line-height: 30px;
      color: #009d2f;
      color: var(--irish-green);
      background-color: #fff;
      background-color: var(--whited);
      border: none;
      cursor: pointer;
      @include MDShadow-1;
      transition:
        color .3s ease-in-out,
        background-color .3s ease-in-out,
        box-shadow .3s ease-in-out;
      &._selected {
        color: #fff;
        color: var(--whited);
        background-color: #009d2f;
        background-color: var(--irish-green);
      }
    }
    &__gender-input {
      position: absolute;
      left: -999em;
      z-index: -10;
    }
    &__avatar {
      size: 100px;
      padding: 5px;
      margin-bottom: 14px;
      object-fit: contain;
      background-color: #fff;
      background-color: var(--whited);
      border-radius: 50%;
      @include MDShadow-2;
    }
    &__avatar-label {
      position: relative;
      background-color: #fff;
      background-color: var(--whited);
    }
    &__saved-username {
      size: 100% 73px;
      text-align: center;
      line-height: 73px;
    }
		&__label {
		  overflow: hidden;
			position: relative;
			display: block;
      width: 100%;
      cursor: pointer;
    }
    &__input {
      display: block;
      size: 100% 35px;
      margin: 10px 0;
      padding: 10px;
      font-size: 12px;
      line-height: 1.5;
      color: #9b9b9b;
      color: var(--purpley-grey);
      border-radius: 3px;
      border: solid 1px rgba(155, 155, 155, 0.2);
      border: solid 1px var(--purpley-grey-20);
      &::placeholder {}
      &._avatar {
        z-index: -10;
        position: absolute 0;
        size: 100px;
        max-width: 100px;
        padding: 0;
        margin: 0;
        border: none;
        border-radius: 50%;
      }
    }
    &__button {
      size: 100% 45px;
      margin-top: 20px;
      text-align: center;
      font-weight: 600;
      color: #fff;
      color: var(--whited);
      background-color: #009d2f;
      background-color: var(--irish-green);
      @include MDShadow-1;
      border: none;
      transition:
        color .3s ease-in-out,
        background-color .3s ease-in-out,
        box-shadow .3s ease-in-out;
    }
    .login-form-container {
      position: relative;
      display: flex;
      justify-content: space-around;
      size: 100% 117px;
    }
  }

</style>
