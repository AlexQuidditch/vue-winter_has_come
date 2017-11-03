<template lang="html">
	<router-link :to="{ name: 'dialog', params: { id: DialogItem.id } }" tag="li"
							 class="dialog-item waves-effect waves-dark">
		<transition name="heartbeat" mode="out-in">
			<span v-if="Author.isOnline" class="dialog-item__online"></span>
		</transition>
		<img :src=" '/static/assets/shared/' + Author.avatar" :alt="Author.name + ' ' + Author.sename" class="dialog-item__avatar">
		<div class="dialog-item__container">
			<h6 class="dialog-item__fullname">{{ Author.name + ' ' + Author.sename }}</h6>
			<p class="dialog-item__preview">{{ spliceText(DialogItem.previewMessage) }}</p>
		</div>
		<div class="dialog-item__container">
			<span class="dialog-item__date">{{ lastMessage }}</span>
			<transition name="ping">
				<span v-if="DialogItem.unreaded" :class="{ '_update' : hasNewMessage }"
              class="dialog-item__counter"
          >{{ DialogItem.unreaded }}
        </span>
			</transition>
		</div>
		<div class="divider"></div>
	</router-link>
</template>

<script>

  import API from '@api';

  import { shortDate } from '@helpers/dateFormat';

  export default {
    name: "dialog-item",
		props: {
	    'DialogItem': {
        type: Object,
        required: true
	    }
		},
		data: () => ({
			hasNewMessage: false,
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
		}),
		watch: {
	    'DialogItem.unreaded'() {
				this.hasNewMessage = true;
				setTimeout( () => this.hasNewMessage = false , 150 )
			}
		},
		computed: {
			lastMessage() {
				return new Date(this.DialogItem.lastMessage).toLocaleString('ru-RU' , shortDate );
			}
		},
    created() {
      API.get( `users/get/${ this.DialogItem.authorID }` )
        .then( ({ body }) => Object.assign( this.Author , body ) )
        .catch( error => console.error(error) )
    },
		methods: {
			spliceText (text) {
				if ( text.length > 20 ) return text.substr( 0 , 50 ) + '...';
				else return text
			}
		}
  };

</script>

<style lang="scss">

	@import "../../stylesheets/partials/_mixins.scss";

	.dialog-item {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		size: 100% auto;
		padding: 10px;
		cursor: pointer;
		&::before {
			content: '';
			position: absolute;
			top: 0; left: 0;
			size: 3px 100%;
			background-color: transparent;
			transition:
				background-color .35s ease-out;
		}
		&:first-child {
			border-top-left-radius: 3px
		}
		&:last-child {
			border-bottom-left-radius: 3px;
			.divider {
				display: none;
			}
		}
		&._exact-active {
			background-color: rgba( #009d2f , .1);
			&::before {
				background-color: #009d2f;
				background-color: var(--irish-green);
			}
			.dialog-item__avatar {
				@include MDShadow-1;
			}
		}
		&__container {
			display: flex;
			flex-flow: column wrap;
			max-width: 200px;
			height: 60px;
			padding-left: 10px;
			padding-top: 2px;
		}
		&__online {
			position: absolute;
			left: 10px; top: 50%;
			display: block;
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
		&__avatar {
			size: 50px;
			margin-left: 20px;
			object-fit: cover;
			border-radius: 50%;
			transition: box-shadow .3s ease-in-out;
		}
		&__fullname {
			font-size: 13px;
			font-weight: 600;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__preview {
			margin: 0;
			size: 150px 38px;
			font-size: 12px;
			font-weight: 300;
			line-height: 1.58;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__date {
			margin-top: 2px;
			font-size: 10px;
			font-weight: 600;
			line-height: 1.58;
			text-align: right;
			color: #9b9b9b;
			color: var(--purpley-grey);
		}
		&__counter {
			size: 20px;
			margin: 10px auto 0 auto;
			font-size: 9px;
			font-weight: 600;
			line-height: 20px;
			text-align: center;
			color: #fff;
			color: var(--whited);
			background-color: #009d2f;
			background-color: var(--irish-green);
			border-radius: 50%;
			transform: scale(1);
			transition: .15s ease-out;
			&._update {
				transform: scale(1.25);
			}
		}
		.divider {
			position: absolute;
			left: 0; bottom: 0;
			width: 100%;
		}
	}

	.heartbeat-enter-active {
		animation: heartbeat .75s ease-in-out forwards;
	}
	.heartbeat-leave-active {
		animation: heartbeat .5s ease-in-out reverse forwards;
	}

	.ping-enter-active {
		animation: ping 0.3s ease-in-out forwards;
	}
	.ping-leave-active {
		animation: ping 0.3s ease-in-out reverse forwards;
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
