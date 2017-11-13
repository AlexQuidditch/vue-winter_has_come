<template lang="html">
	<li class="friend-item">
		<div class="information">
			<div class="information-avatar">
				<router-link :to=" currentUserID === friendItem._id ? { name: 'profile' } : { name: 'user', params: { id: friendItem._id }}" tag="img"
										 :src=" backendLocation + '/upload/' + friendItem.personal.avatar"
                     :alt="friendItem.personal.name + ' ' + friendItem.personal.sename"
										 class="information-avatar__picture">
				</router-link>
				<span v-if="friendItem.isOnline" class="information-avatar__status" title="Пользователь в сети">- Онлайн -</span>
			</div>
			<div class="information-detail">
				<router-link :to=" currentUserID === friendItem._id ? { name: 'profile' } : { name: 'user', params: { id: friendItem._id }}" tag="h5"
					 					 class="information-detail__name"
					>{{ friendItem.personal.name + ' ' + friendItem.personal.sename }}
				</router-link>
				<p v-if="friendItem.isAgent" class="information-detail__company"> Агент {{ friendItem.information.company.name }}</p>
				<p v-else class="information-detail__specialization">
          {{ friendItem.information.specialization + ' | ' + friendItem.information.education.place }}
        </p>
				<p class="information-detail__description"> {{ friendItem.information.about }} </p>
				<div class="information-bottom">
					<div class="information-bottom__column">
            <button v-if="isFriendsRequested" @click="acceptFriendRequest()" class="information-bottom__button _contact-me">
              <icon-check-circle class="personal-bottom__button-icon"></icon-check-circle>
              <span>Принять заявку</span>
            </button>
            <button v-else class="information-bottom__button _contact-me">
              <img src="/static/assets/agent/personal/contacts.svg" alt="Написать письмо" />
              <span>Написать</span>
            </button>
					</div>

					<div class="information-bottom__column">
						<button v-if="isFriendsAccepted" @click="removeFriend()"
                    class="information-bottom__button" aria-label="Удалить из друзей">
							<img src="/static/assets/agent/personal/minus-circle-bold.svg" alt="Удалить из друзей" />
						</button>
						<button class="information-bottom__button" aria-label="Заблокировать пользователя">
							<img src="/static/assets/agent/personal/slash-bold.svg" alt="Заблокировать пользователя" />
						</button>
					</div>
				</div>
			</div>
		</div>
    <transition-group tag="ul" name="list" mode="out-in" class="portfolio-list">
      <portfolio-item v-for="portfolioID in limitBy( friendItem.portfolio , 2 )" :key="portfolioID"
                      :PortfolioItem="portfolioID" :FriendList="true">
      </portfolio-item>
    </transition-group>
	</li>
</template>

