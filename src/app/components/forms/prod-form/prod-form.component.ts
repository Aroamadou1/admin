import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProduitData } from '../../../data/entities/produit.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit, OnDestroy {


  form: FormGroup;
  defaultItem = { id: null, categorie_id: null, nom: '', quantite: null, quantiteCritique: null, created_at: '', updated_at: '', deleted_at: '' };
  cat: any = {id: null, nom: '',created_at: '', updated_at: '', deleted_at: ''} ;
  titre: string = "Ajout d'un produit";
  subs: Subscription;
  subs2: Subscription;
  isDisabled: boolean = true;
  constructor(
    public produit: ProduitData,
    public catData: CategorieData,
    public modal: ModalService
  ) {

  }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (item.id) {
          this.titre = "Modification d'un produit";
          this.isDisabled = false;
        }
        this.initForm(item);
      }
    );
    this.initForm(this.defaultItem);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  initForm(item) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      categorie_id: new FormControl(item.categorie_id, Validators.required),
      nom: new FormControl(item.nom, [Validators.required, Validators.minLength(2)]),
      // quantite: new FormControl(item.quantite, Validators.required),
      quantiteCritique: new FormControl(item.quantiteCritique, [Validators.required, Validators.min(0)]),
    });
  }

  get nom() { return this.form.get('nom'); };
  // get quantite() { return this.form.get('quantite'); };
  get quantiteCritique() { return this.form.get('quantiteCritique'); };

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.value.id) this.produit.add(this.form.value);
    else {
      console.log('edit');
      this.produit.edit(this.form.value);
    }
    this.onClose();
  }

  onClose() {
    $("#myModal").hide();
    this.modal.setData(this.defaultItem);
    this.isDisabled = true;
  }
}
