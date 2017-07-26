import login from '@views/login';
import profile from '@views/profile';

// Auth scripts
import auth from './auth.js';
import { requireAuth } from './hooks.js';

export default [
	{
		path: '/',
		name: 'profile',
		component: profile,
		// beforeEnter: requireAuth
	},
	{
		path: '/login',
		name: 'login-page',
		component: login
	},
	// {
	// 	path: '/logout',
	// 	beforeEnter ( to , from , next ) {
	// 		auth.logout();
	// 		next('/');
	// 	}
    // },
	{
		path: '*',
		redirect: '/'
	}
];
