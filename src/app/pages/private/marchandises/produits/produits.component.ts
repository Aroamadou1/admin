import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ProduitData } from '../../../../data/entities/produit.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  id: number;
  showArchive= false;
  archives = [];
  constructor(
     public route: ActivatedRoute,
     public produitData: ProduitData,
     public apiService: ApiService,
     public modal: ModalService,
     public searchService: SearchService
  ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    console.log(this.id);
  }
  
  onEdit(item: any) {
    this.modal.setData(item);
    $("#myModal").show();
  }

  onAdd() {
    this.modal.setData( { id: null, categorie_id: this.id, nom: '', quantite: null, quantiteCritique: null, created_at: '', updated_at: '', deleted_at: '' });
    $("#myModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    this.apiService.getRoute('produit', item.id).subscribe(
      (res: any) => {
        console.log(res);
        this.modal.setHistoriques(res.historiques);
      },
      (error) => console.log(error)
    );
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer cet produit? "+ item.nom + "?")) {
          this.produitData.delete(item);
    }
  }

  onShowTrash() {
    this.produitData.getTrash();
    this.showArchive = true;
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer le produit "+ item.nom + "?")) {
      this.produitData.restore(item);
          this.onShowTrash();
    }
  }

}
