import API from '../api';

const taskTemplate = {
  authorID: null,
  engagedID: null,
  title: '',
  town: '',
  skills: '',
  specialization: [],
  attached: [],
  description: '',
  budget: 0,
  isAgreement: false,
  deadline: null,
  isRush: false,
  views: 0,
  response: 0,
  isEngaged: null,
  completed: {
    rate: 3,
    status: 'notCompleted',
    review: ''
  }
};

const state = {
  authorID: null,
  engagedID: null,
  title: '',
  town: '',
  skills: '',
  specialization: [],
  attached: [],
  description: '',
  budget: 0,
  isAgreement: false,
  deadline: null,
  isRush: false,
  views: 0,
  response: 0,
  isEngaged: null,
  completed: {
    rate: 3,
    status: 'notCompleted',
    review: ''
  }
};

const actions = {
  setAuthorID( { commit } , payload ) {
    commit( 'SET_AUTHOR_ID' , payload )
  },
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
  addAttached( { commit } , payload ) {
    commit( 'UPDATE_ATTACHED' , payload )
  },
  addSpecialization( { commit } , payload ) {
    commit( 'ADD_SPECIALIZATION' , payload )
  },
  removeSpecialization( { commit } , payload ) {
    commit( 'REMOVE_SPECIALIZATION' , payload )
  },
  saveTask( { commit , state } , payload ) {
    return API.post( 'task/create-task' , state )
  },
  saveDraft( { commit , state } , payload ) {
    return API.post( 'task/save-draft' , state )
  },
  clearDraft( { commit } , payload ) {
    commit( 'CLEAR_DRAFT' , payload )
  }
};

const mutations = {
  SET_AUTHOR_ID( state , payload ) {
    console.log(payload);
    state.authorID = payload
  },
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
  UPDATE_ATTACHED( state , payload ) {
    state.attached.push( payload )
  },
  CLEAR_DRAFT( state , payload ) {
    state = Object.assign( state , taskTemplate )
    state.specialization = [];
  }
};

const getters = {};

export default { state , getters , actions , mutations };
