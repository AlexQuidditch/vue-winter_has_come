import login from '@views/login';
import profile from '@views/profile';
import agent from '@views/agent';
import user from '@views/user';
import friends from '@views/friends';
import findJob from '@views/find-job';
import task from '@views/task';
import settings from '@views/settings';
import support from '@views/support';
import createTask from '@views/create-task';
import completeTask from '@views/complete-task';

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
		path: '/agent',
		name: 'agent',
		component: agent
		// beforeEnter: requireAuth
	},
	{
		path: '/user',
		name: 'user',
		component: user
		// beforeEnter: requireAuth
	},
	{
		path: '/login',
		name: 'login-page',
		component: login
		// beforeEnter: requireAuth
	},
	{
		path: '/friends',
		name: 'friends',
		component: friends
		// beforeEnter: requireAuth
	},
	{
		path: '/find-job',
		name: 'find-job',
		component: findJob,
		// beforeEnter: requireAuth
	},
	{
		path: '/task',
		name: 'task',
		component: task,
		// beforeEnter: requireAuth
	},
	{
		path: '/task/create',
		name: 'create-task',
		component: createTask,
		// beforeEnter: requireAuth
	},
	{
		path: '/task/complete',
		name: 'complete-task',
		component: completeTask,
		// beforeEnter: requireAuth
	},
	{
		path: '/settings',
		name: 'settings',
		component: settings
		// beforeEnter: requireAuth
	},
	{
		path: '/support',
		name: 'support',
		component: support
		// beforeEnter: requireAuth
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
