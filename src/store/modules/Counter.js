const state = {
	main: 0
};

const mutations = {
	DECREMENT_MAIN_COUNTER( state , payload ) {
		state.main -= payload
	},
	INCREMENT_MAIN_COUNTER( state , payload ) {
		state.main += payload
	}
};

const actions = {
	increment({ commit } , payload ) {
		commit('INCREMENT_MAIN_COUNTER' , payload )
	},
	decrement({ commit } , payload ) {
		commit('DECREMENT_MAIN_COUNTER' , payload )
	}
};

export default { state, mutations, actions };
