import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Porteur } from '../../../Models/porteur.model';
import { PorteurData } from '../../../data/entities/porteur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-porteur-form',
  templateUrl: './porteur-form.component.html',
  styleUrls: ['./porteur-form.component.scss']
})
export class PorteurFormComponent implements OnInit {

  form: FormGroup;
  defaultItem = {id: null, nom:'', prenom:'',  contact:'', created_at: '', updated_at: '', deleted_at: ''};
  item: Porteur;
  titre: string = "Ajout d'un porteur"; 
  subs: Subscription
  constructor(
    private porteur: PorteurData,
    private modal: ModalService
  ) {
   
   }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (this.item) {
          this.item = item;
          this.titre = "Modification d'un porteur";
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
    });
  }

  get nom() { return this.form.get('nom'); };
  get prenom() { return this.form.get('prenom'); };
  get contact() { return this.form.get('contact'); };

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.value.id)  this.porteur.add(this.form.value);
    else {
      console.log('edit');
      this.porteur.edit(this.form.value);
    }
    this.onClose();
  }

  onClose() {
    $("#myModal").hide();
    this.modal.setData(this.defaultItem);
    this.initForm(this.item);
  }
}
