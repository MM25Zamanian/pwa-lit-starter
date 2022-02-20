import { Router } from '@vaadin/router';
import type { Params, RedirectResult } from '@vaadin/router';

import { routes } from './routes.js';

const router = new Router();

router.setRoutes([
  // Redirect to URL without trailing slash
  {
    path: '(.*)/',
    action: (context, commands): RedirectResult => {
      const newPath = context.pathname.slice(0, -1);
      return commands.redirect(newPath);
    },
  },
  ...routes,
]);

export const attachRouter = (outlet: HTMLElement): void => {
  router.setOutlet(outlet);
};

export const urlForName = (name: string, params?: Params): string => {
  return router.urlForName(name, params);
};
