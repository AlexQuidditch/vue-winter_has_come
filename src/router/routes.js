import login from '@views/login';
import profile from '@views/profile';
import agents from '@views/agents';
// import agent from '@views/agent';
import users from '@views/users';
import user from '@views/user';
import friends from '@views/friends';
import findJob from '@views/find-job';
import task from '@views/task';
import teams from '@views/teams';
import settings from '@views/settings';
import support from '@views/support';
import createTask from '@views/create-task';
import completeTask from '@views/complete-task';
import messages from '@views/messages';
import dialog from '@views/messages/dialog-view';

// Auth scripts
import auth from './auth.js';
import { requireAuth } from './hooks.js';

export default [
	{
		path: '/',
		name: 'profile',
		component: profile,
		beforeEnter: requireAuth
	},
	{
		path: '/agents',
		name: 'agents',
		component: agents,
		beforeEnter: requireAuth
	},
	{
		path: '/users',
		name: 'users',
		component: users,
		beforeEnter: requireAuth
	},
	{
		path: '/user/:id',
		name: 'user',
		component: user,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/login',
		name: 'login-page',
		component: login
	},
	{
		path: '/login',
		name: 'logout',
		component: login
	},
	{
		path: '/friends',
		name: 'friends',
		component: friends,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/teams',
		name: 'teams',
		component: teams,
		beforeEnter: requireAuth,
		props: true,
		redirect: '/'
	},
	{
		path: '/find-job',
		name: 'find-job',
		component: findJob,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/task/:id',
		name: 'task',
		component: task,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/task/create',
		name: 'create-task',
		component: createTask,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/task/edit/:id',
		name: 'edit-task',
		component: createTask,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/task/complete/:id',
		name: 'complete-task',
		component: completeTask,
		beforeEnter: requireAuth,
		props: true
	},
	{
		path: '/messages',
		name: 'messages',
		component: messages,
		beforeEnter: requireAuth,
		children: [
			{
				path: ':id',
				name: 'dialog',
				component: dialog,
				props: true
			}
		]
	},
	{
		path: '/settings',
		name: 'settings',
		component: settings,
		beforeEnter: requireAuth
	},
	{
		path: '/support',
		name: 'support',
		component: support,
		beforeEnter: requireAuth
	},
	{
		path: '*',
		redirect: '/'
	}
];
