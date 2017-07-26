const state = {
    // Initial state of your store
	isLoggedIn: !!window.localStorage.token
};

const getters = {
    // Getters to access your store values
};

const actions = {
    // Asynchronous mutations commits to modify your store
	changeAuth({ commit } , payload ) {
		commit('CHANGE_AUTH' , payload )
	}
};

const mutations = {
    // Synchronous modifications of  your store
	CHANGE_AUTH( state , payload ) {
		state.isLoggedIn = payload
	}
};

export default { state , getters , actions , mutations };
