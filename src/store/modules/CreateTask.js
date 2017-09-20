import API from '../api/';

const state = {
	title: '',
	town: '',
	budget: 0,
	skills: '',
	specialization: [],
	attached: [ 'photo.jpg' , 'project3.jpg' , 'C_ovELWXgAE7cDH.jpg' ],
	description: '',
	deadline: '',
	isRush: false,
	published: null
};

const actions = {
	updateBudget( { commit } , payload ) {
		commit( 'UPDATE_BUDGET' , payload )
	},
	updateTitle( { commit } , payload ) {
		commit( 'UPDATE_TITLE' , payload )
	},
	updateDescription( { commit } , payload ) {
		commit( 'UPDATE_DESCRIPTION' , payload )
	},
	updateTown( { commit } , payload ) {
		commit( 'UPDATE_TOWN' , payload )
	},
	updateDeadline( { commit } , payload ) {
		commit('UPDATE_DEADLINE' , payload )
	},
	updateRush( { commit } , payload ) {
		commit('UPDATE_RUSH' , payload )
	},
	updateSkills( { commit } , payload ) {
		commit('UPDATE_SKILLS' , payload )
	},
	addSpecialization( { commit } , payload ) {
		commit( 'ADD_SPECIALIZATION' , payload )
	},
	removeSpecialization( { commit } , payload ) {
		commit( 'REMOVE_SPECIALIZATION' , payload )
	},
	saveTask( { commit } , payload ) {
		return API.post( 'task/create' , state )
	}
};

const mutations = {
	UPDATE_TITLE( state , payload ) {
		state.title = payload
	},
	UPDATE_DESCRIPTION( state , payload ) {
		state.description = payload
	},
	UPDATE_TOWN( state , payload ) {
		state.town = payload
	},
	UPDATE_BUDGET( state , payload ) {
		state.budget = payload
	},
	UPDATE_DEADLINE( state , payload ) {
		state.deadline = payload
	},
	UPDATE_RUSH( state , payload ) {
		state.isRush = payload
	},
	UPDATE_SKILLS( state , payload ) {
		state.skills = payload
	},
	ADD_SPECIALIZATION( state , payload ) {
		state.specialization.push( payload )
	},
	REMOVE_SPECIALIZATION( state , payload ) {
		state.specialization.splice( payload , 1 )
	},
	SAVE_TASK( state , payload ) {
		console.log( payload );
		state.published = new Date()
	}
};

const getters = {};

export default { state , getters , actions , mutations };
