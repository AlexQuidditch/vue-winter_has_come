<template lang="html">
  <main class="main _login">
    <div :class="{ '_registration' : !isSingIn }"
         class="login-container">
      <button @click="isSingIn = true"
              :class="{ '_active' : isSingIn }"
              class="login-container__button">Вход</button>
      <button @click="isSingIn = false"
              :class="{ '_active' : !isSingIn }"
              class="login-container__button">Регистрация</button>
        <form @submit.prevent=""
              class="login-form">
          <!-- <img src="" alt="" class="login-form__avatar" /> -->
          <avatar-placeholder class="login-form__avatar"></avatar-placeholder>
          <transition name="fade" mode="out-in" appear>
            <label v-if="!isSingIn" class="login-form__label">
              <h6 class="login-form__title">Ваше имя:</h6>
              <input placeholder="Введите имя"
                     type="text" required
                     class="login-form__input" />
            </label>
          </transition>
  				<label class="login-form__label">
  					<h6 class="login-form__title">Электронная почта:</h6>
  					<input placeholder="Электронная почта"
  						     type="email" required
                   class="login-form__input" />
  				</label>
  				<label class="login-form__label">
  					<h6 class="login-form__title">Пароль:</h6>
  					<input placeholder="Введите пароль"
  						     type="password" required
                   class="login-form__input" />
  				</label>
          <transition name="fade" mode="out-in">
            <button v-if="isSingIn" key="isSingIn"
                    type="submit" name="button"
                    class="login-form__button waves-effect waves-light"
                    >Войти
            </button>
            <button v-else key="isNotSingIn"
                    type="submit" name="button"
                    class="login-form__button waves-effect waves-light"
                    >Зарегистрироваться
            </button>
          </transition>
        </form>
        <!-- <form
              @submit.prevent=""
              class="login-form">
          <img src="" alt="" class="login-form__avatar" />
          <avatar-placeholder class="login-form__avatar"></avatar-placeholder>
  				<label class="login-form__label">
  					<h6 class="login-form__title">Ваше имя:</h6>
  					<input placeholder="Введите имя"
  						     type="text" required
                   class="login-form__input" />
  				</label>
  				<label class="login-form__label">
  					<h6 class="login-form__title">Электронная почта:</h6>
  					<input placeholder="Электронная почта"
  						     type="email" required
                   class="login-form__input" />
  				</label>
  				<label class="login-form__label">
  					<h6 class="login-form__title">Пароль:</h6>
  					<input placeholder="Введите пароль"
  						     type="password" required
                   class="login-form__input" />
  				</label>
          <button type="submit" name="button"
                  class="login-form__button waves-effect waves-light"
                  >Зарегистрироваться
          </button>
        </form> -->
    </div>
  </main>
</template>

<script>

  import avatarPlaceholder from '@icons/avatar.js';

  export default {
    name: "login-page",
    components: { avatarPlaceholder },
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
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    size: 300px 395px;
		background-color: #fff;
		background-color: var(--whited);
    @include MDShadow-5;
    border-radius: 3px;
    transition: .3s ease;
    &._registration {
      height: 463px;
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
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    &__avatar {
      size: 100px;
      margin-bottom: 10px;
      border-radius: 50%;
    }
		&__label {
			position: relative;
			display: block;
      width: 100%;
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
  }

</style>
