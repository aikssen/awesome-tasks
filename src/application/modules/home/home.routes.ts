import { Routes }  from '@angular/router';

import { HomeComponent } from './home.component';

// routes declarations, the / is ommited
export const HomeRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // 404 redirect
];
