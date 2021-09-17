export default function guest ({ next, store }){
	if(store.state.Auth.authenticated){
        return next({
           name: 'admin.dashboard'
        })
    }

    return next()
}