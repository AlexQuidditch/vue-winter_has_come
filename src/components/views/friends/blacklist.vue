<template lang="html">
    <transition-group tag="ul" name="friend-list" mode="out-in"
		class="friend-list _blacklist">
		<h4 class="friend-list__title">Заблокированные ({{ Blacklist.length }})</h4>
		<blacklist-item v-for="( blacklistItem , index ) in Blacklist" :key="blacklistItem._id"
			:blacklistItem = "blacklistItem">
		</blacklist-item>
    </transition-group>
</template>

<script>

	import blacklistItem from '@templates/blacklist-item';

    export default {
        name: "friend-list_blacklist",
		components: { blacklistItem },
        data() {
            return {
				Blacklist: [
					{
						id: 1,
						isAgent: false,
						isOnline: true,
						avatar: 'christopher-campbell-40410.jpg',
						name: 'Ольга',
						sename: 'Смирнова',
						specialization: 'Реклама, маркетинг',
						education: 'ТГУ',
						company: null,
						description: 'Добрый день! Меня зовут Ольга, я только закончила обучение в ТГУ и ищу перспективную команду, куда ...',
						addedDate: 1,
						popularity: 11
					},
					{
						id: 2,
						isAgent: true,
						isOnline: true,
						avatar: 'agent.jpg',
						name: 'Евгений',
						sename: 'Воронин',
						specialization: null,
						education: null,
						company: 'ООО "Haier RU"',
						addedDate: 3,
						popularity: 1
					}
				]
            }
        }
    }

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .friend-list {
    	&._blacklist {
	    	margin-top: 30px;
	    	padding: 20px 20px;
			background-color: #ffffff;
			background-color: var(--whited);
			@include MDShadow-1;
		}
		&__title {
			font-size: 18px;
			font-weight: 600;
			color: #009d2f;
			color: var(--irish-green);
		}
    }

</style>
