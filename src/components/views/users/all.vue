<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _all">
    <friends-item v-for="( userItem , index ) in Users" :key="userItem._id"
                  :friendItem = "userItem">
    </friends-item>
  </transition-group>
</template>

<script>

  import friendsItem from '@templates/friends-item';

  export default {
    name: "users-list_all",
    components: { friendsItem },
    computed: {
      Users() {
        return this.$store.state.Users
      }
    }
  };

</script>

<style lang="scss">

  .friend-list._all {}

</style>
