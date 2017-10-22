<template lang="html">
	<li class="task-item">
		<div class="task-item__about">
			<router-link :to="{ name: 'task', query: { id: taskItem._id }}" tag="img"
									 :src=" backendLocation + '/upload/' + taskItem.attached[0]" :alt="taskItem.title" class="about-picture">
			</router-link>
			<div class="about-picture-overlay" v-if="taskItem.isEngaged">
				<p class="about-picture-overlay__text">Исполнитель найден!</p>
			</div>
			<div class="about-information">
				<router-link :to="{ name: 'task', query: { id: taskItem._id }}" tag="h6"
										 :class="{ '_is-rush' : taskItem.isRush , '_is-engaged' : taskItem.isEngaged }"
										 class="about-information__title">{{ taskItem.title }}
				</router-link>
				<router-link :to="{ name: 'user', query: { id: taskItem.authorID }}" tag="img"
					           class="about-information__author-avatar"
					           :src=" backendLocation + '/upload/' + Author.avatar" :title="Author.name + ' ' + Author.sename"
					           alt="Открыть профиль автора">
				</router-link>
				<p class="about-information__published">{{ new Date(taskItem.published).toLocaleString() }}</p>
				<p class="about-information__description">{{ taskItem.description.substr( 0 , 160 ) }}</p>
			</div>
		</div>
		<div class="task-item__summary">
			<ul class="summary-task">
				<li class="summary-budget">
					<icon-disc :class="{ '_is-engaged' : taskItem.isEngaged }"
						         class="summary-budget__icon">
					</icon-disc>
					<span v-if="taskItem.isAgreement" :class="{ '_is-engaged' : taskItem.isEngaged }"
                class="summary-budget__value"
						>По договорённсти
					</span>
					<span v-else :class="{ '_is-engaged' : taskItem.isEngaged }"
						    class="summary-budget__value"
						>{{ taskItem.budget }} баллов
					</span>
				</li>
				<li class="summary-deadline">
					<icon-clock :class="{ '_is-rush' : taskItem.isRush , '_is-engaged' : taskItem.isEngaged }"
						          class="summary-deadline__icon">
					</icon-clock>
					<span v-if="taskItem.isRush" :class="{ '_is-engaged' : taskItem.isEngaged }"
						    class="summary-deadline__value _is-rush"
						>СРОЧНО!
					</span>
					<span :class="{ '_is-engaged' : taskItem.isEngaged }"
						    class="summary-deadline__value"
						>{{ new Date(taskItem.deadline).toLocaleString() }}
					</span>
				</li>
			</ul>
			<ul class="summary-social">
				<li class="summary-views">
					<icon-eye class="summary-views__icon"></icon-eye>
					<span class="summary-views__value">{{ taskItem.views }}</span>
				</li>
				<li class="summary-response">
					<icon-comments class="summary-response__icon"></icon-comments>
					<span class="summary-response__value">{{ taskItem.response }} ответов</span>
				</li>
			</ul>
		</div>
	</li>
</template>

<script>

	import iconDisc from '@icons/disc';
	import iconClock from '@icons/clock';
	import iconEye from '@icons/eye';
	import iconComments from '@icons/comments';

  import { longDate } from '@helpers/dateFormat.js';

	export default {
		name: "task-item",
		components: { iconClock , iconDisc , iconEye , iconComments },
		props: {
			'taskItem': {
				type: Object,
				required: true
			}
		},
    data: () => ({
      Author: {}
    }),
    computed: {
      backendLocation() {
        return this.$store.state.General.host
      }
    },
    created() {
      this.$http.get( `user/${ this.taskItem.authorID }` )
        .then( ({ body }) => {
          console.log(body);
          this.Author = body;
        })
        .catch( error => console.error(error) )
    }
	};

</script>

