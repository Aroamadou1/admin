import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Vente } from '../../../Models/vente.model';
import { SortieData } from '../../../data/entities/sortie.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { PorteurData } from '../../../data/entities/porteur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sortie-profil',
  templateUrl: './sortie-profil.component.html',
  styleUrls: ['./sortie-profil.component.scss']
})

export class SortieProfilComponent implements OnInit, OnDestroy {

  categories: number[] = [];
  titre = "";
  subs: Subscription;
  produitsArray : any[] =[];
  porteurs: []=[];
  operation: Vente;
  vendeur: any={nom: '', prenom:''};
  magasinier: any={nom: '', prenom:''};
  constructor(
    public venteData: SortieData,
    public catData: CategorieData,
    public produitData: ProduitData,
    public porteurData: PorteurData,
    public modal: ModalService,
  ) {
   
   }

  ngOnInit() {
    this.operation =  {id: null, nomClient: '', contactClient: '' , numero:'', quantiteTotale:null, created_at:'', deleted_at: '', updated_at:'', status: null};
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (item.id) {
          this.titre = "Vente numero "+item.numero;
          this.operation =item;
          this.venteData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.produitsArray=[];
              this.produitsArray = prod.produits;
              this.porteurs = prod.porteurs.map(port=>port.porteurPrenom);
              this.vendeur.nom=prod.historiques[0].nom;
              this.vendeur.prenom=prod.historiques[0].prenom;
              this.magasinier = prod.magasinier[0];
            }
          );
        } 
      }
    ) ;
  
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  // onValidate() {
  //   this.venteData.validate({id: this.operation.id , numero: this.operation.numero, porteurs:this.porteurs, response: 1});
  //   this.onClose();
  // }

  // onReject() {
  //   this.venteData.validate({id: this.operation.id , numero: this.operation.numero, response: 0});
  //   this.onClose();
  // }

  onClose() {
    this.produitsArray=[];
    $("#myProfilModal").hide();
  }
}