<script>

  import API from '@api';

  import IconCheckCircle from '@icons/check-circle.js';
  import PortfolioItem from '@templates/portfolio-item.vue';

	export default {
		name: "friend-item",
    components: { IconCheckCircle , PortfolioItem },
		props: {
      'friendID': {
        type: String
      },
			'friendItem': {
				type: Object,
        default() {
          return {
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
        }
			}
		},
    data: () => ({
      Portfolio: []
    }),
    computed: {
      currentUserID() {
        return this.$store.state.User._id;
      },
      backendLocation() {
        return this.$store.state.General;
      },
      isFriendsAccepted() {
        return this.$store.state.User.friends.accepted.includes( this.friendID )
      },
      isFriendsRequested() {
        return this.$store.state.User.friends.requests.includes( this.friendID )
      }
    },
    created() {
      if ( this.friendID ) {
        API.get( `users/get/${ this.friendID }` )
          .then( ({ body }) => Object.assign( this.friendItem , body ) )
          .catch( error => console.error(error) )
      }
    },
    methods: {
      acceptFriendRequest() {
        this.$swal({
          title: 'Добавить в друзья?',
          text: "Пользователь должен будет подтвердить заявку.",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#009d2f',
          cancelButtonColor: '#4a4a4a',
          confirmButtonText: 'Да',
          cancelButtonText: 'Нет'
        })
        .then( () => {
          this.$store.dispatch( 'acceptFriendRequest' , this.friendID )
            .then( response => {
              console.log( response );
              this.$store.dispatch( 'changeUser' , [ this.currentUserID , this.$store.state.User ] )
                .then( ({ body }) => {
                  this.$swal( 'Заявка принята.' , 'Пользователь добавлен в список друзей' , 'success' );
                })
                .catch( error => {
                  console.error( error );
                  this.$swal( 'Упс...' , 'Что-то пошло не так' , 'error' )
                })
            })
        }, dismiss => {
          if ( dismiss === 'cancel' ) {
            this.$swal( 'Отменено!' , 'Заявка не была обработана' , 'info' )
          }
        });
      },
      removeFriend() {
        this.$swal({
          title: 'Добавить в друзья?',
          text: "Пользователь должен будет подтвердить заявку.",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#009d2f',
          cancelButtonColor: '#4a4a4a',
          confirmButtonText: 'Да',
          cancelButtonText: 'Нет'
        })
        .then( () => {
          this.$store.dispatch( 'acceptFriendRequest' , this.friendID )
            .then( response => {
              console.log( response );
              this.$store.dispatch( 'changeUser' , [ this.currentUserID , this.User ] )
                .then( ({ body }) => this.$swal( 'Заявка принята.' , 'Пользователь добавлен в список друзей' , 'success' ) )
                .catch( error => {
                  console.error( error );
                  this.$swal( 'Упс...' , 'Что-то пошло не так' , 'error' )
                })
            })
        }, dismiss => {
          if ( dismiss === 'cancel' ) {
            this.$swal( 'Отменено!' , 'Заявка не была обработана' , 'info' )
          }
        });
      }
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";

	.friend-item {
		display: flex;
		justify-content: space-between;
		width: 690px;
		padding-top: 30px;
		padding-bottom: 20px;
		border-bottom: solid 1px rgba( #4b4b4b , .4 );
		.information {
			display: flex;
		}
		.information-avatar {
			width: 100px;
			&__picture {
				display: block;
				size: 100px;
				object-fit: cover;
				object-position: center;
				cursor: pointer;
				border-radius: 50%;
				@include MDShadow-1;
				transition: box-shadow .3s ease-in-out;
				&:hover {
					@include MDShadow-2;
				}
			}
			&__status {
				display: block;
				margin-top: 15px;
				text-align: center;
				font-size: 12px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
		}
		.information-detail {
			min-width: 250px;
			width: 250px;
			margin-left: 20px;
			&__name {
				margin: 0;
				font-size: 18px;
				font-weight: 600;
				color: #4a4a4a;
				color: var(--charcoal-grey);
				cursor: pointer;
				&:hover {
					text-decoration: underline !important;
				}
			}
			&__company {
				margin: 5px 0 0 0;
				font-size: 12px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
			&__specialization {
				margin: 5px 0 0 0;
				font-size: 12px;
				color: #4a4a4a;
				color: var(--charcoal-grey);
			}
			&__description {
				margin: 5px 0 0 0;
				font-size: 12px;
				line-height: 1.5;
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
		.information-bottom {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: 10px;
			&__column {
				display: flex;
			}
			&__button {
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				align-items: center;
				size: 35px;
				margin-left: 5px;
				border-radius: 3px;
				background-color: #fff;
				background-color: var(--whited);
				border: solid 1px rgba(155, 155, 155, 0.2);
				border: solid 1px var(--purpley-grey-20);
				transition: box-shadow .3s ease-in-out;
				&:hover,
				&:focus {
					@include MDShadow-1;
				}
				img {
					size: 20px;
				}
				&._contact-me {
					justify-content: space-between;
					width: auto;
					padding: 0 10px;
					margin: 0;
					font-size: 12px;
					color: #4a4a4a;
					color: var(--charcoal-grey);
					span {
						margin-left: 5px
					}
				}
			}
		}
		.portfolio-list {
			display: flex;
			justify-content: space-between;
			min-width: 300px;
			size: 300px auto;
		}
	}



</style>
