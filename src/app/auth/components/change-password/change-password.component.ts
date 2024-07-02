import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(private _authService: AuthService) {}
  isHide: boolean = true;
  ChangePasswordForm = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    password_new: new FormControl(null, [Validators.required]),
  });
  onSubmit(data: FormGroup) {
    this._authService.onChangePassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
