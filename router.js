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
    {
      path: '/signup',
      component: 'register-user',
      action: () =>
        import('./src/login/registerUser'),
    },
    {
      path: '/project',
      component: 'index-project',
      action: () =>
        import('./src/project/index-project'),
    },
    {
      path: '/chat',
      component: 'chat-element',
      action: () =>
        import('./src/chat/chatElement'),
    },
    {
      path: '/chatbot',
      component: 'chat-element',
      action: () =>
        import('./src/chat/chatElement'),
    },
    // {
    //   path: '(.*)',
    //   component: 'view-404',
    //   action: () =>
    //     import('./views/view-404.js'),
    // },
  ]);
};
