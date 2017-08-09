import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UserComponent }  from './users/user.component';
import { AboutComponent }  from './about/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component : UserComponent
  },
  {
    path: 'about',
    component : AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
