import { Routes } from '@angular/router';

import {
  activateRoute,
  passwordRoute,
  passwordResetFinishRoute,
  passwordResetInitRoute,
  registerRoute,
  settingsRoute,customPasswordRoute
} from './';

const ACCOUNT_ROUTES = [ customPasswordRoute, activateRoute,  passwordResetFinishRoute, passwordResetInitRoute, registerRoute, settingsRoute];
// const ACCOUNT_ROUTES = [ activateRoute, passwordRoute, passwordResetFinishRoute, passwordResetInitRoute, registerRoute, settingsRoute];
export const accountState: Routes = [
  {
    path: '',
    children: ACCOUNT_ROUTES
  }
];
