import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Categorie } from '../../../Models/categorie.model';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit, OnDestroy {

 
  form: FormGroup;
  defaultItem = {id: null, nom:'', created_at: '', updated_at: '', deleted_at: ''};
  item: Categorie;
  titre: string = "Ajout d'une categorie"; 
  subs: Subscription
  constructor(
    public cat: CategorieData,
    public modal: ModalService
  ) {
   
   }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (this.item) {
          this.item = item;
          this.titre = "Modification d'une categorie";
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
    });
  }

  get nom() { return this.form.get('nom'); };

  onSubmit() {
    console.log(this.form.value);
    if(this.form.value!=this.defaultItem|| this.form.value!={}){
      if (!this.form.value.id)  this.cat.add(this.form.value);
      else {
        console.log('edit');
        this.cat.edit(this.form.value);
      }
      this.onClose();
    } else console.log('c\'est une blague?')
   
  }

  onClose() {
    $("#myModal").hide();
    this.initForm(this.defaultItem);
    this.modal.setData({});
  }
}
