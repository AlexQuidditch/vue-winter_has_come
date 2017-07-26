import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

import Resource from 'vue-resource';
import VueSweetAlert from 'vue-sweetalert'

Vue.use(Resource);
Vue.use(VueSweetAlert);

const waves = require('node-waves');

window.Waves = waves;

Vue.config.productionTip = false;

window.$Vue = new Vue({
  components: { App },
  router , store,
  template: '<App/>'
}).$mount('#wrapper');
