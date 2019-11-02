import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Inventaire } from '../../../Models/inventaire.model';
import { InventaireData } from '../../../data/entities/inventaire.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-inventaire-form',
  templateUrl: './inventaire-form.component.html',
  styleUrls: ['./inventaire-form.component.scss']
})
export class InventaireFormComponent implements OnInit, OnDestroy {

  // defaultItem = {id: null, motif:'', created_at: '', updated_at: '', deleted_at: ''};
  titre: string = "";
  subs: Subscription;
  isForm: boolean = true;
  operation: Inventaire;
  produitsArray = [];
  constructor(
    public inventaireData: InventaireData,
    public catData: CategorieData,
    public produitData: ProduitData,
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
          this.titre = "Modification d'un inventaire";
          this.inventaireData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.produitsArray = prod.produits;
            }
          );
        }
        else {
          this.titre = "Ajout d'un inventaire";
          this.produitData.data.forEach(element => {
            this.produitsArray.push({ id: element.id, categorie_id: element.categorie_id, quantiteCompte: null, nom: element.nom, quantiteReel: element.quantiteReel, quantiteStock: element.quantiteStock, strategie: false });
          });
          console.log(this.produitsArray);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }





  valider() {
    if (this.operation.motif) {
      if (this.operation.id) {
        this.inventaireData.edit({ id: this.operation.id, motif: this.operation.motif, data: this.produitsArray });
      } else {
        this.inventaireData.add({ id: this.operation.id, motif: this.operation.motif, data: this.produitsArray });
      }
      console.log({operation: this.operation, data: this.produitsArray })
      this.onClose();
    } else {
      // window.alert("Veuillez entrer le motif avant de proceder");
    }

  }

  reset() {
    this.produitsArray.forEach(item => item.quantiteCompte = null);
  }
  onClose() {
    $("#myModal").hide();
    this.modal.setData({});
  }
}
