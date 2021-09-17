import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import router from './router'
import store from '@/store'
import Vuelidate from 'vuelidate'
import VueSwal from 'vue-swal'

Vue.use(CoreuiVue)
Vue.use(Vuelidate)
Vue.use(VueSwal)
Vue.use(store)
Vue.config.performance = true
Vue.prototype.$log = console.log.bind(console)

new Vue({
	el: '#app',
	router,
	store,
	icons,
	template: '<App/>',
	components: {
		App
	},

	watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Landing Page';
            }
        },
    }
})
