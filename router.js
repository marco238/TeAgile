import { Router } from '@vaadin/router';

import './src/home/homeElement';

/**
 * Contains the parent html node
 * @param {object} node
 */
export const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes([
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: 'home-element',
    },
    {
      path: '/create-project',
      component: 'create-project',
      action: () =>
        import('./src/project/create-project'),
    },
    {
      path: '/login',
      component: 'index-login',
      action: () =>
        import('./src/login/loginUser'),
    },
    // {
    //   path: '/career',
    //   component: 'smartup-career-view',
    //   action: () =>
    //     import('./views/career/'),
    // },
    // {
    //   path: '(.*)',
    //   component: 'view-404',
    //   action: () =>
    //     import('./views/view-404.js'),
    // },
  ]);
};
