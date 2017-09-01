//Imports on top

const state = {
    // Initial state of your store
	friends: [
		{
			id: 1,
			isAgent: false,
			isOnline: true,
			avatar: 'christopher-campbell-40410.jpg',
			name: 'Ольга',
			sename: 'Смирнова',
			specialization: 'Реклама, маркетинг',
			education: 'ТГУ',
			company: null,
			description: 'Добрый день! Меня зовут Ольга, я только закончила обучение в ТГУ и ищу перспективную команду, куда ...',
			addedDate: 1,
			popularity: 11,
			rating: 4.8,
			responses: {
				positive: 28,
				negative: 0
			},
			issued: 201,
			works: [
				{
					id: '241',
					preview: 'project2.jpg'
				},
				{
					id: '129',
					preview: 'project.jpg'
				}
			]
		},
		{
			id: 2,
			isAgent: true,
			isOnline: true,
			avatar: 'agent.jpg',
			name: 'Евгений',
			sename: 'Воронин',
			specialization: null,
			education: null,
			company: 'ООО "Haier RU"',
			description: 'Я представляю компанию, которая занимается производством и дестрибуцией бытовых холодильников ...',
			addedDate: 3,
			popularity: 1,
			rating: 3.8,
			responses: {
				positive: 28,
				negative: 0
			},
			issued: 201,
			works: [
				{
					id: '220',
					preview: 'project3.jpg'
				}
			]
		},
		{
			id: 3,
			isAgent: true,
			isOnline: false,
			avatar: 'agent2.jpg',
			name: 'Александр',
			sename: 'Вернер',
			specialization: null,
			education: null,
			company: 'ЗАО "РЕ Трэйдинг"',
			description: 'Мы молодая и перспективная компания, основной целью которой является дестрибуция товаров народного ...',
			addedDate: 2,
			popularity: 4,
			rating: 4.2,
			responses: {
				positive: 28,
				negative: 0
			},
			issued: 201,
			works: [
				{
					id: '820',
					preview: 'project4.jpg'
				},
				{
					id: '822',
					preview: 'project5.jpg'
				}
			]
		}
	],
	blacklist: [
		{
			id: 16,
			isAgent: false,
			isOnline: true,
			avatar: '',
			name: '',
			sename: '',
			specialization: '',
			education: '',
			company: ''
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
