<template lang="html">
  <section :class="{ '_folded' : foldedSection }" class="tasks">
    <icon-case :Width="1" class="tasks__icon"></icon-case>
		<h3 class="tasks__title">{{ User.tasks.length ? 'Задания' : 'Пользователь не создавал заданий' }}</h3>
    <button @click="foldSection()"
            v-if="User.tasks.length"
            class="portfolio__fold-button waves-effect waves-dark"
            type="button" name="fold-portfolio"
      >{{ isFolded ? 'Развернуть' : 'Свернуть' }}
    </button>
    <flickity-slider v-if="User.tasks && User.tasks.length"
                     ref="flickity" :options="flickityOptions"
                     class="tasks-list">
      <tasks-item v-for="tasksID in User.tasks" :key="tasksID"
									:tasksID="tasksID"
                  class="carousel-cell">
			</tasks-item>
    </flickity-slider>
  </section>
</template>

<script>

  import FlickitySlider from 'vue-flickity';

  import IconCase from '@icons/case.js';
	import tasksItem from '@templates/tasks-item.vue';

	export default {
		name: "tasks",
		components: { tasksItem , IconCase , FlickitySlider },
    props: {
      'User': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      isFolded : false,
      flickityOptions: {
        pageDots: false,
        contain: true,
        groupCells: true,
        groupCells: 2,
        draggable: false
      }
    }),
    computed: {
      foldedSection() {
        if ( !this.User.tasks.length ) {
          return true;
        } else {
          if ( this.isFolded ) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    methods: {
      foldSection() {
        this.isFolded =! this.isFolded
      }
    }
	};

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

	.tasks {
    overflow: hidden;
    position: relative;
		display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    size: 100% 300px;
    padding: 20px 30px;
    transition: height .4s ease;
    &._folded {
      height: 68px;
    }
		&__icon {
			width: 28px;
		}
		&__title {
			margin-left: 10px;
			font-size: 18px;
			line-height: 28px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__subtitle {
			width: 100%;
			margin: 10px 0 0 0;
			font-size: 12px;
			text-align: left;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
    &__fold-button {
      position: absolute;
      top: 20px; right: 30px;
      size: 100px 28px;
      margin: 0; padding: 0;
      font-family: 'Lato', Arial, sans-serif;font-size: 12px;
      font-weight: 600;
      line-height: 28px;
      background-color: #fff;
      background-color: var(--whited);
      border-radius: 3px;
      border: none;
      transition: box-shadow .3s ease-in-out;
      @include MDShadow-1;
    }
	}

	.tasks-list {
    overflow: hidden;
    width: 100%;
    margin: 20px 0 0 0;
    padding: 0 10px;
    .flickity-viewport {
      overflow: visible;
      width: 100%;
		}
	}

</style>
