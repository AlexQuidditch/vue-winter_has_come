<template lang="html">
  <li class="comment-item">
    <header class="comment-header">
      <router-link :to=" currentUserID === Author._id ? { name: 'profile' } : { name: 'user', params: { id : Author._id }} " tag="img"
                   :src=" backendLocation + '/upload/' + Author.personal.avatar"
                   :alt="Author.personal.name + ' ' + Author.personal.sename"
                   class="comment-header__avatar">
      </router-link>
      <div class="comment-header__container">
        <router-link :to=" currentUserID === Author._id ? { name: 'profile' } : { name: 'user', params: { id : Author.id }}" tag="h6"
                     class="comment-header__name"
          >{{ Author.personal.name + ' ' + Author.personal.sename }}
          <transition name="heartbeat" mode="out-in">
            <span v-if="Author.isOnline" class="comment-header__online"></span>
          </transition>
        </router-link>
        <span class="comment-header__time">{{ published }}</span>
      </div>
    </header>
    <article class="comment-content">{{ CommentItem.content }}</article>
    <footer class="comment-footer">
      <button @click="likeIt()"
              :class="{ '_update' : hasLiked }"
              class="comment-footer__button waves-effect waves-dark"
              type="button">
        <span class="comment-footer__button-content _likes" aria-label="Количество лайков">{{ CommentItem.likes.length }}</span>
        <icon-heart :Width="2"
                    :class="{ '_active' : isLiked }"
                    class="comment-footer__button-icon _likes"
                    aria-label="Лайкнуть запись">
        </icon-heart>
      </button>
    </footer>
  </li>
</template>

<script>

  import API from '@api';

  import iconHeart from '@icons/heart.js';

  export default {
    name: "comment-item",
    components: { iconHeart },
    props: {
      'CommentItem': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      Author: {
      	_id: '',
      	isAgent: null,
      	wall: [],
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
      },
      isLiked: false,
      hasLiked: false
    }),
    watch: {
      isLiked() {
  			this.hasLiked = true;
  			setTimeout( () => this.hasLiked = false , 250 )
      }
    },
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      published() {
        return new Date(this.CommentItem.time).toLocaleString('ru-RU' , { hour: '2-digit' , minute: '2-digit' , day: '2-digit' , month: 'long' })
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    created() {
      API.get( `users/get/${ this.CommentItem.authorID }` )
        .then( ({ body }) => Object.assign( this.Author , body ) )
        .catch( error => console.error(error) )
    },
    methods: {
      likeIt() {
        this.isLiked =! this.isLiked;
        this.$store.dispatch( 'likeComment' , [ this.CommentItem.id , this.isLiked ? 1 : -1 ] );
      }
    }
  };
</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins.scss";

  .comment-item {
    padding: 20px;
		border-top: solid 1px rgba( #9b9b9b , .3 );
  }

  .comment-header {
    position: relative;
    display: flex;
    &__container {
      padding-left: 10px;
    }
    &__comments-icon {
      size: 25px;
      vertical-align: middle;
      transform: scale(1);
      transition:
        transform .15s ease;
      &._update {
        transform: scale(1.25);
      }
    }
    &__comments-counter {
      position: absolute;
      top: 0; right: 0;
      height: 25px;
      margin: 0;
      font-size: 14px;
      font-weight: 300;
      line-height: 25px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__avatar {
      size: 50px;
      object-fit: cover;
      border-radius: 50%;
      @include MDShadow-1;
    }
    &__name {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 25px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      cursor: pointer;
      &:hover {
        text-decoration: underline !important;
      }
    }
    &__time {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 25px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__online {
      position: relative;
      display: inline-block;
      left: 5px; top: 5px;
      size: 10px;
      transform: translateY(-50%);
      &::before {
        position: absolute;
        content: '';
        size: 10px;
        border-radius: 50%;
        background-color: #009d2f;
        background-color: var(--irish-green);
        @include MDShadow-1(#009d2f);
      }
    }
  }

  .comment-content {
    margin: 20px 0;
    font-size: 14px;
    line-height: 1.25;
    color: #4a4a4a;
    color: var(--charcoal-grey);
    white-space: pre-wrap;
  }

  .comment-footer {
    display: flex;
    justify-content: flex-end;
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      size: auto 34px;
      padding: 0 10px; margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 34px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      border: none;
      border-radius: 3px;
      transform: scale(1);
      @include MDShadow-1;
      transition:
        transform .15s ease;
      &._update {
				transform: scale(1.15);
      }
      &._comment {
        color: #fff;
        color: var(--whited);
        background-color: #009d2f;
        background-color: var(--irish-green);
      }
    }
    &__button-icon {
      width: 18px;
			transform: scale(1);
      transition:
        transform .15s ease,
        stroke .15s ease;
      &._active {
        stroke: #009d2f;
        stroke: var(--irish-green);
        fill: #009d2f;
        fill: var(--irish-green);
      }
      &._likes {
        margin-left: 5px;
      }
      &._comment {
        margin-left: 5px;
      }
    }
  }

  .heartbeat-enter-active {
		animation: heartbeat .75s ease-in-out forwards;
	}
	.heartbeat-leave-active {
		animation: heartbeat .5s ease-in-out reverse forwards;
	}

	@keyframes heartbeat {
		from {
			transform: scale(0) translateY(-50%);
			transform-origin: center center;
		}
		45% {
			transform: scale(1.35) translateY(-50%);
		}
		100% {
			transform: scale(1) translateY(-50%);
		}
	}

	@keyframes ping {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		80% {
			transform: scale(1.25);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

</style>
