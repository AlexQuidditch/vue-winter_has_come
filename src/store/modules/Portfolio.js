const state = [
	{
		id: 0,
		title: 'Макет',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		picture: 'project6.jpg',
		likes: 168,
		comments: 12
	},
	{
		id: 1,
		title: 'Дизайн сайта',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		picture: 'project7.jpg',
		likes: 692,
		comments: 23,
	},
	{
		id: 2,
		title: 'Фотографии',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		picture: 'project8.jpg',
		likes: 1223,
		comments: 37
	},
	{
		id: 3,
		title: 'Расписной топор',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		picture: 'project8.jpg',
		likes: 7278,
		comments: 37
	},
	{
		id: 4,
		title: 'Корона Шута',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		picture: 'project8.jpg',
		likes: 9389,
		comments: 37
	}
];

const actions = {
	likePortfolioItem( { commit } , payload ) {
    commit( 'LIKE_PORTFOLIO_ITEM' , payload )
  }
};

const mutations = {
  LIKE_PORTFOLIO_ITEM( state , payload ) {
    state.forEach( portfolioItem => {
      if ( portfolioItem._id === payload[0] ) portfolioItem.likes += payload[1];
    })
  }
};

const getters = {};

export default { state , getters , actions , mutations };
