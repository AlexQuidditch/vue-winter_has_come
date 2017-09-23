Vue.use(Router);

import { scrollBehavior } from './options.js';

import routes from './routes.js';

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  linkExactActiveClass: '_exact-active',
  linkActiveClass: '_active',
  routes
});
