 const state = {
	list: {
		main: {
			route: 'profile',
			text: 'Моя страница'
		},
		messages: {
			route: 'messages',
			text: 'Сообщения',
			Counters: {
				state: 5,
				add: 1
			}
		},
		friends: {
			route: 'friends',
			text: 'Друзья',
			Counters: {
				state: 69,
				add: 2
			}
		},
		teams: {
			route: 'teams',
			text: 'Команды',
			Counters: {
				state: 2,
				add: 2
			}
		},
		settings: {
			text: 'Настройки',
			route: 'settings',
			query: {
				section: 'common'
			}
		},
		support: {
			text: 'Поддержка',
			route: 'support',
			query: {
				section: 'opened'
			}
		}
	}
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
