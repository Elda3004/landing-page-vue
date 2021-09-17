export default function auth ({ next, store }){
	if(!store.state.Auth.authenticated){
		return next({
			name: 'auth.login'
		})
	}

 	return next()
}