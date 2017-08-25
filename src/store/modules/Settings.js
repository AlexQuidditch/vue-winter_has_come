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
	}
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
	}
};

const getters = {};

export default { state , getters , actions , mutations };
