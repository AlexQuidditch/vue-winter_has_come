<template lang="html">
	<main class="main _friends">
		<section class="friends">
			<navigation-panel></navigation-panel>
			<search-friend></search-friend>
      <transition-group tag="ul" name="list" mode="out-in"
                        class="users-list">
        <friends-item v-for="friendID in Friends" :key="friendID"
                      :friendID = "friendID">
        </friends-item>
        <h3 v-if="!Friends.length" key="no-content" class="no-result-to-display">Нет контента для отображения</h3>
      </transition-group>
		</section>
		<filter-panel></filter-panel>
	</main>
</template>

<script>

  import friendsItem from '@templates/friends-item';

	import filterPanel from './friends/filter-panel';
	import searchFriend from './friends/search-friend';
	import navigationPanel from './friends/navigation-panel';

	import all from './friends/all';
	import online from './friends/online';
	import requests from './friends/requests';
	import blacklist from './friends/blacklist';

	export default {
		name: "friends",
		components: {
			filterPanel , searchFriend , navigationPanel,
			all , online , requests , blacklist , friendsItem
		},
    data: () => ({
      Friends: []
    }),
    computed: {
      storeFriends() {
        return this.$store.state.User.friends;
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        switch ( to.query.section ) {
          case 'all':
            vm.Friends = vm.storeFriends.accepted;
            break;
          case 'online':
            vm.Friends = vm.storeFriends.accepted
            break;
          case 'requests':
            vm.Friends = vm.storeFriends.requests
            break;
          default:
            vm.Friends = vm.storeFriends;
        }
      })
    },
    beforeRouteUpdate ( to , from , next ) {
      switch ( to.query.section ) {
        case 'all':
          this.Friends = this.storeFriends.accepted;
          break;
        case 'online':
          this.Friends = this.storeFriends.accepted
          break;
        case 'requests':
          this.Friends = this.storeFriends.requests
          break;
        default:
          this.Friends = this.storeFriends;
      }
      next();
    }
	};

</script>

<style lang="scss">

	.main._friends {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.friends {
		width: 100%;
		max-width: 690px;
	}

</style>
