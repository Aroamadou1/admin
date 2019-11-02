import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Fournisseur } from '../../../Models/fournisseur.model';
import { FournisseurData } from '../../../data/entities/fournisseur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.scss']
})
export class FournisseurFormComponent implements OnInit {

  form: FormGroup;
  defaultItem = {id: null, nom:'', contact:'',  created_at: '', updated_at: '', deleted_at: ''};
  item: Fournisseur;
  titre: string = "Ajout d'un fournisseur"; 
  subs: Subscription
  constructor(
    public fournisseur: FournisseurData,
    public modal: ModalService
  ) {
   
   }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (this.item) {
          this.item = item;
          this.titre = "Modification d'un fournisseur";
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
      contact: new FormControl(item.contact, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });
  }

  get nom() { return this.form.get('nom'); };
  get contact() { return this.form.get('contact'); };

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.value.id)  this.fournisseur.add(this.form.value);
    else {
      console.log('edit');
      this.fournisseur.edit(this.form.value);
    }
    this.onClose();
  }

  onClose() {
    $("#myModal").hide();
    this.modal.setData({});
    this.initForm(this.item);
  }
}

