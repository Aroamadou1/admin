import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../data/registrer.data';
import { AdminData } from '../../../data/entities/admin.data';

@Component({
  selector: 'app-identifiant-form',
  templateUrl: './identifiant-form.component.html',
  styleUrls: ['./identifiant-form.component.scss']
})
export class IdentifiantFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subs: Subscription;
  user;
  constructor(
     public router: Router,
     public registrer: Registrer,
     public adminData: AdminData
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      item => {
        this.user = item;
          this.initForm();
        }
    ) ;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  

  initForm() {
    this.form = new FormGroup({
      identifiant: new FormControl(this.user.identifiant, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });
  }


  get identifiant() { return this.form.get('identifiant'); };

  onSubmit() {
    this.user.identifiant = this.form.value.identifiant
    this.adminData.changeIdentifiant(this.user);
    this.onClose();
  }

  onClose(){
    $("#myIdentifiantModal").hide();
  }
}
