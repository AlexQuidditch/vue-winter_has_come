//Imports on top

const state = {
	common: {
		email: 'лолкекчебурек@mail.ru',
		phone: '+7 (121) 222-39-82',
		link: '',
		bornDate: '2017-08-18T18:37:00.000Z',
		password: '',
		caption: '',
		publishEmail: false
	},
	confidential: {
		contacts: 1,
		teams: 2,
		messages: 3,
		reviews: 4
	},
	payments: {}
};

const actions = {
	updateEmail({ commit } , payload ) {
		commit('UPDATE_EMAIL' , payload )
	},
	updatePassword({ commit } , payload ) {
		commit('UPDATE_PASSWORD' , payload )
	},
	updateLink({ commit } , payload ) {
		commit('UPDATE_LINK' , payload )
	},
	updatePhone({ commit } , payload ) {
		commit('UPDATE_PHONE' , payload )
	},
	updateBornDate({ commit } , payload ) {
		commit('UPDATE_BORN_DATE' , payload )
	},
	updateCaption({ commit } , payload ) {
		commit('UPDATE_CAPTION' , payload )
	},
	updateCheck({ commit } , payload ) {
		commit('UPDATE_CHECK' , payload )
	},
	// confidential
	updateContacts({ commit } , payload ) {
		commit('UPDATE_CONTACTS' , payload )
	},
	updateTeams({ commit } , payload ) {
		commit('UPDATE_TEAMS' , payload )
	},
	updateMessages({ commit } , payload ) {
		commit('UPDATE_MESSAGES' , payload )
	},
	updateReviews({ commit } , payload ) {
		commit('UPDATE_REVIEWS' , payload )
	}
};

const mutations = {
	UPDATE_EMAIL( state , payload ) {
		state.common.email = payload
	},
	UPDATE_PASSWORD( state , payload ) {
		state.common.password = payload
	},
	UPDATE_LINK( state , payload ) {
		state.common.link = payload
	},
	UPDATE_PHONE( state , payload ) {
		state.common.phone = payload
	},
	UPDATE_BORN_DATE( state , payload ) {
		state.common.bornDate = payload
	},
	UPDATE_CAPTION( state , payload ) {
		state.common.caption = payload
	},
	UPDATE_CHECK( state , payload ) {
		state.common.publishEmail = payload
	},
	UPDATE_CONTACTS( state , payload ) {
		state.confidential.contacts = payload
	},
	UPDATE_TEAMS( state , payload ) {
		state.confidential.teams = payload
	},
	UPDATE_REVIEWS( state , payload ) {
		state.confidential.reviews = payload
	}
};

const getters = {};

export default { state , getters , actions , mutations };
