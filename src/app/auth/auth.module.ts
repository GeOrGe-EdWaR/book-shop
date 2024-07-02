import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

SharedModule;
@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
