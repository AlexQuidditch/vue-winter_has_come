<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _online">
    <friends-item v-for="( friendItem , index ) in FriendsOnline" :key="friendItem._id"
                  :friendItem = "friendItem">
    </friends-item>
  </transition-group>
</template>

<script>

import friendsItem from '@templates/friends-item';

export default {
  name: "friend-list_online",
  components: { friendsItem },
  computed: {
    FriendsOnline() {
      return this.$store.state.Stub.friends
        .filter( friend => friend.isOnline );
    }
  }
};

</script>

<style lang="scss">

  .friend-list._online {}

</style>
