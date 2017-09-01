const state = {
	partnerMenuIsOpened: false,

};

const actions = {
	updateMenuState({ commit } , payload ) {
		commit('UPDATE_MENU_STATE' , payload )
	}
};

const mutations = {
	UPDATE_MENU_STATE( state , payload ) {
		state.partnerMenuIsOpened = payload
	}
};

const getters = {};

export default { state , getters , actions , mutations };
