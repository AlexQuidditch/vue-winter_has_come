const state = {
  username: '',
  avatar: '',
  email: '',
  isLoggedIn: !!window.localStorage.token
};

const actions = {
  changeAuth({ commit }) {
    commit( 'CHANGE_AUTH' )
  },
  createAuthData( { commit } , { personal } ) {
    commit( 'CREATE_AUTH_DATA' , personal )
  },
  destroyAuthData({ commit }) {
    commit( 'DESTROY_AUTH_DATA' )
  }
};

const mutations = {
  CHANGE_AUTH( state ) {
    window.localStorage.token = '';
  },
  CREATE_AUTH_DATA( state , { name , avatar , email , password } ) {
    state.username = name;
    state.avatar = avatar;
    state.email = email;
    window.localStorage.token = password;
  },
  DESTROY_AUTH_DATA( state ) {
    state.username = '';
    state.avatar = '';
    state.email = '';
    window.localStorage.token = '';
  }
};

export default { state , actions , mutations };
