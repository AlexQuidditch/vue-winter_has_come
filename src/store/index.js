import createPersistedState from 'vuex-persistedstate';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules,
  strict: process.env.NODE_ENV !== 'production'
});
