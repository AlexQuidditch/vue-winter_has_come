<template lang="html">
  <div class="ratings">
    <h4 class="ratings__main-rate">{{ Ratings.mainRate }}</h4>
    <star-rating v-model="Ratings.mainRate"
      :increment="0.1"
      :star-size="18"
      :show-rating="false"
      active-color="#009d2f"
      inactive-color="rgba(0, 157, 47, 0.35)"
      read-only>
    </star-rating>
    <ul class="ratings-list">
      <!-- <ratings-item :Value="Ratings.average" :Icon="IconCheckCircle"></ratings-item>
      <ratings-item :Value="Ratings.completed" :Icon="IconCheckCircle"></ratings-item>
      <ratings-item :Value="Ratings.tests" :Icon="IconCheckCircle"></ratings-item> -->

      <li class="ratings-item">
        <component is="IconCheckCircle" class="ratings-item__icon"></component>
          <span v-if="!Value == 0"
                class="ratings-item__value">
            {{ Ratings.average }}
          </span>
        <span v-if="Value == 0"
              class="ratings-item__value">
        </span>
        <p class="ratings-item__text">{{ Ratings.average }}</p>
      </li>

      <li class="ratings-item">
        <component is="IconCheckCircle" class="ratings-item__icon"></component>
          <span v-if="!Value == 0"
                class="ratings-item__value">
            {{ Ratings.average }}
          </span>
        <span v-if="Value == 0"
              class="ratings-item__value">
          <!-- {{ Item.total + ' / ' + Item.rate }} -->
        </span>
        <p class="ratings-item__text">{{ Ratings.average }}</p>
      </li>

      <li class="ratings-item">
        <component is="IconCheckCircle" class="ratings-item__icon"></component>
          <span v-if="!Value == 0"
                class="ratings-item__value">
            {{ Ratings.average }}
          </span>
        <span v-if="Value == 0"
              class="ratings-item__value">
          <!-- {{ Item.total + ' / ' + Item.rate }} -->
        </span>
        <p class="ratings-item__text">{{ Ratings.average }}</p>
      </li>

    </ul>
  </div>
</template>

<script>

import StarRating from 'vue-star-rating';

import IconCheckCircle from '@icons/check-circle';
import ratingsItem from '@templates/rating-item';

export default {
  name: "ratings",
  components: { StarRating , IconCheckCircle },
  computed: {
    Ratings() {
      return this.$store.state.User.ratings
    }
  }
};

</script>

<style lang="scss">

@import "../../../../stylesheets/partials/_mixins";

.ratings {
  display: flex;
  flex-flow: column;
  align-items: center;
  size: 291px 234px;
  padding: 20px;
  border-radius: 3px;
  background-color: #ffffff;
  background-color: var(--whited);
  @include MDShadow-1( #4a4a4a );
  &__main-rate {
    width: 100%;
    text-align: center;
    font-size: 48px;
    font-weight: 100;
    color: #4a4a4a;
    color: var(--charcoal-grey);
  }
  > .star-rating {
    margin: 10px auto;
    span {
      margin: 0 4px;
    }
  }
}

.ratings-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}

</style>
