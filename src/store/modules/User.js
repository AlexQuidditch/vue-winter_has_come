import API from '../api';

import template from '../collections/userTemplate.json';

const state = {};

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
  },
  // Post-Registration methods
  setRole( { commit } , payload ) {
    commit( 'SET_ROLE' , payload )
  },
  changeUser( { commit } , payload ) {
    return API.post( `user/edit/${ payload[0] }` , payload[1] )
  },
  updateTasks( { commit } , payload ) {
    commit( 'UPDATE_TASKS' , payload )
  },
  updateAbout( { commit } , { id , user } ) {
    return API.post( `user/edit/${ id }` , user )
      .then( ({ body }) => console.log(body) )
      .catch( error => console.error(error) )
  },
  setPost( { commit } , payload ) {
    commit( 'SET_POSTS' , payload )
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
  UPDATE_ABOUT( { personal } , payload ) {
    personal.about = payload;
  },
  // SOCIAL
  UPDATE_VK( { social } , payload ) {
    social.contacts.vk = payload;
  },
  UPDATE_FB( { social } , payload ) {
    social.contacts.fb = payload;
  },
  UPDATE_SKYPE( { social } , payload ) {
    social.contacts.skype = payload;
  },
  UPDATE_TELEGRAM( { social } , payload ) {
    social.contacts.telegram = payload;
  },
  // TASKS
  UPDATE_TASKS( { tasks } , payload ) {
    tasks.push( payload );
  },
  // Auth methods
  CREATE_INSTANCE( state , payload ) {
    state = Object.assign( state , payload );
  },
  CLEAN_INSTANCE( state ) {
    state = Object.assign( state , template );
    state.personal.username = '';
    state.personal.password = '';
  },
  DESTROY_INSTANCE( state ) {
    state = Object.assign( state , template );
    state.personal.username = '';
    state.personal.password = '';
  },
  // Post-Registration methods
  SET_ROLE( state , payload ) {
    state.isAgent = payload;
  },
  SET_POSTS( { wall } , payload ) {
    wall.unshift(payload);
  }
};

const getters = {};

export default { state , getters , actions , mutations };
