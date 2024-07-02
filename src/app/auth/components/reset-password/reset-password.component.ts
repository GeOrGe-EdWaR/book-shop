import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  constructor(private _authService: AuthService, private _Router: Router) {}

  isHide: boolean = true;

  onResterPassword = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    otp: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  onSubmit(data: FormGroup) {

    this._authService.onResetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('complete');
        this._Router.navigate(['auth/login']);
      },
    });
  }
}
