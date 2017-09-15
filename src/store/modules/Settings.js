import API from '../api';

const state = {
	common: {
		email: '',
		phone: '',
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
	updateEmail( { commit } , payload ) {
		commit('UPDATE_EMAIL' , payload )
	},
	updatePassword( { commit } , payload ) {
		commit('UPDATE_PASSWORD' , payload )
	},
	updateLink( { commit } , payload ) {
		commit('UPDATE_LINK' , payload )
	},
	updatePhone( { commit } , payload ) {
		commit('UPDATE_PHONE' , payload )
	},
	updateBornDate( { commit } , payload ) {
		commit('UPDATE_BORN_DATE' , payload )
	},
	updateCaption( { commit } , payload ) {
		commit('UPDATE_CAPTION' , payload )
	},
	updateCheck( { commit } , payload ) {
		commit('UPDATE_CHECK' , payload )
	},
	saveCommon( { state } , payload ) {
		console.log(payload);
		return API.post( `user/ussser` , state.Common )
	},
	getCommon( { commit } , payload ) {
		API.get(`user/ussser/${ payload }`)
			.then( response => commit( 'GET_COMMON' , response.body.common ) )
	},
	// confidential
	updateContacts( { commit } , payload ) {
		commit('UPDATE_CONTACTS' , payload )
	},
	updateTeams( { commit } , payload ) {
		commit('UPDATE_TEAMS' , payload )
	},
	updateMessages( { commit } , payload ) {
		commit('UPDATE_MESSAGES' , payload )
	},
	updateReviews( { commit } , payload ) {
		commit('UPDATE_REVIEWS' , payload )
	},
	// saveConfidential({ state }) {
	// 	return API.post( 'user/ussser', state.confidential )
	// },
	saveConfidential({ state }) {
		return API.post( 'user/ussser/', state.confidential )
	}
};

const mutations = {
	UPDATE_EMAIL( { common } , payload ) {
		common.email = payload
	},
	UPDATE_PASSWORD( { common } , payload ) {
		common.password = payload
	},
	UPDATE_LINK( { common } , payload ) {
		common.link = payload
	},
	UPDATE_PHONE( { common } , payload ) {
		common.phone = payload
	},
	UPDATE_BORN_DATE( { common } , payload ) {
		common.bornDate = payload
	},
	UPDATE_CAPTION( { common } , payload ) {
		common.caption = payload
	},
	UPDATE_CHECK( { common } , payload ) {
		common.publishEmail = payload
	},
	GET_COMMON( { common } , payload ) {
		common = payload.common
	},
	// confidential
	UPDATE_CONTACTS( { confidential } , payload ) {
		confidential.contacts = Number(payload)
	},
	UPDATE_MESSAGES( { confidential } , payload ) {
		confidential.messages = Number(payload)
	},
	UPDATE_TEAMS( { confidential } , payload ) {
		confidential.teams = Number(payload)
	},
	UPDATE_REVIEWS( { confidential } , payload ) {
		confidential.reviews = Number(payload)
	}
};

const getters = {};

export default { state , getters , actions , mutations };
