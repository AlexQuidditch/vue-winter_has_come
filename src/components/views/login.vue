<template lang="html">
  <main class="main _login">
    <transition name="fade" appear>
      <button v-if="!isLoggedIn"
              @click="logOut()"
              class="logout-button waves-effect waves-light"
              >Это не я
      </button>
    </transition>
    <div :class="{ '_registration' : !isSingIn }"
         class="login-container">
      <button @click="isSingIn = true"
              :class="{ '_active' : isSingIn }"
              class="login-container__button">Вход</button>

      <button @click="isSingIn = false"
              :class="{ '_active' : !isSingIn }"
              class="login-container__button">Регистрация</button>

      <form @submit.prevent="signIn()"
            :class="{ '_opened' : isSingIn }"
            class="login-form _sign-in">
        <transition name="fade" mode="out-in">
          <img v-if="Avatar"
               :src=" backendLocation + '/upload/' + Avatar " alt="Аватар пользователя"
               class="login-form__avatar" />
          <avatar-placeholder v-else
                              class="login-form__avatar">
          </avatar-placeholder>
        </transition>
				<label class="login-form__label">
					<h6 class="login-form__title">Электронная почта:</h6>
					<input v-model="signInData.email"
                 placeholder="Электронная почта"
						     type="email" required
                 class="login-form__input" />
				</label>
				<label class="login-form__label">
					<h6 class="login-form__title">Пароль:</h6>
					<input v-model="signInData.password"
                 placeholder="Введите пароль"
						     type="password" required
                 class="login-form__input" />
				</label>
        <button type="submit" name="button"
                class="login-form__button waves-effect waves-light"
                >Войти
        </button>
      </form>

      <form @submit.prevent="registration()"
            :class="{ '_opened' : !isSingIn }"
            class="login-form _registration">
        <transition name="fade" mode="out-in">
          <img v-if="registrationData.avatar"
               :src=" backendLocation + '/upload/' + registrationData.avatar " alt="" class="login-form__avatar" />
          <label v-else class="login-form__avatar-label">
            <avatar-placeholder class="login-form__avatar"></avatar-placeholder>
            <input @change="createAvatar($event)"
                   type="file"
                   class="login-form__input _avatar" />
          </label>
        </transition>
        <label class="login-form__label">
          <h6 class="login-form__title">Ваше имя:</h6>
          <input v-model="registrationData.username"
                 placeholder="Введите имя"
                 type="text" required
                 class="login-form__input" />
        </label>
				<label class="login-form__label">
					<h6 class="login-form__title">Электронная почта:</h6>
					<input v-model="registrationData.email"
                 placeholder="Электронная почта"
						     type="email" required
                 class="login-form__input" />
				</label>
				<label class="login-form__label">
					<h6 class="login-form__title">Пароль:</h6>
					<input v-model="registrationData.password"
                 placeholder="Введите пароль"
						     type="password" required
                 class="login-form__input" />
				</label>
        <button type="submit" name="button"
                class="login-form__button waves-effect waves-light"
                >Зарегистрироваться
        </button>
      </form>
    </div>
  </main>
</template>

<script>

  import avatarPlaceholder from '@icons/avatar.js';

  export default {
    name: "Login-Page",
    components: { avatarPlaceholder },
    data: () => ({
      isSingIn: true,
      signInData: {
        email: 'AlexQuidditch@yandex.ru',
        // email: '',
        password: ''
      },
      registrationData: {
        avatar: '',
        username: '',
        email: '',
        password: ''
      }
    }),
    computed: {
      isLoggedIn() {
        return this.$store.state.Auth.isLoggedIn;
      },
      Avatar() {
        return this.$store.state.Auth.avatar;
      },
      savedUsername() {
        return this.$store.state.Auth.username;
      },
      backendLocation() {
        return this.$store.state.General.host;
      }
    },
    methods: {
      signIn() {
        this.$http.post( 'auth' , this.signInData )
          .then( ({ body }) => {
            this.$store.dispatch( 'createInstance' , body );
            this.$store.dispatch( 'createAuthData' , body );
            this.signInData = {
              email: '',
              password: ''
            };
          })
          .then( () => {
            setTimeout( () => this.$router.push( 'profile' ) , 1000 );
          })
          .catch( error => {
            console.error(error);
            if ( error.status === 401 ) {
              this.$swal( 'Ошибка!' , ' Пользователь не найден!' , 'error' )
            }
          })
      },
      registration() {
        this.$http.post( 'auth' , this.registrationData )
          .then( ({ body }) => {
            this.$store.dispatch( 'createInstance' , body );
            this.$store.dispatch( 'createAuthData' , body );
            this.registrationData = {
              password: ''
            };
          })
          .then( () => {
            setTimeout( () => this.$router.push( 'profile' ) , 1000 );
          })
          .catch( error => {
            console.error(error);
            if ( error.status === 401 ) {
              this.$swal( 'Ошибка!' , ' Пользователь не найден!' , 'error' )
            }
          })
      },
      createAvatar({ target }) {
        const files = target.files
        const formData = new FormData()
        formData.append('image', files[0] )
        this.$http.post( 'upload' , formData )
          .then( ({ body }) => this.registrationData.avatar = body[0]._id )
          .catch( err => console.error(err) )
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
    transition:
      color .3s ease-in-out,
      background-color .3s ease-in-out,
      box-shadow .3s ease-in-out;
  }

  .login-container {
    position: relative;
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
    position: absolute;
    top: 45px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
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
    &__avatar {
      size: 100px;
      padding: 5px;
      margin-bottom: 7px;
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
  }

</style>
