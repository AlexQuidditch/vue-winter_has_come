<template lang="html">
	<main class="main _agents">
		<section class="agents">
			<navigation-panel></navigation-panel>
			<search-agent></search-agent>
        <transition-group tag="ul" name="list" mode="out-in"
                          class="agents-list">
          <friends-item v-for="( agentItem , index ) in Agents" :key="agentItem._id"
                      :friendItem = "agentItem">
          </friends-item>
        </transition-group>
		</section>
		<filter-panel></filter-panel>
	</main>
</template>

<script>

  import friendsItem from '@templates/friends-item.vue';

	import filterPanel from './agents/filter-panel.vue';
	import searchAgent from './agents/search-agent.vue';
	import navigationPanel from './agents/navigation-panel.vue';

	export default {
		name: "agents",
		components: {
			filterPanel , searchAgent , navigationPanel , friendsItem
		},
    data: () => ({
      Agents: []
    }),
    computed: {
      storeAgents() {
        return this.$store.state.Agent
      }
    },
    beforeRouteEnter ( to , from , next ) {
      next( vm => {
        console.log( to.query.section );
        vm.$store.dispatch('getAgents');
        switch ( to.query.section ) {
          case 'all':
            vm.Agents = vm.storeAgents;
            break;
          case 'online':
            vm.Agents = vm.storeAgents
              .filter( user => user.isOnline );
            break;
          default:
            vm.Agents = vm.storeAgents;
        }
      })
    },
    beforeRouteUpdate ( to , from , next ) {
      switch ( to.query.section ) {
        case 'all':
          this.Agents = this.storeAgents;
          break;
        case 'online':
          this.Agents = this.storeAgents
            .filter( user => user.isOnline );
          break;
        default:
          this.Agents = this.storeAgents;
      }
      next();
    }
	};

</script>

<style lang="scss">

	.main._agents {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.agents {
		width: 100%;
		max-width: 690px;
	}

</style>
