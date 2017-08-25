<template lang="html">
	<li class="blacklist-item">
		<div class="information">
			<img :src=" '/static/assets/shared/' + blacklistItem.avatar" :alt="blacklistItem.name + ' ' + blacklistItem.sename" class="information__avatar">
			<div class="information-detail">
				<router-link :to="{ name: 'user', query: { id: blacklistItem.id }}" tag="h5"
					 class="information-detail__name"
					>{{ blacklistItem.name + ' ' + blacklistItem.sename }}
				</router-link>
				<p v-if="blacklistItem.isAgent" class="information-detail__company"> Агент | {{ blacklistItem.company }}</p>
				<p v-else class="information-detail__specialization">{{ blacklistItem.specialization + ' | ' + blacklistItem.education }}</p>
				<button class="information-unblock" type="button" :name=" 'unblock-user-' + blacklistItem.id ">Разблокировать</button>
			</div>
		</div>
	</li>
</template>

<script>

    export default {
        name: "blacklist-item",
		props: {
		    'blacklistItem': {
		        type: Object,
		        required: true
		    }
        }
    };

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";

    .blacklist-item {
    	display: flex;
		justify-content: space-between;
		padding-top: 30px;
		padding-bottom: 20px;
		border-bottom: solid 1px rgba( #4b4b4b , .4 );
		&:last-child {
			border: none
		}
    	.information {
			display: flex;
    		&__avatar {
    			size: 75px;
				object-fit: cover;
				object-position: center;
				border-radius: 50%;
				@include MDShadow-1;
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
			}
			&__company {
				height: 20px;
				margin: 5px 0 0 0;
				font-size: 12px;
				line-height: 20px;
				font-weight: 600;
				color: #009d2f;
				color: var(--irish-green);
			}
			&__specialization {
				height: 20px;
				margin: 5px 0 0 0;
				font-size: 12px	;
				line-height: 20px;
				color: #4a4a4a;
				color: var(--charcoal-grey);
			}
    	}
		.information-unblock {
			size: 90px 15px;
			margin-top: 14px;
			padding: 0;
			font-size: 12px;
			color: #009d2f;
			color: var(--irish-green);
			background-color: transparent;
			border: none
		}
    }



</style>
