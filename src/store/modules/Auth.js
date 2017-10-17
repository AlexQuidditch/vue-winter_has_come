const state = {
  username: '',
  avatar: '',
  email: '',
  isLoggedIn: !!window.localStorage.token
};

const actions = {
  changeAuth( { commit } , payload ) {
    commit( 'CHANGE_AUTH' , payload )
  },
  createAuthData( { commit } , payload ) {
    commit( 'CREATE_AUTH_DATA' , payload )
  },
  destroyAuthData({ commit }) {
    commit( 'DESTROY_AUTH_DATA' )
  }
};

const mutations = {
  CHANGE_AUTH( state , payload ) {
    state.isLoggedIn = payload
  },
  CREATE_AUTH_DATA( state , { username , avatar , email } ) {
    state.username = username;
    state.avatar = avatar;
    state.email = email;
  },
  DESTROY_AUTH_DATA( state ) {
    state.username = '';
    state.avatar = '';
    state.email = '';
  }
};

export default { state , getters , actions , mutations };
