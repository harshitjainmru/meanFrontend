import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_ACCOUNT_FORGOT_PASSWORD, ABS_ACCOUNT_LOGIN, ABS_ACCOUNT_RESET_PASSWORD, ABS_ACCOUNT_SIGNUP } from 'src/app/constant/absolute-routes';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: ABS_ACCOUNT_SIGNUP.path,
        pathMatch: 'full',
      },
      {
        path: ABS_ACCOUNT_LOGIN.path,
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: ABS_ACCOUNT_SIGNUP.path,
        loadChildren: () =>
          import('./pages/signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: ABS_ACCOUNT_FORGOT_PASSWORD.path,
        loadChildren: () =>
          import('./pages/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: ABS_ACCOUNT_RESET_PASSWORD.path,
        loadChildren: () =>
          import('./pages/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
