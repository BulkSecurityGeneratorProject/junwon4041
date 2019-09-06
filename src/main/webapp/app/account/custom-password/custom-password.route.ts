import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CustomPasswordComponent } from './custom-password.component';
import {PasswordComponent} from "app/account";

export const customPasswordRoute: Route = {
  path: 'custompassword',
  component: CustomPasswordComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'global.menu.account.custompassword'
  },
  canActivate: [UserRouteAccessService]
};
