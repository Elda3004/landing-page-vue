export function API_ERROR(state, error) {
	state.errors = error;
}

export function API_GENERAL_ERROR(state, payload) {
	state.generalError = payload;
}