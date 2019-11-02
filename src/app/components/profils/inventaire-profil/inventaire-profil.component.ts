import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Inventaire } from '../../../Models/inventaire.model';
import { InventaireData } from '../../../data/entities/inventaire.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-inventaire-profil',
  templateUrl: './inventaire-profil.component.html',
  styleUrls: ['./inventaire-profil.component.scss']
})
export class InventaireProfilComponent implements OnInit, OnDestroy {

  subs: Subscription;
  isForm: boolean = true;
  titre:string;
  operation: Inventaire;
  admin: any = {nom: '', prenom: ''};
  produitsArray = [];
  constructor(
    public inventaireData: InventaireData,
    public produitData: ProduitData,
    public catData: CategorieData,
    public modal: ModalService
  ) {

  }

  ngOnInit() {
    this.operation = { id: null, motif: '', created_at: '', updated_at: '', deleted_at: '' };
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        this.produitsArray = [];
        this.operation = item;
        if (item.id) {
          this.titre = "Inventaire";
          this.inventaireData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.produitsArray = prod.produits;
              this.admin.nom = prod.historiques[0].nom;
              this.admin.prenom = prod.historiques[0].prenom;
            }
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }


}

