<template lang="html">
  <form @submit.prevent="registration()"
        class="login-form _registration">

    <div class="login-form-container">
      <label class="login-form__avatar-label _registration">
        <transition name="fade" mode="out-in">
          <img v-if="registrationData.avatar" :key="registrationData.avatar"
               :src=" backendLocation + '/upload/' + registrationData.avatar " alt=""
               class="login-form__avatar" />
          <avatar-placeholder v-else class="login-form__avatar"></avatar-placeholder>
        </transition>
        <input @change="createAvatar($event.target.files)"
               type="file" required
               class="login-form__input _avatar" />
      </label>
      <div class="login-form__gender">
        <h6 class="login-form__gender-title">Ваш пол</h6>
        <label :class=" registrationData.gender === 'male' ? '_selected waves-effect waves-light' : '' "
               class="login-form__gender-label">
          Мужской
          <input v-model="registrationData.gender" value="male"
                 type="radio" name="gender"
                 class="login-form__gender-input" />
        </label>
        <label :class=" registrationData.gender === 'female' ? '_selected waves-effect waves-light' : '' "
               class="login-form__gender-label">
          Женский
          <input v-model="registrationData.gender" value="female"
                 type="radio" name="gender"
                 class="login-form__gender-input" />
        </label>
      </div>
    </div>

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
</template>

<script>

  import avatarPlaceholder from '@icons/avatar.js';

  export default {
    name: "Login-Registration",
    components: { avatarPlaceholder },
    data: () => ({
      registrationData: {
        avatar: '',
        username: '',
        email: '',
        password: '',
        gender: ''
      }
    }),
    computed: {
      backendLocation() {
        return this.$store.state.General.host;
      }
    },
    methods: {
      registration() {
        this.$http.post( 'auth' , this.registrationData )
          .then( ({ body }) => {
            this.$store.dispatch( 'createInstance' , body );
            this.$store.dispatch( 'createAuthData' , body );
            this.registrationData.password = '';
          })
          .then( () => {
            setTimeout( () => this.$emit('Registered') , 1000 );
          })
          .catch( error => {
            console.error(error);
            if ( error.status === 401 ) {
              this.$swal( 'Ошибка!' , ' Пользователь не найден!' , 'error' )
            }
          })
      },
      createAvatar(files) {
        const formData = new FormData()
        formData.append('image', files[0] )
        this.$http.post( 'upload' , formData )
          .then( ({ body }) => this.registrationData.avatar = body[0]._id )
          .catch( err => console.error(err) )
      }
    }
  };

</script>
