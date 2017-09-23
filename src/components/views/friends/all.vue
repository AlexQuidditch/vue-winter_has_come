<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _all">
      <friends-item v-for="( friendItem , index ) in Friends" :key="friendItem.id"
                    :friendItem = "friendItem">
    </friends-item>
  </transition-group>
</template>

<script>

  import friendsItem from '@templates/friends-item';

  export default {
    name: "friend-list_all",
    components: { friendsItem },
    computed: {
      Friends() {
        return this.$store.state.Stub.friends
      }
    }
  };

</script>

<style lang="scss">

  .friend-list._all {}

</style>
