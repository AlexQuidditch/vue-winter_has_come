<template lang="html">
	<router-link :to="{ name: 'task' , params: { id : tasksItem._id } }" tag="li"
							 class="tasks-item">
		<div class="tasks-item__overlay">
			<h5 class="tasks-item__title">{{ tasksItem.title }}</h5>
			<p class="tasks-item__description">{{ tasksItem.description }}</p>
		</div>
		<img :src=" backendLocation + '/upload/' + tasksItem.attached[0] " :alt="tasksItem.title"
				 class="tasks-item__picture" />
		<span class="tasks-item__title _bottom">{{ tasksItem.title }}</span>
		<ul class="scores-list">
			<li class="scores-item">
				<img src="/static/assets/agent/tasks/disc.svg" alt="Бюджет"
						class="scores-item__icon" />
				<span class="scores-item__value">{{ tasksItem.budget }}</span>
			</li>
			<li class="scores-item">
				<icon-clock :class="{ '_is-rush' : tasksItem.isRush }" class="scores-item__icon"></icon-clock>
				<span v-if="tasksItem.isRush" class="scores-item__value _is-rush">Срочно!</span>
				<span v-else class="scores-item__value">{{ tasksItem.time }} дней</span>
			</li>
		</ul>
	</router-link>
</template>

<script>

  import API from '@api';

	import iconClock from '@icons/clock.js';

	export default {
		name: "tasks-item",
		components: { iconClock },
		props: {
			'tasksID': {
				type: String,
				required: true
			}
		},
    data: () => ({
      tasksItem : {
      	_id: '',
      	authorID: '',
      	attached: [],
      	engagedID: '',
      	title: '',
      	picture: '',
      	published: '',
      	description: '',
      	budget: '',
      	deadline: '',
      	isRush: '',
      	views: '',
      	responses: [],
      	isEngaged: '',
      	completed: {
      		rate: '',
      		status: '',
      		review: ''
      	}
      }
    }),
    created() {
      API.get( `task/get/${ this.tasksID }` )
        .then( ({ body }) => Object.assign( this.tasksItem , body ) )
        .catch( error => console.error(error) )
    },
    computed: {
      backendLocation() {
        return this.$store.state.General
      }
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";
	@import "../../stylesheets/partials/_variables";

  .tasks-item {
    position: relative;
    size: 280px 211px;
    margin-bottom: 20px;
    background-color: #fff;
    background-color: var(--whited);
    cursor: pointer;
    @include MDShadow-1;
    transition: box-shadow .2s ease-in-out;
    &:hover {
      @include MDShadow-2;
      .tasks-item__overlay {
        opacity: 1;
        visibility: visible;
      }
    }
    &__overlay {
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      position: absolute 0 0 auto auto;
      size: 280px 176px;
      padding: 20px;
      background-color: rgba( #fff , .85 );
      transition:
      opacity .3s ease-in-out,
      visibility .3s ease-in-out;
    }
    &__title {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.46;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      &._bottom {
        overflow: hidden;
        position: absolute;
        left: 20px;
        bottom: 10px;
        size: 115px 1rem;
        font-weight: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    &__description {
      overflow: hidden;
      max-height: 95px;
      margin: 12px 0 0 0;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.46;
      text-align: left;
      white-space: pre;
      text-overflow: ellipsis;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__picture {
      display: block;
      size: 280px 176px;
      object-fit: contain;
      object-position: center;
    }
  }
  .scores-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 35px;
    padding: 0 5px;
  }
  .scores-item {
    padding: 0 7.5px;
    &__icon {
      display: inline-block;
      vertical-align: middle;
      size: 18px;
      fill: #fff;
      fill: var(--whited);
      stroke: #009d2f;
      stroke: var(--irish-green);
      &._is-rush {
        stroke: #d0011b;
        stroke: var(--scarlet);
      }
    }
    &__value {
      font-size: 12px;
      line-height: 21px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      &._is-rush {
        color: #d0011b;
        color: var(--scarlet);
      }
    }
  }

</style>
