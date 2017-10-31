//Imports on top

const state = {
    // Initial state of your store
	friends: [
		{
			_id: 1,
			isAgent: false,
			isOnline: false,
			avatar: 'christopher-campbell-40410.jpg',
			name: 'Ольга',
			sename: 'Смирнова',
			information: {
				specialization: 'Веб-дизайн, реклама',
				lastVisit: '22.07.2017',
				status: 'свободна',
				town: 'Санкт-Петербург',
				country: 'РФ',
				education: {
					place: 'СПбГУТД',
					faculty: 'графический дизайн'
				},
				about: 'Привет! Меня зовут Елена, я студентка СПбГУТД на кафедре графического дизайна. Занимаюсь веб-дизайном и очень увлекаюсь всей IT сферой.'
			},
			company: null,
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
					_id: '241',
					preview: 'project2.jpg'
				},
				{
					_id: '129',
					preview: 'project.jpg'
				}
			]
		},
		{
			_id: 2,
			isAgent: true,
			isOnline: false,
			avatar: 'agent.jpg',
			name: 'Евгений',
			sename: 'Воронин',
			information: {
				specialization: 'Веб-дизайн, реклама',
				lastVisit: '22.07.2017',
				status: 'есть заказ',
				town: 'Санкт-Петербург',
				country: 'РФ',
				education: {
					place: 'СПбГУТД',
					faculty: 'графический дизайн'
				},
				about: 'Я представляю компанию, которая занимается производством и дестрибуцией бытовых холодильников ...',
			},
			company: 'ООО "Haier RU"',
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
					_id: '220',
					preview: 'project3.jpg'
				}
			]
		},
		{
			_id: 3,
			isAgent: true,
			isOnline: false,
			avatar: 'agent2.jpg',
			name: 'Александр',
			sename: 'Вернер',
			information: {
				specialization: 'Веб-дизайн, реклама',
				lastVisit: '22.07.2017',
				status: 'нет задач',
				town: 'Санкт-Петербург',
				country: 'РФ',
				education: {
					place: 'СПбГУТД',
					faculty: 'графический дизайн'
				},
				about: 'Мы молодая и перспективная компания, основной целью которой является дестрибуция товаров народного ...',
			},
			company: 'ЗАО "РЕ Трэйдинг"',
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
					_id: '820',
					preview: 'project4.jpg'
				},
				{
					_id: '822',
					preview: 'project5.jpg'
				}
			]
		},
		{
			_id: '59b98da198948246804be893',
			isAgent: false,
			isOnline: true,
  		avatar: 'avatar.jpg',
  		name: 'Елена',
  		sename: 'Иванова',
    	information: {
    		specialization: 'Веб-дизайн, реклама',
    		lastVisit: '22.07.2017',
    		status: 'свободна',
    		town: 'Санкт-Петербург',
    		country: 'РФ',
    		education: {
    			place: 'СПбГУТД',
    			faculty: 'графический дизайн'
    		},
    		about: 'Привет! Меня зовут Елена, я студентка СПбГУТД на кафедре графического дизайна. Занимаюсь веб-дизайном и очень увлекаюсь всей IT сферой.'
    	},
			company: null,
			addedDate: 2,
			popularity: 16,
			rating: 4.9,
			responses: {
				positive: 28,
				negative: 0
			},
			issued: 201,
			works: [
				{
					_id: '820',
					preview: 'project4.jpg'
				},
				{
					_id: '822',
					preview: 'project5.jpg'
				}
			]
		}
	],
	blacklist: [
		{
			_id: 16,
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
