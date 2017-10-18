import App from './App';
import router from './router';
import store from './store';

import Vuebar from 'vuebar';
import Checkbox from 'vue-material-checkbox';
import Resource from 'vue-resource';
import VueSweetAlert from 'vue-sweetalert';
import VueChatScroll from 'vue-chat-scroll'

import VueDatepicker from 'vuejs-datepicker';
import MaskedInput from 'vue-masked-input';
window.Waves = require('node-waves');

// Глобально доступные компоненты
Vue.component('masked-input' , MaskedInput);
Vue.component('datepicker' , VueDatepicker);

import { FileUpload } from 'v-file-upload'
import 'v-file-upload/dist/v-file-upload.css'

Vue.use(FileUpload)

Vue.use(Vuebar);
Vue.use(Checkbox);
Vue.use(Resource);
Vue.use(VueSweetAlert);
Vue.use(VueChatScroll)

Vue.http.options.root = 'http://localhost:8080';
Vue.config.productionTip = false;
Vue.config.performance = true;

const application = new Vue({
	components: { App },
	router , store,
	template: '<App/>'
}).$mount('#wrapper');
