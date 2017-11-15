import App from './App';
import router from './router';
import store from './store';

import Vuebar from 'vuebar';
import Checkbox from 'vue-material-checkbox';
import Resource from 'vue-resource';
import VueSweetAlert from 'vue-sweetalert';
import VueChatScroll from 'vue-chat-scroll';
import Vue2Filters from 'vue2-filters';

import MaskedInput from 'vue-masked-input';
window.Waves = require('node-waves');

// Глобально доступные компоненты
Vue.component( 'masked-input' , MaskedInput );

Vue.use( Vuebar );
Vue.use( Checkbox );
Vue.use( Resource );
Vue.use( VueSweetAlert );
Vue.use( VueChatScroll );
Vue.use( Vue2Filters );

import state from './store/modules/General.js';

Vue.http.options.root = state.state;
Vue.config.productionTip = false;
Vue.config.performance = true;

const application = new Vue({
	components: { App },
	router , store,
	template: '<App/>'
}).$mount('#wrapper');
