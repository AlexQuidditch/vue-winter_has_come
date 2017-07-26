import auth from './auth.js';

export const requireAuth  = ( to, from, next ) => {
	if ( !auth.loggedIn() ) {
		next({
			path: '/',
			query: {
				redirect: to.fullPath
			}
		});
	} else {
		next();
	}
};
