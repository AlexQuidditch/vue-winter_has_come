//Imports on top

const state = {
    // Initial state of your store
	indicators: [
		{
			name: 'Сообщения',
			counter: 1,
			icon: 'message-square.svg'
		},
		{
			name: 'Кошелёк',
			counter: 0,
			icon: 'credit-card.svg'
		},
		{
			name: 'Важное',
			counter: 0,
			icon: 'bell.svg'
		}
	]
};

const getters = {};

const actions = {};

const mutations = {};

export default { state , getters , actions , mutations };
