  <template lang="html">
  <div class="ratings">
    <star-rating v-model="Ratings.mainRate"
                 :increment="0.1"
                 :star-size="20"
                 :show-rating="false"
                 active-color="#009d2f"
                 inactive-color="rgba(0, 157, 47, 0.35)"
                 read-only>
    </star-rating>
    <ul class="ratings-list">
      <!-- сделать внятный мать его шаблон -->
      <li class="ratings-item">
        <component is="IconClock" class="ratings-item__icon"></component>
  			<span class="ratings-item__value">
  				{{ Ratings.average }}
  			</span>
    		<p class="ratings-item__text">в среднем на сайте, часы</p>
    	</li>

      <li class="ratings-item">
        <component is="IconCase" class="ratings-item__icon"></component>
    		<span class="ratings-item__value">
    			{{ Ratings.completed }}
    		</span>
    		<p class="ratings-item__text">заданий выполнено</p>
    	</li>

      <li class="ratings-item">
        <component is="IconCheckCircle" class="ratings-item__icon"></component>
    		<span class="ratings-item__value">
    			{{ Ratings.tests.total + ' / ' + Ratings.tests.rate }}
    		</span>
    		<p class="ratings-item__text">тестов и оценка</p>
    	</li>
      <!-- сделать внятный мать его шаблон -->
    </ul>
  </div>
</template>

<script>

  import StarRating from 'vue-star-rating';

  import IconCheckCircle from '@icons/check-circle';
  import IconCase from '@icons/case.js';
  import IconClock from '@icons/clock.js';
  import ratingsItem from '@templates/rating-item';

  export default {
    name: "ratings",
    components: { StarRating , IconCheckCircle , IconCase , IconClock },
    computed: {
      Ratings() {
        return this.$store.state.User.ratings
      }
    }
  };

</script>

<style lang="scss" scoped>

  @import "../../../../stylesheets/partials/_mixins";

  $rateHeight: 30px;

  .ratings {
    display: flex;
    flex-flow: row wrap;
    size: 291px 170px;
    padding: 20px;
    border-radius: 3px;
    background-color: #ffffff;
    background-color: var(--whited);
    @include MDShadow-1( #4a4a4a );
    &__main-rate {
      size: 30% $rateHeight;
      text-align: center;
      font-size: 48px;
      font-weight: 100;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    > .star-rating {
      height: $rateHeight;
      margin: 0 auto;
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
