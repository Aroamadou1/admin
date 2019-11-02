import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Produit } from '../../../Models/produit.model';
import { ApiService } from '../../../services/api.service';
import { ProduitData } from '../../../data/entities/produit.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-prod-profil',
  templateUrl: './prod-profil.component.html',
  styleUrls: ['./prod-profil.component.scss']
})
export class ProdProfilComponent implements OnInit,OnDestroy {

  subs: Subscription;

  produit: Produit;
  defaultItem = {id: null, categorie_id: null,  nom:'',quantiteReel:null, quantiteStock:null, quantiteCritique:null, isChecking:0, created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public produitData: ProduitData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.produit = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (produit) => {
        this.produit = produit;
        this.menu = 'infos';
        this.produitData.show(produit.id).subscribe(
          (res: any) =>{
            this.historiques = res.historiques;
            this.activites = res.activites;
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onRestore(){
    if (window.confirm("Voulez vous restaurer cet produit?")) {
      this.produitData.restore(this.produit);
      this.onClose();
    }
  }

  onDelete() {
    this.produitData.delete(this.produit);
    this.onClose();
  }


  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
