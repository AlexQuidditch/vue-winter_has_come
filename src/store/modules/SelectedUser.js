const state = {};

const template = {
  _id: '',
  isAgent: null,
  wallID: '',
  personal: {
    avatar: '',
    name: '',
    sename: '',
    email: '',
    password: '',
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
      vk: '',
      fb: '',
      skype: '',
      telegram: ''
    },
    teams: []
  },
  portfolio: [],
  reviews: []
};
const getters = {};

const actions = {};

const mutations = {};

export default { state , getters , actions , mutations };
