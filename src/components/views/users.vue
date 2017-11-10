<template lang="html">
	<main class="main _users">
		<section class="users">
			<navigation-panel></navigation-panel>
			<search-friend></search-friend>
      <transition-group tag="ul" name="list" mode="out-in"
                        class="users-list">
        <friends-item v-for="( userItem , index ) in Users" :key="userItem._id"
                      :friendItem = "userItem">
        </friends-item>
        <h3 v-if="!Users.length" key="no-content" class="no-result-to-display">Нет контента для отображения</h3>
      </transition-group>
		</section>
		<filter-panel></filter-panel>
	</main>
</template>

<script>

  import friendsItem from '@templates/friends-item.vue';

	import filterPanel from './users/filter-panel.vue';
	import searchFriend from './users/search-friend.vue';
	import navigationPanel from './users/navigation-panel.vue';

	export default {
		name: "users",
		components: {
			filterPanel , searchFriend , navigationPanel ,
      friendsItem
		},
    data: () => ({
      Users: []
    }),
    computed: {
      storeUsers() {
        return this.$store.state.Users
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        vm.$store.dispatch('getUsers');
        switch ( to.query.section ) {
          case 'all':
            vm.Users = vm.storeUsers;
            break;
          case 'online':
            vm.Users = vm.storeUsers
              .filter( user => user.isOnline );
            break;
          default:
            vm.Users = vm.storeUsers;
        }
      })
    },
    beforeRouteUpdate ( to , from , next ) {
      switch ( to.query.section ) {
        case 'all':
          this.Users = this.storeUsers;
          break;
        case 'online':
          this.Users = this.storeUsers
            .filter( user => user.isOnline );
          break;
        default:
          this.Users = this.storeUsers;
      }
      next();
    }
	};

</script>

<style lang="scss">

	.main._users {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.users {
		width: 100%;
		max-width: 690px;
	}

  .users-list {
    display: flex;
    flex-flow: row wrap;
  }

</style>
