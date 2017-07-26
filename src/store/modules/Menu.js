//Imports on top

const state = {
    // Initial state of your store
	list: [
		{
			route: '/',
			text: 'Моя страница'
		},
		{
			route: '/',
			text: 'Сообщения',
			Counters: {
				state: 5,
				add: 1
			}
		},
		{
			route: '/',
			text: 'Друзья',
			Counters: {
				state: 80,
				add: 2
			}
		},
		{
			route: '/',
			text: 'Команды',
			Counters: {
				state: 2,
				add: 0
			}
		},
		{
			route: '/',
			text: 'Настройки'
		},
		{
			route: '/',
			text: 'Поддержка'
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
