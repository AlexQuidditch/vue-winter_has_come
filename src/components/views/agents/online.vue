<template lang="html">
  <transition-group tag="ul" name="agents-list" mode="out-in"
                    class="agents-list _online">
    <agent-item v-for="( agentItem , index ) in AgentOnline" :key="agentItem._id"
                  :agentItem = "agentItem">
    </agent-item>
  </transition-group>
</template>

<script>

import agentItem from '@templates/agent-item.vue';

export default {
  name: "agent-list_online",
  components: { agentItem },
  computed: {
    AgentOnline() {
      return this.$store.state.Stub.friends
        .filter( agent => agent.isOnline );
    }
  }
};

</script>

<style lang="scss">

  .agents-list._online {}

</style>
