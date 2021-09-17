/*
 *
*/
export function errors(state) {
	return state.errors;
}

/*
 * Handle general error message
*/
export function generalError(state) {
	if(state.generalError !== null) {
		alert('There has been an error. Please, try later');
	}
}