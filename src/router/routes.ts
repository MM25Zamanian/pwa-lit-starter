import Route from '../types/route.js';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: 'page-home',
    action: async (): Promise<void> => {
      await import('../pages/page-home.js');
    },
  },
  {
    path: '/about',
    name: 'about',
    component: 'page-about',
    action: async (): Promise<void> => {
      await import('../pages/page-about.js');
    },
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    action: async (): Promise<void> => {
      await import('../pages/page-not-found.js');
    },
  },
];
