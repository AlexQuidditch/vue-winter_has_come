<template lang="html">
  <li class="response-item">
    <div class="response-header">
      <router-link :to="Author._id === currentUserID ? { name: 'profile' } : { name: 'user', params: { id : Author._id }}"
                   tag="img"
                   :src=" backendLocation + '/upload/' + Author.personal.avatar"
                   :title="Author.personal.name + ' ' + Author.personal.sename"
                   class="response-header__avatar"
                   alt="Открыть профиль">
      </router-link>
      <div class="response-header__container">
        <router-link :to="Author._id === currentUserID ? { name: 'profile' } : { name: 'user', params: { id : Author._id }}"
                     tag="p"
                     class="response-header__name">
          {{ Author.personal.name }} {{ Author.personal.sename }}
          <span>({{ Author.ratings.mainRate }})</span>
        </router-link>
        <p class="response-header__time-ago">{{ published }}</p>
      </div>
    </div>
    <div class="response-main">
      <div class="response-main__column">
        <p class="response-main__feedback">{{ responseItem.feedBack }}</p>
        <div class="response-main__divider"></div>
        <p class="response-main__caption">{{ responseItem.caption }}</p>
      </div>
      <ul class="response-main__column portfolio-list">
        <router-link v-for="work in Author.personal.works" :key="work._id"
                     :to="{ name: 'task', params: { id : work._id }}"
                     tag="li"
                     class="portfolio-list__item">
          <img :src=" backendLocation + '/upload/' + work.preview " :alt="work._id"
               class="portfolio-list__item-preview" />
        </router-link>
      </ul>
    </div>
    <div class="response-footer">
      <template v-if="taskItem.authorID === currentUserID && !taskItem.isEngaged && taskItem.completed.status == 'notCompleted'">
        <button @click="$emit( 'takeEngaged' , Author._id )" class="response-footer__button">Назначить</button>
        <button @click="$emit( 'cancelEngage' )" class="response-footer__button">Отклонить</button>
      </template>
      <button v-else-if="taskItem.engagedID === responseItem.authorID" class="response-footer__button">Назначен исполнителем</button>
    </div>
  </li>
</template>

<script>

  import API from '@api';

  import { longDate } from '@helpers/dateFormat.js';

  // import authorTemplate from '@collections/userTemplate.json';

  export default {
    name: "response-item",
    props: {
      'ResponseID': {
        type: String,
        required: true
      },
      'taskItem': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      responseItem: {
        authorID: '',
        postedAgo: '',
        feedBack: '',
        caption: '',
        isEngage: ''
      },
      Author: {
      	_id: '',
      	isAgent: null,
      	wallID: '',
      	personal: {
      		avatar: '',
      		name: '',
      		sename: '',
      		email: '',
      		password: '',
      		born: '',
      		gender: '',
      		caption: '',
          about: ''
      	},
      	information: {
      		specialization: '',
      		lastVisit: '',
      		status: '',
      		town: '',
      		country: '',
      		education: {
      			place: '',
      			faculty: ''
      		},
      		company: {
      			title: '',
      			link: ''
      		}
      	},
      	registrationDate: '',
      	popularity: '',
      	responses: {
      		issued: 0,
      		positive: 0,
      		negative: 0
      	},
      	ratings: {
      		mainRate: 0,
      		average: 0,
      		completed: 0,
      		tests: {
      			value: 0,
      			total: 0,
      			rate: 0
      		}
      	},
      	social: {
      		contacts: {
            phone: '',
      			vk: '',
      			fb: '',
      			skype: '',
      			telegram: ''
      		},
      		teams: [],
      		company: {
      			activities: '',
      			starts: '',
      			achivements: ''
      		}
      	},
      	portfolio: [],
        reviews: [],
      	tasks: []
      }
    }),
    created() {
      API.get( `response/get/${ this.ResponseID }` )
        .then( ({ body }) => {
          Object.assign( this.responseItem , body );
          API.get( `users/get/${ this.responseItem.authorID }` )
            .then( ({ body }) => Object.assign( this.Author , body ) )
            .catch( error => console.error(error) )
        })
        .catch( error => console.error(error) )
    },
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      backendLocation() {
        return this.$store.state.General
      },
      published() {
        return new Date(this.responseItem.postedAgo).toLocaleString('ru-RU' , longDate );
      }
    }
  };

</script>

<style lang="scss" scoped>

  @import "../../stylesheets/partials/_mixins";

  .response-item {
    padding: 20px;
    margin-bottom: 30px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
  }

  .response-header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &__avatar {
      size: 50px;
      object-fit: cover;
      cursor: pointer;
      border-radius: 50%;
      @include MDShadow-1;
    }
    &__name {
      margin: 0 0 0 10px;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.46;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      &:hover  {
        cursor: pointer;
        text-decoration: underline !important;
      }
      span {
        color: #009d2f;
        color: var(--irish-green);
      }
    }
    &__time-ago {
      margin: 0 0 0 10px;
      font-size: 12px;
      line-height: 1.5;
      color: #9b9b9b;
      color: var(--purpley-grey);
    }
  }

  .response-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__column {
      width: 310px;
    }
    &__feedback {
      font-size: 12px;
      line-height: 1.5;
      color: #9b9b9b;
      color: var(--purpley-grey);
    }
    &__divider {
      border-bottom: solid 1px rgba(75, 75, 75, 0.5);
      border-bottom: solid 1px var(--purpley-grey-20);
    }
    &__caption {
      font-size: 12px;
      font-style: italic;
      line-height: 1.5;
      color: #9b9b9b;
      color: var(--purpley-grey);
    }
    .portfolio-list {
      display: flex;
      justify-content: space-between;
      min-width: 310px;
      size: 310px 130px;
      &__item {
        overflow: hidden;
        size: 150px 120px;
        padding: 10px;
        background-color: #fff;
        background-color: var(--whited);
        border-radius: 3px;
        cursor: pointer;
        @include MDShadow-1;
        transition: box-shadow .3s ease-in-out;
        &:hover {
          @include MDShadow-2;
        }
      }
      &__item-preview {
        size: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .response-footer {
    &__button {
      height: 35px;
      padding: 0 10px;
      margin-right: 14px;
      font-size: 12px;
      line-height: 33px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      background-color: #fff;
      background-color: var(--whited);
      border: solid 1px rgba(155, 155, 155, 0.2);
      border: solid 1px var(--purpley-grey-20);
      border-radius: 3px;
    }
  }

</style>
