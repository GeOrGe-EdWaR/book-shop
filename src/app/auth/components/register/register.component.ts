import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isHide: boolean = true;

  constructor(private _authService: AuthService) {}

  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
  });

  onSubmit(data: FormGroup) {
    this._authService.onRegister(data.value).subscribe({
      next: (res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
