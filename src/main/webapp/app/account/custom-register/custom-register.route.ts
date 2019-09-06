import { Route } from '@angular/router';

import { CustomRegisterComponent } from './custom-register.component';
import {UserRouteAccessService} from "app/core";
import {RegisterComponent} from "app/account";

export const customRegisterRoute: Route = {
  path: 'custom-register',
  component: CustomRegisterComponent,
  data: {
    authorities: [],
    pageTitle: 'register.title'
  }
};
