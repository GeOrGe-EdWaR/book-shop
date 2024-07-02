import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LogInComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgetPassword', component: ForgetPasswordComponent },
      { path: 'resetPassword', component: ResetPasswordComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
