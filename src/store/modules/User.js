//Imports on top

const state = {
  username: '',
  avatar: '',
  email: '',
  personal: {},
  information: {},
  ratings: {},
  social: {},
  portfolio: [],
  reviews: []
};

const actions = {
  createInstance( { commit } , payload ) {
    console.log(payload);
    commit( 'CREATE_INSTANCE' , payload )
  },
  destroyInstance({ commit }) {
    commit( 'DESTROY_INSTANCE' )
  }
};

const mutations = {
  CREATE_INSTANCE( state , payload ) {
    state = Object.assign( state , payload );
    state.password = null;
  },
  DESTROY_INSTANCE( state ) {
    state = Object.assign( state , {
      _id: '',
      username: '',
      avatar: '',
      email: '',
      personal: {},
      information: {},
      ratings: {},
      social: {},
      portfolio: [],
      reviews: []
    });
  }
};

const getters = {};

export default { state , getters , actions , mutations };
