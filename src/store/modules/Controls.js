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

const getters = {
    // Getters to access your store values

};

const actions = {
    // Asynchronous mutations commits to modify your store

};

const mutations = {
    // Synchronous modifications of  your store

};

export default { state , getters , actions , mutations };
