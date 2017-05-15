import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from '../modules/home/home.routes';

const appRoutes: Routes = [
  ...HomeRoutes // must be the last one
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });
