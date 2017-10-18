<template lang="html">
  <form @submit.prevent="submitForm(isAgent)"
        class="post-registration">
    {{ User }}
    <h3 class="post-registration__title">Заполните анкету</h3>
    <div class="post-registration-container">
      <div class="post-registration-column">

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Имя</h6>
          <input v-model="name" placeholder="Ваше имя"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Фамилия</h6>
          <input v-model="sename" placeholder="Ваша фамилия" required
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Дата рождения</h6>
          <input v-model="born" placeholder="Ваша дата рождения"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
					<h6 class="post-registration-column__title">Подпись:</h6>
					<textarea v-model="caption" placeholder="Будет отображаться в откликах на задания"
                    class="post-registration-column__input _textarea">
					</textarea>
				</label>

      </div>

      <div class="post-registration-column">

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Специализация:</h6>
          <input v-model="specialization"
                 placeholder="Что Вы умеете лучше всего?"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">ВУЗ</h6>
          <input placeholder="Ваше учебное заведение"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Факультет</h6>
          <input placeholder="Факультет"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Степень</h6>
          <input placeholder="Бакалавр, магистр..."
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Год окончания</h6>
          <input placeholder="Когда Вы получили диплом?"
                 type="text" class="post-registration-column__input" />
        </label>

      </div>
      <div class="post-registration-column">

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Ваш город:</h6>
          <input placeholder="Доступен для поиска"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Профиль Вконтакте</h6>
          <input placeholder="Ссылка вида zabaykalsky"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Профиль Facebook</h6>
          <input placeholder="Ссылка вида zabaykalsky"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Skype</h6>
          <input placeholder="Ссылка вида alex_quidditch"
                 type="text" class="post-registration-column__input" />
        </label>

        <label class="post-registration-column__label">
          <h6 class="post-registration-column__title">Telegram</h6>
          <input placeholder="Ссылка вида alex_quidditch"
                 type="text" class="post-registration-column__input" />
        </label>

      </div>
    </div>
    <div class="post-registration-bottom">
      <button @click="setRole(1)" type="submit"
              class="post-registration-bottom__button _partner"
              >Зарегистрироваться как Агент
      </button>
      <button @click="setRole(0)" type="submit"
              class="post-registration-bottom__button _client"
              >Зарегистрироваться как Пользователь
      </button>
    </div>
  </form>
</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: "Post-Registration",
    data: () => ({
      isAgent: false
    }),
    computed: {
      User() {
        return this.$store.state.User;
      },
      name: {
        get () { return this.$store.state.User.personal.name },
        set (value) { this.$store.commit( 'UPDATE_NAME' , value ) }
      },
      sename: {
        get () { return this.$store.state.User.personal.sename },
        set (value) { this.$store.commit( 'UPDATE_SENAME' , value ) }
      },
      born: {
        get () { return this.$store.state.User.personal.born },
        set (value) { this.$store.commit( 'UPDATE_BORN' , value ) }
      },
      caption: {
        get () { return this.$store.state.User.personal.caption },
        set (value) { this.$store.commit( 'UPDATE_CAPTION' , value ) }
      },
      // INFORMATION
      specialization: {
        get () { return this.$store.state.User.information.specialization },
        set (value) { this.$store.commit( 'UPDATE_SPECIALIZATION', value ) }
      },
      town: {
        get () { return this.$store.state.User.information.town },
        set (value) { this.$store.commit( 'UPDATE_TOWN' , value ) }
      },
      EDUPlace: {
        get () { return this.$store.state.User.information.education.place },
        set (value) { this.$store.commit( 'UPDATE_EDUPLACE', value ) }
      },
      faculty: {
        get () { return this.$store.state.User.information.education.faculty },
        set (value) { this.$store.commit( 'UPDATE_FACULTY' , value ) }
      },
    },
    methods: {
      setRole(choice) {
        this.isAgent = choice;
      },
      submitForm(choice) {
        console.log(this.isAgent);
      }
    }
  };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

  .post-registration {
    width: 915px;
    padding: 30px;
    border-radius: 3px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
    &__title {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
      color: #009d2f;
      color: var(--irish-green);
    }
  }

  .post-registration-container {
    display: flex;
    justify-content: space-between;
  }

	.post-registration-column {
		width: 270px;
		&__title {
			width: 100%;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__label {
			position: relative;
			display: block;
		}
		&__label-icon {
			position: absolute;
			top: 34px; right: 10px;
			width: 22px;
		}
		&__input {
			display: block;
			size: 270px 35px;
			margin: 10px 0;
			padding: 10px;
			font-size: 12px;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
			border-radius: 3px;
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
			&._textarea {
				height: 109px;
				resize: none;
			}
		}
	}
	.post-registration-bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
    margin: 20px 0 0;
		&__title {
			width: 100%;
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__label {
			position: relative;
			display: block;
			&._checkbox {
				width: 250px;
			}
		}
		&__input {
			display: block;
			size: 270px 35px;
			margin-top: 10px;
			padding: 10px;
			font-size: 12px;
			line-height: 1.5;
			color: #9b9b9b;
			color: var(--purpley-grey);
			border-radius: 3px;
			border: solid 1px rgba(155, 155, 155, 0.2);
			border: solid 1px var(--purpley-grey-20);
		}
		&__checkbox {
			margin: 9px 0 !important;
			.checkbox_label {
				font-size: 12px;
				line-height: 1.5;
				color: #9b9b9b;
				color: var(--purpley-grey);
			}
			input:focus {
				@include MDShadow-3;
			}
		}
		&__button {
			display: flex;
			justify-content: center;
			align-items: center;
			size: 48.5% 35px;
			padding: 0 10px;
			font-size: 12px;
			line-height: 35px;
			color: #fff;
			color: var(--whited);
      border: none;
      border-radius: 3px;
			transition: box-shadow .35s ease-in-out;
			&:focus,
			&:hover {
				@include MDShadow-1;
			}
			&:active {
				@include MDShadow-2;
			}
      &._partner {
        background-color: #4a4a4a;
        background-color: var(--charcoal-grey);
      }
      &._client {
        background-color: #009d2f;
        background-color: var(--irish-green);
      }
		}
		&__button-icon {
			width: 20px;
			margin-right: 10px;
			stroke-width: 2;
			stroke: #009d2f;
			stroke: var(--irish-green);
		}
	}

</style>
