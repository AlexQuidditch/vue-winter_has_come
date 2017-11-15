<template lang="html">
  <div class="social-contacts">
		<img src="/static/assets/profile/social/contacts.svg" alt="Контакты"
				class="social-contacts__icon" />
		<h4 class="social-contacts__title">Контакты</h4>
		<p class="social-contacts__text">{{ Contacts.text }}</p>
		<ul class="contacts-list">
			<li v-for="( linkItem , index ) in Contacts.links" :key="index"
				class="contacts-item">
				<span v-if="linkItem.type == 'mail' && linkItem.value.length "
					class="contacts-item__notation"
					>Электронная почта:
				</span>
				<span v-if="linkItem.type == 'vk' && linkItem.value.length"
					 class="contacts-item__notation"
					 >Вконтакте:
				</span>
				<span v-if="linkItem.type == 'fb' && linkItem.value.length "
					 class="contacts-item__notation"
					 >Facebook:
				</span>
				<span v-if="linkItem.type == 'phone' && linkItem.value.length"
					class="contacts-item__notation"
					>Телефон:
				</span>
				<a v-if="linkItem.type == 'mail' && linkItem.value.length"
					:href=" 'mailto:' + linkItem.value"
					class="contacts-item__link"
					>&nbsp;{{ linkItem.value }}
				</a>
				<a v-if="linkItem.type == 'vk' && linkItem.value.length"
					:href=" '//' + linkItem.value"
					class="contacts-item__link"
					>&nbsp;{{ linkItem.value }}
				</a>
				<a v-if="linkItem.type == 'fb' && linkItem.value.length"
					:href=" '//' + linkItem.value"
					class="contacts-item__link"
					>&nbsp;{{ linkItem.value }}
				</a>
				<a v-if="linkItem.type == 'phone' && linkItem.value.length"
					:href=" 'tel:' + linkItem.value"
					class="contacts-item__link"
					>&nbsp;{{ linkItem.value }}
				</a>
				<p class="contacts-item__link"
					>Контакты не указаны
				</p>
			</li>
		</ul>
    </div>
</template>

<script>

  export default {
    name: "social-contacts",
    computed: {
      Contacts() {
        return this.$store.state.Agent.social.contacts
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
