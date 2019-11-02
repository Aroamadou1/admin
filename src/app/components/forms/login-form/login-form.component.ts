import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

 
  form: FormGroup;
  passwordType = 'password';
  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  seePassword() {
    if (this.passwordType === 'password') this.passwordType = 'text';
    else this.passwordType = 'password';
  }

  initForm() {
    this.form = new FormGroup({
      identifiant: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    });
  }

  get identifiant() { return this.form.get('identifiant'); };
  get password() { return this.form.get('password'); };
  onSubmit() {
    this.auth.login(this.form.value).then(
      (isAuth) => {
        if (isAuth) {
          if (this.form.value.password === 'vonamawu2019') {
            this.router.navigate(['/public/changepassword']);
          } else {
            this.router.navigate(['/private']);
          }
        }
      }
    );
  }
}
