import API from '../api';

const state = [];

const getters = {};

const actions = {
  getUsers( { commit } , payload ) {
    return API.get('users/get/all')
      .then( ({ data }) => commit( 'GET_USERS' , data ))
  },
  getUserByID( { commit } , payload ) {
    return API.get(`users/get/${ payload }`)
  },
  clearUsers({ commit }) {
    commit( 'CLEAR_USERS' );
  }
};

const mutations = {
  GET_USERS( state , payload ) {
    state.splice( 0 , state.length );
    payload.forEach( user => state.unshift(user) );
  },
  CLEAR_USERS( state ) {
    state.splice( 0 , state.length );
  }
};

export default { state , getters , actions , mutations };
