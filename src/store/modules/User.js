//Imports on top

const state = {
	personal: {
		avatar: 'avatar.jpg',
		name: 'Елена',
		sename: 'Иванова',
		age: '22',
		gender: 'female',
	},
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
	ratings: {
		mainRate: 4.8,
		average: {
			icon: 'clock.svg',
			value: 3,
			text: 'в среднем на сайте, часы'
		},
		completed: {
			icon: 'case.svg',
			value: 24,
			text: 'заданий выполнено'
		},
		tests: {
			icon: 'check-circle.svg',
			value: 0,
			total: 3,
			rate: 4.7,
			text: 'тестов и оценка'
		}
	},
	social: {
		contacts: {
			text: 'Вы можете связаться со мной через личные сообщения на сайте, либо через электронную почту.\nЯ не использую Skype, WhatsApp, Viber, Telegram и прочие мессенджеры.',
			links: [
				{
					type: 'mail',
					value: 'elena.ivanova@gmail.com'
				},
				{
					type: 'vk',
					value: ''
				},
				{
					type: 'fb',
					value: ''
				},
				{
					type: 'phone',
					value: '+7 (963) 009-83-29'
				}
			]
		},
		// TODO each link must be an object
		teams: [ 1 , 3 ]
	},
	portfolio: [ 0 , 1 , 3 ],
	reviews: [ 3 , 4 , 5 ]
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
