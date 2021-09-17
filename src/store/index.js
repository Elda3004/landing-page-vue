import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import CMS from './modules/CMS/index.js'
import Auth from './modules/Auth/index.js'
import Admin from './modules/Admin/index.js'
import Submission from './modules/Submission/index.js'
import HandleErrors from './modules/HandleErrors/index.js'
import VuexPersist  from "vuex-persistedstate";
import VueSwal from 'vue-swal';

const vuexLocalStorage = new VuexPersist({
	key: 'vuex',
	storage: window.localStorage,
})

const store = new Vuex.Store({
    modules: {
        CMS,
        Auth,
        Admin,
        Submission,
        HandleErrors
    },
    plugins: [vuexLocalStorage]
})

export default store