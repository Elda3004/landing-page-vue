export const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
    'Authorization':'Bearer ' + localStorage.getItem('token')
}