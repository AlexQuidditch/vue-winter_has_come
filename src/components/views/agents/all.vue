<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _all">
    <agent-item v-for="( agentItem , index ) in Agents" :key="agentItem._id"
                  :agentItem = "agentItem">
    </agent-item>
  </transition-group>
</template>

<script>

  import agentItem from '@templates/agent-item.vue';

  export default {
    name: "agent-list_all",
    components: { agentItem },
    computed: {
      Agents() {
        return this.$store.state.Stub.friends
          .filter( agent => agent.isAgent )
      }
    }
  };

</script>

<style lang="scss">

  .agent-list._all {}

</style>
