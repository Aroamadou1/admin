import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../data/registrer.data';
import { AdminData } from '../../../data/entities/admin.data';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  resetForm: FormGroup;
  subs: Subscription;
  
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public adminData: AdminData,
    public registrer: Registrer
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      item => {
          this.initForm(item);
        }
    ) ;
  }

  initForm(item) {
    this.resetForm = this.formBuilder.group({
      id: new FormControl(''),
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
    this.adminData.changePassword({id: this.resetForm.value.id, password: this.resetForm.value.newPassword});
    this.onClose();
  }

  onClose() {
    $("#myPasswordModal").hide();
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
