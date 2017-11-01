import API from '../api';

const state = [];

const getters = {};

const actions = {
  getAgents( { commit } , payload ) {
    return API.get('agents/get/all')
      .then( ({ data }) => commit( 'GET_AGENTS' , data ))
  },
  getAgentByID( { commit } , payload ) {
    return API.get(`agents/get/${ payload }`)
  },
  clearAgents({ commit }) {
    commit( 'CLEAR_AGENTS' );
  }
};

const mutations = {
  GET_AGENTS( state , payload ) {
    state.splice( 0 , state.length );
    payload.forEach( agent => state.unshift(agent) );
  },
  CLEAR_AGENTS( state ) {
    state.splice( 0 , state.length );
  }
};

export default { state , getters , actions , mutations };
