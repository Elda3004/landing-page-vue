import axios from 'axios'
import * as constants from '@/helpers/Constants.js'
// import * as authHeaders from '@/helpers/AuthHeaders'

/**
 * Get all users from api
*/
export function fetchUsers({ state, commit }, payload) {

	axios.get(constants.BASE_API_ENDPOINT+constants.ADMIN_USERS_API_ENDPOINT, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		    'Authorization':'Bearer ' + localStorage.getItem('token')
		}
	})
	.then(response => {
		state.user = response.data
		commit('FETCH_USERS', response.data)
	})
	.catch(error => {
		commit('FETCH_USERS', [])
	})
}