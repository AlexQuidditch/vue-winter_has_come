//Imports on top

const state = {
    // Initial state of your store
	personal: {
		avatar: 'avatar.jpg',
		name: 'Елена',
		sename: 'Иванова',
		age: '22'
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
		about: 'Привет! Меня зовут Елена, я студиентка СПбГУТД на кафедре графического дизайна. Занимаюсь веб-дизайном и очень увлекаюсь всей IT сферой.'
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
