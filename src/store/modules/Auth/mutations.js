import axios from 'axios'
/**
 *
*/
export function SET_USER(state, user) {
	state.user = user
}

/**
 *
*/
export function IS_ADMIN(state, isAdmin) {
	state.isAdmin = isAdmin
}

/**
 *
*/
export function AUTHENTICATED(state, authenticated) {
	state.authenticated = authenticated
}

/**
 *
*/
export function AUTH_TOKEN(state, accessToken) {
	localStorage.setItem('token', accessToken)
  	state.token = accessToken
}