import axios from 'axios'
import * as constants from '@/helpers/Constants.js'

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

/**
 * Post user submission to server
*/
export function postUserSubmission({ state, commit }, payload) {

	axios.post(constants.BASE_API_ENDPOINT+constants.USERS_API_ENDPOINT, payload)
	.then(response => {
        commit('UPDATE_SUBMITTED', true)
    })
    .catch(error => {
        // console.log(error)
        if(error.response.status !== undefined && error.response.status == 422) {
            commit('HandleErrors/API_ERROR', error.response.data.errors, {root: true});
        } else {
            commit('HandleErrors/API_GENERAL_ERROR', error, {root: true});
        }
    })
}

/**
 * Get countries from local server
*/
export function fetchCountries({ commit }) {

	axios.get(constants.BASE_API_ENDPOINT+constants.COUNTRIES_API_ENDPOINT)
    .then(response => {
    	commit('SET_COUNTRIES', response.data)
    })
    .catch(error => {
    	commit('SET_COUNTRIES', [])
        if(error.response.status !== undefined && error.response.status == 422) {
            commit('HandleErrors/API_ERROR', error.response.data.errors, {root: true});
        }
    })
}

/**
 * Reset submitted value
*/
export function resetSubmitted({ commit }) {
    commit('UPDATE_SUBMITTED', false)
}