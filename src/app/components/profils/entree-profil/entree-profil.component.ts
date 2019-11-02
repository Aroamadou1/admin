import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { EntreeData } from '../../../data/entities/entree.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { FournisseurData } from '../../../data/entities/fournisseur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-entree-profil',
  templateUrl: './entree-profil.component.html',
  styleUrls: ['./entree-profil.component.scss']
})

export class EntreeProfilComponent implements OnInit, OnDestroy {

  
  categories: number[] = [];
  titre ;
  subs: Subscription;
  produitsArray : any[] =[];
  operation: any;
  constructor(
    public entreeData: EntreeData,
    public catData: CategorieData,
    public produitData: ProduitData,
    public fournisseurData: FournisseurData,
    public modal: ModalService,
  ) {
   
   }

  ngOnInit() {
    this.operation =  {id: null, fournisseur_id:null , nom: '', numero:'', quantiteTotale:null, created_at:'', deleted_at: '', updated_at:''};
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (item) {
          this.produitsArray=[];
          this.titre = "Entree de "+item.nom + " numero "+item.numero;
          this.operation =item;
          this.entreeData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.produitsArray = prod.produits;
            }
          );
        } 
      }
    ) ;
  
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  onValidate() {
    this.entreeData.validate({id: this.operation.id , numero: this.operation.numero, fournisseur_nom: this.operation.nom,  response: 1})
    this.onClose();
  }

  onReject() {
    this.entreeData.validate({id: this.operation.id , numero: this.operation.numero, fournisseur_nom: this.operation.nom,  response: 0});
    this.onClose();
  }

  onClose() {
    this.produitsArray=[];
    $("#myProfilModal").hide();
  }
}

