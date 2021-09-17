import axios from 'axios'

/**
 *
*/
export function FETCH_USERS(state, payload) {
	state.users = payload
}