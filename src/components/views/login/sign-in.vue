<template lang="html">
  <form @submit.prevent="signIn()"
        class="login-form _sign-in">
    <transition name="fade" mode="out-in">
      <img v-if="Avatar.length"
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
</template>

<script>

  import avatarPlaceholder from '@icons/avatar.js';

  export default {
    name: "Login-Sign-In",
    components: { avatarPlaceholder },
    data: () => ({
      signInData: {
        email: 'AlexQuidditch@yandex.ru',
        // email: '',
        password: ''
      }
    }),
    computed: {
      Avatar() {
        return this.$store.state.Auth.avatar;
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
      }
    }
  };

</script>
