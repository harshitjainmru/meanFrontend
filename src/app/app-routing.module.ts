import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_ACCOUNT_SIGNUP, ACCOUNT } from './constant/absolute-routes';

const routes: Routes = [
  {path:'',redirectTo:ACCOUNT.path,pathMatch:'full'},
  {
    path: ACCOUNT.path,
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),

    },
    {path:'**',redirectTo:ABS_ACCOUNT_SIGNUP.path,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
