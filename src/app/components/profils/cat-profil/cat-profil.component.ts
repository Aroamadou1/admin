import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Categorie } from '../../../Models/categorie.model';
import { ApiService } from '../../../services/api.service';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-cat-profil',
  templateUrl: './cat-profil.component.html',
  styleUrls: ['./cat-profil.component.scss']
})
export class CatProfilComponent implements OnInit {

  subs: Subscription;
  subs2: Subscription;

  cat: Categorie;
  defaultItem = {id: null, nom:'', created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public categorieData: CategorieData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.cat = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (cat) => {
        this.cat = cat;
        this.menu = 'infos';
        this.categorieData.show(cat.id).subscribe(
          (res: any) =>{
            this.historiques = res.historiques;
          }
        );
      }
    );
    
   

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onRestore(){
    if (window.confirm("Voulez vous restaurer cette categorie?")) {
      this.categorieData.restore(this.cat);
      this.onClose();
    }
  }

  onDelete() {
    this.categorieData.delete(this.cat);
    this.onClose();
  }

  onResetPassword(){

  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
