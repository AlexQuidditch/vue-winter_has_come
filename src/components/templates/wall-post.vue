<template lang="html">
  <li class="wall-post">
    <header class="post-header">
      <router-link :to=" currentUserID === Author._id ? { name: 'profile' } : { name: 'user', params: { id : Post.authorID }} "
                   tag="img"
                   :src=" backendLocation + '/upload/' + Author.personal.avatar"
                   :title="Author.personal.name + ' ' + Author.personal.sename"
                   class="post-header__avatar">
      </router-link>
      <div class="post-header__container">
        <router-link :to=" currentUserID === Author._id ? { name: 'profile' } : { name: 'user', params: { id : Post.authorID }} "
                     tag="h6"
                     class="post-header__name"
          >{{ Author.personal.name + ' ' + Author.personal.sename }}
          <transition name="heartbeat" mode="out-in">
            <span v-if="Author.isOnline" class="post-header__online"></span>
          </transition>
        </router-link>
        <span class="post-header__time">{{ published }}</span>
      </div>
      <span class="post-header__comments-counter">
        {{ commentsLength }}
        <icon-comments :Width="1" :class="{ '_update' : hasComment }"
                  class="post-header__comments-icon">
        </icon-comments>
      </span>
    </header>
    <article class="post-content">{{ Post.content }}</article>
    <footer class="post-footer">
      <button @click="toComment = true"
              class="post-footer__button _comment waves-effect waves-light"
              type="submit">
        Прокомментировать
        <icon-comments :Width="2" :Stroke="'#fff'" class="post-footer__button-icon _comment"></icon-comments>
      </button>
      <button @click="likeIt()"
              :class="{ '_update' : hasLiked }"
              class="post-footer__button waves-effect waves-dark"
              type="button" aria-label="Лайкнуть запись">
        <span class="post-footer__button-content _likes" aria-label="Количество лайков">{{ Post.likes.length }}</span>
        <icon-heart :Width="2"
                    :class="{ '_active' : isLiked }"
                    class="post-footer__button-icon _likes">
        </icon-heart>
      </button>
    </footer>
    <transition-group name="list" tag="ul" mode="out-in" class="comments-list">
      <comments-item v-for="( commentItem , index ) in Post.comments" :key="index"
                     :CommentItem="commentItem"
                     @likeComment="savePost()">
      </comments-item>
    </transition-group>
    <transition name="fade">
      <form v-if="toComment" @submit.prevent="commentIt()" class="post-form">
        <textarea v-model="postComment"
                  placeholder="Ваш комментарий..."
                  class="post-form__textarea"
                  required >
        </textarea>
        <button class="post-form__submit waves-effect waves-light"
                type="submit">
          Отправить
          <icon-comments :Width="2" :Stroke="'#fff'" class="post-footer__button-icon _comment"></icon-comments>
        </button>
      </form>
    </transition>
  </li>
</template>

<script>

  import API from '@api';

  import { longDate } from '@helpers/dateFormat';

  import iconHeart from '@icons/heart.js';
  import iconComments from '@icons/comments';
  import commentsItem from '@templates/comment-item.vue';

  export default {
    name: "wall-post",
    components: { iconHeart , iconComments , commentsItem },
    props: {
      'WallPostID': {
        type: String,
        required: true
      },
      'User': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      Post: {
      	authorID: '',
      	time: '',
      	content: '',
      	attacments: '',
      	likes: [],
      	reposts: '',
      	comments: []
      },
      Author: {
      	_id: '',
      	isAgent: null,
      	wall: [],
        friends: {
          accepted: [],
          requests: []
        },
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
      		country: 'Россия',
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
      },
      hasLiked: false,
      hasComment: false,
      toComment: false,
      postComment: ''
    }),
    watch: {
      isLiked() {
  			this.hasLiked = true;
  			setTimeout( () => this.hasLiked = false , 250 )
      },
      commentsLength() {
  			this.hasComment = true;
  			setTimeout( () => this.hasComment = false , 250 )
      }
    },
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      published() {
        return new Date(this.Post.time).toLocaleString('ru-RU' , longDate );
      },
      commentsLength() {
        return this.Post.comments.length;
      },
      isLiked() {
        return this.Post.likes.includes( this.currentUserID );
      },
      backendLocation() {
        return this.$store.state.General;
      }
    },
    created() {
      API.get( `wall/get/${ this.WallPostID }` )
        .then( ({ body }) => {
          Object.assign( this.Post , body );
          API.get( `users/get/${ this.Post.authorID }` )
            .then( ({ body }) => Object.assign( this.Author , body ) )
            .catch( error => console.error(error) )
        })
        .catch( error => console.error(error) )
    },
    methods: {
      likeIt() {
        const likedByCurrentUser = this.Post.likes.includes( this.currentUserID );
        const i = this.Post.likes.indexOf( this.currentUserID );

        if ( !likedByCurrentUser ) {
          this.Post.likes.push( this.currentUserID );
        } else {
          this.Post.likes.splice( i , 1 )
        }
        this.savePost()
          .then( response => console.log( response ) );
      },
      commentIt() {
        const newComment = {                    // подготовка новго объекта комментария
          authorID: this.$store.state.User._id, // String - ID пользователя
          time: new Date(),                     // Date - время публикации
          content: this.postComment,            // String - тело комментария
          attacments: '',                       // Array || Object - приложения
          likes: []                             // Array массив лайкнувших
        };

        this.Post.comments.push(newComment);

        this.savePost()
          .then( response => {
            API.post( `user/edit/${ this.User._id }` , this.User )
              .then( ({ body }) => {
                console.log(body);
                this.postComment = '';
              })
          });
      },
      savePost() {
        return API.post( `wall/edit/${ this.WallPostID }` , this.Post )
          .then( ({ body }) => body )
          .catch( error => console.error(error) )
      }
    }
  };
</script>

<style lang="scss">

  @import "../../stylesheets/partials/_mixins.scss";

  .wall-post {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    background-color: var(--whited);
    @include MDShadow-1;
  }

  .post-header {
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

  .post-content {
    margin: 20px 0;
    padding: 0 10px;
    font-size: 14px;
    line-height: 1.25;
    color: #4a4a4a;
    color: var(--charcoal-grey);
    white-space: pre-wrap;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

  .post-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__textarea {
      width: 410px;
      min-height: 55px;
      padding: 10px;
      font-size: 14px;
      resize: vertical;
      border: solid 1px #4a4a4a;
      border: solid 1px var(--charcoal-grey);
      border-radius: 3px;
    }
    &__submit {
      display: flex;
      justify-content: center;
      align-items: center;
      size: auto 55px;
      padding: 0 10px; margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 34px;
      color: #fff;
      color: var(--whited);
      background-color: #009d2f;
      background-color: var(--irish-green);
      border: none;
      border-radius: 3px;
      transform: scale(1);
      @include MDShadow-1;
      transition:
        transform .15s ease;
      &._update {
				transform: scale(1.15);
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
