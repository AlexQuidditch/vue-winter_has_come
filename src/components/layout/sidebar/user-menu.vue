<template lang="html">
  <ul class="user-menu">
    <li class="menu-item">
      <router-link :to="{ name: Menu.main.route }" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.main.text }}</span>
      </router-link>
    </li>
    <li class="menu-item">
      <router-link :to="{ name: Menu.messages.route }" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.messages.text }}</span>
        <span v-if="newMessagesCounter"
              class="menu-item__counter _add"
          >(+{{ TWEENnewMessagesCounter }})
        </span>
      </router-link>
    </li>
    <li class="menu-item">
      <router-link :to="{ name: Menu.friends.route, query: { section: 'all' } }" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.friends.text }}</span>
        <span class="menu-item__counter _state">({{ Friends.accepted.length }})</span>
        <span v-if="Friends.requests && Friends.requests.length"
              class="menu-item__counter _add">(+{{ Friends.requests.length }})
        </span>
      </router-link>
    </li>
    <li class="menu-item">
      <router-link :to="{ name: Menu.teams.route }" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.teams.text }}</span>
        <span class="menu-item__counter _state">({{ Menu.teams.Counters.state }})</span>
        <span v-if="Menu.teams.Counters && Menu.teams.Counters.add"
              class="menu-item__counter _add">(+{{ Menu.teams.Counters.add }})
        </span>
      </router-link>
    </li>
    <li class="menu-item">
      <router-link :to="Menu.settings.route" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.settings.text }}</span>
      </router-link>
    </li>
    <li class="menu-item">
      <router-link :to="{ name: Menu.support.route , query: Menu.support.query }" class="menu-item__link">
        <span class="menu-item__text">{{ Menu.support.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>

  import TWEEN from '@tweenjs/tween.js';

  export default {
    name: "user-menu",
    data: () => ({
      TWEENnewMessagesCounter: 1,
      messagesCounter: 0
    }),
    computed: {
      Menu() {
        return this.$store.state.Menu.list
      },
      Friends() {
        return this.$store.state.User.friends;
      },
      newMessagesCounter() {
        const dialogs = this.$store.state.Messages.dialogs;
        const arr = [];
        dialogs.forEach( dialog => {
          if ( dialog.unreaded ) arr.push(dialog.unreaded);
        });
        const counter = arr.reduce( ( a , b ) => a + b );
        this.messagesCounter = counter;
        return counter;
      }
    },
    watch: {
      messagesCounter( newValue , oldValue ) {
        const vm = this;
        function animate() {
          if ( TWEEN.update() ) {
            requestAnimationFrame(animate)
          }
        };
        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newValue }, 1000)
          .onUpdate(function () {
            vm.TWEENnewMessagesCounter = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      }
    }
  };

</script>

<style lang="scss">

  .user-menu {
    padding: 16px 0;
  }

  .menu-item {
    &:first-child .menu-item__link {
      &._active {
        &::after {
          opacity: 0;
        }
        .menu-item__text {
          color: initial !important;
        }
      }
      &._exact-active {
        &::after {
          opacity: 1;
        }
        .menu-item__text {
          color: #009d2f !important;
          color: var(--irish-green) !important;
        }
      }
    }
    &__link {
      position: relative;
      display: block;
      padding-left: 15px;
      font-size: 13px;
      font-weight: 600;
      line-height: 32px;
      &::after {
        opacity: 0;
        position: absolute;
        content: '';
        top: 5px; right: -6px;
        size: 22px;
        position: absolute;
        background-image: inline('../../../../static/assets/sidebar/chevron-right.svg');
        transition: opacity .3s ease-in-out;
      }
      &._active {
        &::after {
          opacity: 1;
        }
        .menu-item__text {
          color: #009d2f !important;
          color: var(--irish-green) !important;
        }
      }
      &._exact-active {
        .menu-item__text {
          color: #009d2f !important;
          color: var(--irish-green) !important;
        }
      }
    }
    &__text {
      color: #4a4a4a;
      color: var(--charcoal-grey);
      transition: color .3s;
    }
    &__counter {
      &._state {
        color: #4b4b4b;
        color: var(--purpley-grey);
      }
      &._add {
        color: #009d2f;
        color: var(--irish-green);
      }
    }
  }

</style>
