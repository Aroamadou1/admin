import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Registrer } from '../../../data/registrer.data';
import { Admin } from '../../../Models/admin.model';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  resetForm: FormGroup;
  user: Admin;
  constructor(
   public formBuilder: FormBuilder,
   public auth: AuthService,
   public router: Router,
   public registrer: Registrer
  ) { }

  ngOnInit() {
  
  }

  initForm(user) {
    this.resetForm = this.formBuilder.group({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      verifPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    },
      {
        validator: this.mustMatch('newPassword', 'verifPassword')
      }
    );
  }

  get f() { return this.resetForm.controls; }
  

  onValidate() {
    this.auth.changePassword(this.resetForm.value).then(
      (ok) => {
        if (ok) this.router.navigate(['/private']);
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }

  }
}
