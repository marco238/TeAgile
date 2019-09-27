import { Router } from '@vaadin/router';

import './src/login/';

/**
 * Contains the parent html node
 * @param {object} node
 */
export const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes([
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: 'index-login',
    },
    {
      path: '/project',
      component: 'create-project',
      action: () =>
        import('./src/project/create-project'),
    },
    // {
    //   path: '/community',
    //   component: 'smartup-community-view',
    //   action: () =>
    //     import('./views/community/'),
    // },
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
