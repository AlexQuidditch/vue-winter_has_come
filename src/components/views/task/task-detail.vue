<template lang="html">
  <div class="task-detail">
		<div class="detail-header">
			<div class="header-agent">
				<router-link :to="{ name: 'user', query: { id: Author.id }}" tag="img"
					:src=" '/static/assets/shared/' + Author.avatar" :alt="Author.name + ' ' + Author.sename"
					class="header-agent__avatar"
					title="Открыть профиль">
				</router-link>
				<router-link :to="{ name: 'user', query: { id: Author.id }}" tag="p"
					class="header-agent__name">
					{{ Author.name }}<br />
					{{ Author.sename }}
				</router-link>
			</div>
			<div class="header-statistics">
				<p class="header-statistics__responses">
					Отзывы:
					<span class="header-statistics__responses-positive">
						+{{ Author.responses.positive }}
					</span>
					|
					<span class="header-statistics__responses-negative">
						-{{ Author.responses.negative }}
					</span>
				</p>
				<p class="header-statistics__issued">Заданий выдано:
					<span class="header-statistics__issued-counter">{{ Author.issued }}</span>
				</p>
			</div>
		</div>
		<div class="detail-main">
			<h3 :class="{ '_is-rush' : taskItem.isRush , '_is-engaged' : taskItem.isEngaged }"
				class="detail-main__title">{{ taskItem.title }}</h3>
			<p class="detail-main__published">{{ taskItem.published }}</p>
			<p class="detail-main__description">{{ taskItem.description }}</p>
		</div>
		<div class="detail-footer">
			<ul class="summary-task">
				<li class="summary-budget">
					<icon-disc :class="{ '_is-engaged' : taskItem.isEngaged }"
						class="summary-budget__icon"></icon-disc>
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
						>{{ taskItem.deadline }}
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
      <div class="detail-footer__row">
        <button @click="completeTask( $route.query.id )" class="detail-footer__row-button _complete waves-effect waves-light">Завершить</button>
        <button @click="editTask( $route.query.id )" class="detail-footer__row-button _edit waves-effect waves-light">Редактировать</button>
      </div>
    </div>
  </div>
</template>

<script>

	import iconDisc from '@icons/disc';
	import iconClock from '@icons/clock';
	import iconEye from '@icons/eye';
	import iconComments from '@icons/comments';

  export default {
    name: "task-detail",
    components: { iconClock , iconDisc , iconEye , iconComments },
    computed: {
      taskItem() {
        return this.$store.state.Tasks.find( item => item.id == this.$route.query.id );
      },
      Author() {
        return this.$store.state.Stub.friends.find( item => item.id === this.taskItem.authorID );
      }
    },
    methods: {
      completeTask( q ) {
        this.$router.push({ name: 'complete-task' , query: { id : q } })
      },
      editTask( q ) {
        this.$router.push({ name: 'edit-task' , query: { id : q } })
      }
    }
  };

</script>

<style lang="scss">

	@import "../../../stylesheets/partials/_mixins";

    .task-detail {
      padding: 20px;
      background-color: #fff;
      background-color: var(--whited);
      @include MDShadow-1;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-agent {
      display: flex;
      align-items: center;
      &__avatar {
        size: 50px;
        object-fit: cover;
        cursor: pointer;
        @include MDShadow-1;
      }
      &__name {
        margin: 0 0 0 10px;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.46;
        color: #4a4a4a;
        color: var(--charcoal-grey);
        &:hover  {
          text-decoration: underline !important;
        }
      }
    }

    .header-statistics {
      text-align: right;
      &__responses {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.5;
        color: #4a4a4a;
        color: var(--charcoal-grey);
      }
      &__responses-positive {
        color: #009d2f;
        color: var(--irish-green);
      }
      &__responses-negative {
        color: rgba(75, 75, 75, 0.5);
        color: var(--purpley-grey-20);
      }
      &__issued {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.5;
        color: #4a4a4a;
        color: var(--charcoal-grey);
      }
      &__issued-counter {
        color: rgba(75, 75, 75, 0.5);
        color: var(--purpley-grey-20);
      }
    }

    .detail-main {
      margin-top: 20px;
      &__title {
        &._is-rush {
          color: #d0011b;
          color: var(--scarlet);
        }
        &._is-engaged {
          color: #4a4a4a;
          color: var(--charcoal-grey);
        }
      }
      &__published {
        margin: 10px 0;
        font-size: 10px;
        font-weight: 600;
        color: #4a4a4a;
        color: var(--charcoal-grey);
      }
      &__description {
        margin: 0;
        text-overflow: clip;
        white-space: pre-wrap;
        font-size: 12px;
        line-height: 1.5;
        color: #9b9b9b;
        color: var(--purpley-grey);
      }
    }

    .detail-footer {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin-top: 20px;
      &__row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
      }
      &__row-button {
        size: 310px 35px;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
        line-height: 35px;
        color: #fff;
        color: var(--whited);
        border-radius: 3px;
        border: none;
        transition: box-shadow .3s ease-in-out;
        &:active {
          @include MDShadow-1;
        }
        &._complete {
          background-color: #009d2f;
          background-color: var(--irish-green);
        }
			&._edit {
				background-color: #4a4a4a;
				background-color: var(--charcoal-grey);
			}
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