<style lang="scss" scoped>

	@import "../../stylesheets/partials/_mixins";

	.task-item {
		margin-top: 20px;
		padding: 15px 20px;
		background-color: #fff;
		background-color: var(--whited);
		@include MDShadow-1;
		&__about {
			position: relative;
			display: flex;
			align-items: flex-start;
		}
		&__summary {
			display: flex;
			justify-content: space-between;
			margin-top: 16px;
		}
	}

	.about-picture {
		size: 256px 151px;
		min-width: 256px;
		object-fit: cover;
		border-radius: 3px
	}
	.about-picture-overlay {
		position: absolute;
		top: 0; left: 0;
		size: 256px 151px;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.8);
		&__text {
			margin: 0;
			text-align: center;
			font-size: 12px;
			font-weight: 600;
			line-height: 150px;
			color: #009d2f;
			color: var(--irish-green);
		}
	}

	.about-information {
		position: relative;
		min-width: 374px;
		margin-left: 20px;
		&__title {
			width: 75%;
			font-size: 18px;
			font-weight: 600;
			line-height: 1.39;
			color: #009d2f;
			color: var(--irish-green);
			cursor: pointer;
			&:hover {
				text-decoration: underline !important;
			}
			&._is-rush {
				color: #d0011b;
				color: var(--scarlet);
			}
			&._is-engaged {
				color: #4a4a4a;
				color: var(--charcoal-grey);
			}
		}
		&__author-avatar {
			position: absolute;
			top: 0;
			right: 0;
			size: 50px;
			object-fit: cover;
			cursor: pointer;
			border-radius: 50%;
			@include MDShadow-1;
		}
		&__published {
			margin: 5px 0;
			font-size: 10px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__description {
			margin: 0;
			font-size: 12px;
			line-height: 1.5;
			white-space: pre-line;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}
	}

	.summary-task {
		display: flex;
	}
	.summary-social {
		display: flex;
	}

	.summary-budget {
		display: flex;
		&__icon {
			size: 24px;
			fill: #fff;
			fill: var(--whited);
			stroke: #009d2f;
			stroke: var(--irish-green);
			&._is-engaged {
				stroke: #4b4b4b;
				stroke: var(--purpley-grey);
			}
		}
		&__value {
			margin: 0 16px 0 8px;
			height: 24px;
			font-size: 12px;
			line-height: 26px;
			color: #009d2f;
			color: var(--irish-green);
			&._is-engaged {
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
	}
	.summary-deadline {
		display: flex;
		&__icon {
			size: 24px;
			fill: #fff;
			fill: var(--whited);
			stroke: #009d2f;
			stroke: var(--irish-green);
			&._is-rush {
				stroke: #d0011b;
				stroke: var(--scarlet);
			}
			&._is-engaged {
				stroke: #4b4b4b;
				stroke: var(--purpley-grey);
			}
		}
		&__value {
			margin: 0 16px 0 8px;
			height: 24px;
		    font-size: 12px;
		    line-height: 26px;
		    color: #4a4a4a;
		    color: var(--charcoal-grey);
			&._is-rush {
				color: red;
				font-weight: 600;
			}
			&._is-engaged {
				stroke: #4b4b4b;
				stroke: var(--purpley-grey);
			}
		}
	}
	.summary-views {
		display: flex;
		&__icon {
			margin: 0 0 0 16px;
			size: 24px;
			fill: #fff;
			fill: var(--whited);
			stroke: #4b4b4b;
			stroke: var(--purpley-grey);
		}
		&__value {
			margin: 0 0 0 8px;
			height: 24px;
			font-size: 12px;
			line-height: 26px;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}
	}
	.summary-response {
		display: flex;
		&__icon {
			margin: 0 0 0 16px;
			size: 24px;
			fill: #fff;
			fill: var(--whited);
			stroke: #4b4b4b;
			stroke: var(--purpley-grey);
		}
		&__value {
			margin: 0 0 0 8px;
			height: 24px;
			font-size: 12px;
			line-height: 26px;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}
	}

</style>
