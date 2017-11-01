const state = {
    // Initial state of your store
	userID: 2,
	personal: {
		avatar: 'agent.jpg',
		name: 'Евгений',
		sename: 'Воронин',
		age: '22'
	},
	information: {
		agent: true,
		lastVisit: '22.07.2017',
		status: 'есть задание',
		town: 'Москва',
		country: 'РФ',
		company: {
			title: 'ООО "Haier RU"',
			link: 'https://haier-russia.ru'
		},
		about: 'Я представляю компанию, которая занимается производством и дистрибьюцией бытовых холодильников Haier в России.'
	},
	ratings: {
		mainRate: 1734,
		average: {
			icon: 'clock.svg',
			value: 3,
			text: 'в среднем на сайте, часы'
		},
		completed: {
			icon: 'case.svg',
			value: 24,
			text: 'заданий выдано'
		},
		starred: {
			icon: 'star-fill.svg',
			value: 4.9,
			text: 'средняя оценка'
		}
	},
	social: {
		contacts: {
			text: 'По все интересующим вопросам пишите через личные сообщения, а также на электронную почту. Либо на сайте через раздел \"контакты\".',
			links: [
				{
					type: 'mail',
					value: 'contacts@haier-russia.ru'
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
					value: ''
				}
			]
		},
		company: {
			activities: 'производство и дистрибуция бытовых холодильников',
			starts: '22 июня 2014',
			achivements: 'в 2015 году доля компании в отраслевом товарообороте в России составила более 20%. $4,5 млрд — оборот компании за рубежом.'
		}
	},
	tasks: [ 1 ],
	reviews: [ 0 , 1 , 2 ]
};
