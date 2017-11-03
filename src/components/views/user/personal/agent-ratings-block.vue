<template lang="html">
  <div class="ratings">
		<h4 class="ratings__main-rate">{{ Ratings.mainRate }}</h4>
		<h5 class="ratings__sub-title ">баллов выплачено</h5>
		<img src="/static/assets/profile/ratings/wallet.svg" alt="баллов выплачено"
			   class="ratings__wallet" />
    <ul class="ratings-list">
      <li class="ratings-item">
        <icon-clock class="ratings-item__icon"></icon-clock>
        <span class="ratings-item__value">
          {{ Ratings.average }}
        </span>
        <p class="ratings-item__text">в среднем на сайте, часы</p>
      </li>

      <li class="ratings-item">
        <icon-case class="ratings-item__icon"></icon-case>
        <span class="ratings-item__value">
          {{ Ratings.completed }}
        </span>
        <p class="ratings-item__text">заданий выполнено</p>
      </li>

      <li class="ratings-item">
        <icon-check-circle class="ratings-item__icon"></icon-check-circle>
        <span class="ratings-item__value">
          {{ Ratings.tests.total + ' / ' + Ratings.tests.rate }}
        </span>
        <p class="ratings-item__text">тестов и оценка</p>
      </li>
    </ul>
  </div>
</template>

<script>

  import IconCheckCircle from '@icons/check-circle';
  import IconCase from '@icons/case.js';
  import IconClock from '@icons/clock.js';
  import ratingsItem from '@templates/rating-item';

  export default {
    name: "ratings",
    components: { IconCheckCircle , IconCase , IconClock },
    props: {
      'Ratings': {
        type: Object,
        required: true
      }
    }
  };

</script>

<style lang="scss" scoped>

  @import "../../../../stylesheets/partials/_mixins";

  .ratings {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 291px;
    padding: 20px;
    border-radius: 3px;
    background-color: #ffffff;
    background-color: var(--whited);
    @include MDShadow-1( #4a4a4a );
    &__main-rate {
      width: 100%;
      text-align: center;
      font-family: 'Lato-light', Arial, sans-serif;
      font-size: 40px;
      font-weight: 300;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__sub-title {
      position: absolute 32px auto auto 22px;
      width: 70px;
      text-align: center;
      font-size: 10px;
      font-weight: 400;
      color: #009d2f;
      color: var(--irish-green);
    }
    &__wallet {
      position: absolute 32px 42px auto auto;
      size: 28px
    }
  }

  .ratings-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0 0 0;
  }

  .ratings-item {
  	width: 30%;
  	margin-top: 10px;
  	&__icon {
  		display: block;
  		size: 22px;
  		margin: 0 auto;
  		object-fit: contain;
  	}
  	&__value {
  		display: block;
  		width: 100%;
  		margin: 5px auto;
  		text-align: center;
  		font-size: 13px;
  		font-weight: 600;
  		line-height: 1.46;
  		color: #4a4a4a;
  		color: var(--charcoal-grey);
  	}
  	&__text {
  		margin: 0;
  		text-align: center;
  		font-size: 12px;
  		line-height: 1.5;
  		color: #4b4b4b;
  		color: var(--purpley-grey);
  	}
  }

</style>
