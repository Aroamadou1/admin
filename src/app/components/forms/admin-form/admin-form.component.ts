import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Admin } from '../../../Models/admin.model';
import { AdminData } from '../../../data/entities/admin.data';
import { ModalService } from '../../../services/modal.service';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  defaultItem = {id: null, nom:'', prenom:'', password: '', contact:'', identifiant:'', created_at: '', updated_at: '', deleted_at: ''};
  item: Admin;
  titre: string = "Ajout d'un administrateur"; 
  subs: Subscription
  constructor(
    public admin: AdminData,
    public modal: ModalService
  ) {
   
   }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (this.item) {
          this.item = item;
          this.titre = "Modification d'un administrateur";
        }
        else this.item = this.defaultItem;
        this.initForm(item);
      }
    ) ;
    this.initForm(this.defaultItem);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  initForm(item) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      nom: new FormControl(item.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      prenom: new FormControl(item.prenom, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      contact: new FormControl(item.contact, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      identifiant: new FormControl(item.identifiant, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });
  }

  get nom() { return this.form.get('nom'); };
  get prenom() { return this.form.get('prenom'); };
  get contact() { return this.form.get('contact'); };
  get identifiant() { return this.form.get('identifiant'); };

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.value.id)  this.admin.add(this.form.value);
    else {
      console.log('edit');
      this.admin.edit(this.form.value);
    }
    this.onClose();
  }

  onClose() {
    $("#myModal").hide();
    this.modal.setData({});
    this.initForm(this.item);
  }
}
