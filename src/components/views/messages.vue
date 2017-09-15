<template lang="html">
  <main class="main _messages">
    <section class="messages">
			<ul class="contact-list">
				<li v-for="contactItem in Contacts" :key="contactItem.id"
						class="contact-item">
					<span :class="{ '_active' : contactItem.isOnline }" class="contact-item__online"></span>
					<img :src=" '/static/assets/shared/' + contactItem.avatar "
							 :alt="contactItem.name + ' ' + contactItem.sename" class="contact-item__avatar">
					<div class="contact-item__container">
						<h6 class="contact-item__fullname">{{ contactItem.name + ' ' + contactItem.sename }}</h6>
						<p class="contact-item__preview">{{ spliceText(contactItem.previewMessage) }}</p>
					</div>
					<div class="contact-item__container">
						<span class="contact-item__date">{{ new Date(contactItem.lastMessage).toLocaleString('ru-RU' , { hour: '2-digit' , minute: '2-digit' }) }}</span>
						<span class="contact-item__counter">2</span>
					</div>
					<div class="divider"></div>
				</li>
			</ul>
			<div class="contact-dialog">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aut autem, excepturi quibusdam, ullam molestias facere quam corporis sunt rerum dignissimos atque tempora, odit quasi quae molestiae dolorem ab sint?</p>
			</div>
    </section>
  </main>
</template>

<script>

	export default {
		name: "messages",
		data: () => ({
			Contacts: [
				{
					id: 1,
					isAgent: false,
					isOnline: true,
					avatar: 'christopher-campbell-40410.jpg',
					name: 'Ольга',
					sename: 'Смирнова',
					isUnreaded: false,
					lastMessage: '2017-09-03T18:23:29.078Z',
					previewMessage: 'Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла'
				},
				{
					id: 2,
					isAgent: true,
					isOnline: true,
					avatar: 'agent.jpg',
					name: 'Евгений',
					sename: 'Воронин',
					isUnreaded: true,
					lastMessage: '2017-09-01T12:59:29.078Z',
					previewMessage: 'Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла'
				},
				{
					id: 3,
					isAgent: true,
					isOnline: false,
					avatar: 'agent2.jpg',
					name: 'Александр',
					sename: 'Вернер',
					isUnreaded: true,
					lastMessage: '2017-07-13T18:00:23.078Z',
					previewMessage: 'Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла'
				}
			]
		}),
		methods: {
			spliceText(text) {
				if( text.length > 20 ) return text.substr( 0 , 20 ) + '...';
				else return text
			}
		}
	};

</script>

<style lang="scss">

	@import "../../stylesheets/partials/mixins.scss";

	.messages {
		position: sticky;
		top: 130px;
		display: flex;
		justify-content: space-between;
		height: calc( 100% - 200px );
		background-color: #fff;
		background-color: var(--whited);
		border-radius: 3px;
		@include MDShadow-1;
	}

	.contact-list {
		min-width: 275px;
	}
	.contact-item {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		size: 100% 100px;
		padding: 10px;
		&__container {
			display: flex;
			flex-flow: column wrap;
			max-width: 150px;
		}
		&__online {
			position: relative;
			display: block;
			size: 10px;
			&::before {
				position: absolute;
				content: '';
				size: 10px;
				background-color: transparent;
				border-radius: 50%;
			}
			&._active::before {
				background-color: #009d2f;
				background-color: var(--irish-green);
				@include MDShadow-1(#009d2f);
			}
		}
		&__avatar {
		    size: 50px;
			object-fit: cover;
			border-radius: 50%;
		}
		&__fullname {
			font-size: 14px;
		}
		&__preview {
			margin: 0;
		}
		&__date {
			font-size: 12px;
		}
		&__counter {}
		.divider {
			width: 100%;
		}
	}

	.contact-dialog {
	}

</style>
