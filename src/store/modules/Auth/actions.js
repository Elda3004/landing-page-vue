import axios from 'axios'
import router from '@/router'
import * as constants from '@/helpers/Constants.js'
// import authHeaders from '@/helpers/AuthHeaders.js'

/**
 * Login
*/
export function postLogin({ state, commit }, payload) {

	axios.post(constants.BASE_API_ENDPOINT+constants.LOGIN_API_ENDPOINT, payload)
	.then(response => {

        if(response.data.message != undefined) {
            alert(response.data.message)
        } else {
            commit('SET_USER', response.data.user)
            //put token in store
            commit('AUTH_TOKEN', response.data.token)

            if (response.data.token) {
                commit('AUTHENTICATED', true)
                commit('IS_ADMIN', true)
            }

            if(state.authenticated && state.isAdmin) {
                //redirect user to dashboard
                router.push({ name: 'admin.dashboard' })
            }
        }
    })
    .catch(error => {
        if(error.response.status !== undefined && error.response.status == 422) {
            commit('HandleErrors/API_ERROR', error.response.data.errors, {root: true})
        } else {
            commit('HandleErrors/API_GENERAL_ERROR', error, {root: true});
        }
    })
}

/**
 * Logout
*/
export function logout({ state, commit }, payload) {

    axios.post(constants.BASE_API_ENDPOINT+constants.LOGOUT_API_ENDPOINT, payload, {
        headers : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        //put user in store
        commit('SET_USER', null)
        //put token in store
        commit('AUTH_TOKEN', null)

        commit('AUTHENTICATED', false)
        commit('IS_ADMIN', false)
        //clear all localStorage
        localStorage.clear()
        //redirect to login page
        router.push({ name: 'auth.login' })
    })
    .catch(error => {
        if(error.response.status !== undefined && error.response.status == 422) {
            commit('HandleErrors/API_ERROR', error.response.data.errors, {root: true})
        } else {
            commit('HandleErrors/API_GENERAL_ERROR', error, {root: true});
        }
    })
}