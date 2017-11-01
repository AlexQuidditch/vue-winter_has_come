<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _all">
    <friends-item v-for="( agentItem , index ) in Agents" :key="agentItem._id"
                :friendItem = "agentItem">
    </friends-item>
  </transition-group>
</template>

<script>

  import friendsItem from '@templates/friends-item.vue';

  export default {
    name: "agent-list_all",
    components: { friendsItem },
    computed: {
      Agents() {
        return this.$store.state.Agent
      }
    }
  };

</script>

<style lang="scss">

  .agent-list._all {}

</style>
