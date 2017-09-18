<template lang="html">
	<router-link :to="{ name: 'dialog', params: { id: contactItem.id }}" tag="li"
							 class="contact-item waves-effect waves-dark">
		<transition name="heartbeat" mode="out-in">
			<span v-if="contactItem.isOnline" class="contact-item__online"></span>
		</transition>
		<img :src=" '/static/assets/shared/' + contactItem.avatar "
				 :alt="contactItem.name + ' ' + contactItem.sename" class="contact-item__avatar">
		<div class="contact-item__container">
			<h6 class="contact-item__fullname">{{ contactItem.name + ' ' + contactItem.sename }}</h6>
			<p class="contact-item__preview">{{ spliceText(contactItem.previewMessage) }}</p>
		</div>
		<div class="contact-item__container">
			<span class="contact-item__date">{{ new Date(contactItem.lastMessage).toLocaleString('ru-RU' , { hour: '2-digit' , minute: '2-digit' }) }}</span>
			<transition name="ping">
				<span v-if="contactItem.unreaded" :class="{ '_update' : hasNewMessage }"
							class="contact-item__counter">{{ contactItem.unreaded }}</span>
			</transition>
		</div>
		<div class="divider"></div>
	</router-link>
</template>

<script>

  export default {
    name: "contact-item",
		props: {
	    'contactItem': {
        type: Object,
        required: true
	    }
		},
		data: () => ({
			hasNewMessage: false
		}),
		watch: {
	    'contactItem.unreaded'() {
				this.hasNewMessage = true;
				setTimeout( () => this.hasNewMessage = false , 150 )
			}
		},
		methods: {
			spliceText (text) {
				if( text.length > 20 ) return text.substr( 0 , 50 ) + '...';
				else return text
			}
		}
  };

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins.scss";

	.contact-item {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		size: 100% auto;
		padding: 10px;
		cursor: pointer;
		&._selected {
			background-color: rgba(0, 157, 47, 0.1);
		}
		&__container {
			display: flex;
			flex-flow: column wrap;
			max-width: 200px;
			height: 60px;
			padding-left: 10px;
			padding-top: 2px;
			&._flex {}
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
