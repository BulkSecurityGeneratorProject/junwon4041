import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyAppSharedModule } from 'app/shared';

import {
  PasswordStrengthBarComponent,
  RegisterComponent,
  ActivateComponent,
  PasswordComponent,
  PasswordResetInitComponent,
  PasswordResetFinishComponent,
  SettingsComponent,
  CustomSettingComponent,
  CustomRegisterComponent,
  CustomPasswordComponent,
  CustomPasswordStrengthBarComponent,
  accountState
} from './';

@NgModule({
  imports: [MyAppSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    CustomSettingComponent,
    CustomRegisterComponent,
    CustomPasswordComponent,
    CustomPasswordStrengthBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppAccountModule {}
