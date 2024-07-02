import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  constructor(private _authService: AuthService, private _Router: Router) {}
  onForgetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  onSubmit(data: FormGroup) {
    console.log(data.value);
    this._authService.onForgetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log(' Completed');
        this._Router.navigate(['/auth/resetPassword']);
      },
    });
  }
}
