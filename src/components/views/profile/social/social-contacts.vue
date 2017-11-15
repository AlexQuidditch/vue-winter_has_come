<template lang="html">
  <div class="social-contacts">
		<img src="/static/assets/profile/social/contacts.svg" alt="Контакты"
				 class="social-contacts__icon" />
		<h4 class="social-contacts__title">Контакты</h4>
		<p class="social-contacts__text">{{ Contacts.text }}</p>
		<ul class="contacts-list">
			<li v-for="( contactItem , key , index ) in Contacts" :key="index"
				class="contacts-item">
				<span v-if="key == 'mail' && contactItem.length "
					class="contacts-item__notation"
					>Электронная почта:
				</span>
				<span v-if="key == 'vk' && contactItem.length"
					 class="contacts-item__notation"
					 >Вконтакте:
				</span>
				<span v-if="key == 'fb' && contactItem.length "
					 class="contacts-item__notation"
					 >Facebook:
				</span>
				<span v-if="key == 'phone' && contactItem.length"
					class="contacts-item__notation"
					>Телефон:
				</span>
				<span v-if="key == 'skype' && contactItem.length"
					class="contacts-item__notation"
					>Skype:
				</span>
				<a v-if="key == 'mail' && contactItem.length "
					:href=" 'mailto:' + contactItem" target="_blank"
					class="contacts-item__link"
					>&nbsp;{{ contactItem }}
				</a>
				<a v-if="key == 'vk' && contactItem.length"
					:href=" '//vk.com/' + contactItem" target="_blank"
					class="contacts-item__link"
					>&nbsp;{{ contactItem }}
				</a>
				<a v-if="key == 'fb' && contactItem.length "
					:href=" '//facebook.com/' + contactItem" target="_blank"
					class="contacts-item__link"
					>&nbsp;{{ contactItem }}
				</a>
				<a v-if="key == 'phone' && contactItem.length"
					:href=" 'tel:' + contactItem"
					class="contacts-item__link"
					>&nbsp;{{ contactItem }}
				</a>
				<a v-if="key == 'skype' && contactItem.length"
					:href=" 'skype:' + contactItem + '?call' "
					class="contacts-item__link"
					>&nbsp;{{ contactItem }}
				</a>
			</li>
		</ul>
  </div>
</template>

<script>

	export default {
		name: "social-contacts",
		computed: {
			Contacts() {
				return this.$store.state.User.social.contacts
			}
		}
	};

</script>

<style lang="scss">

  @import "../../../../stylesheets/partials/mixins.scss";

	.social-contacts {
	  display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 291px;
    padding: 20px;
    border-radius: 3px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
		&__icon {
			width: 28px;
		}
		&__title {
			margin-left: 10px;
			font-size: 18px;
			line-height: 28px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__text {
			margin: 10px 0 0 0;
			font-size: 13px;
			font-weight: 300;
			line-height: 1.46;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		.contacts-list {
		  width: 100%;
			margin-top: 20px;
		}
		.contacts-item {
		  display: block;
			font-size: 13px;
			font-weight: 300;
			line-height: 2;
			color: #4a4a4a;
			color: var(--charcoal-grey);
			&__link {
				color: #009d2f;
				color: var(--irish-green);
			}
		}
	}

</style>
