import { SharedModule } from './../../../shared/shared.module';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  // PASSWORD ICON FOR HIDE
  isHide: boolean = true;
  //EMAIL ERROR
  email = new FormControl('', [Validators.required, Validators.email]);
  //ERROR EMAIL MESSAGE
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //logInForm FOR REACTIVE FORMS
  logInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(20),
    ]),
  });

  //SUBMIT FUNCTION
  onSubmit(data: FormGroup) {
    console.log(data);
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.data.accessToken);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
        this._Router.navigate(['']);
      },
    });
  }
}
