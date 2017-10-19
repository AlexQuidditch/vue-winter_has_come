//Imports on top

const state = {};

const template = {
  _id: '',
  isAgent: null,
  personal: {
    avatar: '',
    name: '',
    email: '',
    password: '',
    sename: '',
    born: '',
    gender: '',
    caption: ''
  },
  information: {
    specialization: '',
    lastVisit: '',
    status: '',
    town: '',
    country: '',
    education: {
      place: '',
      faculty: ''
    }
  },
  ratings: {
    mainRate: '',
    average: '',
    completed: '',
    tests: {
      value: '',
      total: '',
      rate: '',
    }
  },
  social: {
    contacts: {
      text: '',
      links: [],
    },
    teams: []
  },
  portfolio: [],
  reviews: [],
  wallID: '',
};

const actions = {
  startApplication({ commit }) {
    commit('START_APPLICATION')
  },

  // Auth methods
  createInstance( { commit } , payload ) {
    commit( 'CREATE_INSTANCE' , payload )
  },
  cleanInstance({ commit }) {
    commit( 'CLEAN_INSTANCE' )
  },
  destroyInstance({ commit }) {
    commit( 'DESTROY_INSTANCE' )
  }
};

const mutations = {
  UPDATE_NAME( { personal } , payload ) {
    personal.name = payload;
  },
  UPDATE_SENAME( { personal } , payload ) {
    personal.sename = payload;
  },
  UPDATE_BORN( { personal } , payload ) {
    personal.born = payload;
  },
  UPDATE_CAPTION( { personal } , payload ) {
    personal.caption = payload;
  },
  UPDATE_SPECIALIZATION( { information } , payload ) {
    information.specialization = payload;
  },
  UPDATE_TOWN( { information } , payload ) {
    information.town = payload;
  },
  UPDATE_COUNTRY( { information } , payload ) {
    information.country = payload;
  },
  UPDATE_EDUPLACE( { information } , payload ) {
    information.education.place = payload;
  },
  UPDATE_FACULTY( { information } , payload ) {
    information.education.faculty = payload;
  },
  UPDATE_TOWN( { information } , payload ) {
    information.town = payload;
  },

  // Auth methods
  CREATE_INSTANCE( state , payload ) {
    state = Object.assign( state , payload );
  },
  CLEAN_INSTANCE( state ) {
    state = Object.assign( state , template );
    state.username = '';
    state.password = '';
  },
  DESTROY_INSTANCE( state ) {
    state = Object.assign( state , template );
    state.username = '';
    state.password = '';
  }
};

const getters = {};

export default { state , getters , actions , mutations };
