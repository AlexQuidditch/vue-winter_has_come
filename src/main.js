import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

import Resource from 'vue-resource';
import VueSweetAlert from 'vue-sweetalert';
import Checkbox from 'vue-material-checkbox';

import MaskedInput from 'vue-masked-input';
import VueDatepicker from 'vuejs-datepicker';

window.Waves = require('node-waves');

// Глобально доступные компоненты
Vue.component('masked-input' , MaskedInput);
Vue.component('datepicker' , VueDatepicker);

Vue.use(Checkbox);
Vue.use(Resource);
Vue.use(VueSweetAlert);

Vue.config.productionTip = false;

Window.application = new Vue({
	components: { App },
	router , store,
	template: '<App/>'
}).$mount('#wrapper');
