import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CustomSettingComponent } from './custom-setting.component';
import {SettingsComponent} from "app/account";

export const customSettingRoute: Route = {
  path: 'custom-setting',
  component: CustomSettingComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'global.menu.account.custom-setting'
  },
  canActivate: [UserRouteAccessService]
};
