<template lang="html">
  <div class="recommendations">
		<h4 class="recommendations__title">Подходит Вам...</h4>
		<ul class="recommendations-list">
			<li v-for="( recommsItem , index ) in recommsList" :key="index"
					class="recommendations-item">
				<img :src=" '/static/assets/shared/' + recommsItem.picture " :alt="recommsItem.title"
						 class="recommendations-item__picture" />
				<h5 class="recommendations-item__title">{{ recommsItem.title }}</h5>
				<p class="recommendations-item__annotation">
					<img src="/static/assets/sidebar/disc.svg" alt="Бюджет" />
					<span>{{ recommsItem.budget }} баллов</span>
				</p>
				<p class="recommendations-item__annotation">
					<img src="/static/assets/sidebar/clock.svg" alt="Сроки" />
					<span>{{ recommsItem.deadline }}</span>
				</p>
			</li>
		</ul>
  </div>
</template>

<script>

	export default {
		name: "recommendations",
		data: () => ({
      recommsList: [
    		{
    			title: 'Проект',
    			picture: 'project7.jpg',
    			route: '/',
    			budget: '10 000',
    			deadline: '7 дней'
    		},
    		{
    			title: 'Проект 2',
    			picture: 'project8.jpg',
    			route: '/',
    			budget: '25 000',
    			deadline: '17 дней'
    		}
    	]
  	})
	};

</script>

<style lang="scss">

	.recommendations {
		padding: 30px 0;
	}

	.recommendations-list {}

	.recommendations-item {
		&__picture {
			width: 100%;
			margin-top: 20px;
			object-fit: cover;
			object-position: top;
		}
		&__title {
			margin-top: 10px;
			font-size: 12px;
			color: #4a4a4a;
			color: var(--charcoal-grey);
		}
		&__annotation {
			margin: 5px 0;
			img {
				display: inline-block;
				vertical-align: middle;
				size: 17px;
			}
			span {
				font-size: 12px;
				line-height: 1.5;
				color: #4b4b4b;
				color: var(--purpley-grey);
			}
		}
	}

</style>
