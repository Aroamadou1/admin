import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CategorieData } from '../../../../data/entities/categorie.data';
import { ProduitData } from '../../../../data/entities/produit.data';
import { ModalService } from '../../../../services/modal.service';
import { ApiService } from '../../../../services/api.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  showArchive=false;
  archives : any[] = [];
  constructor(
     public catData: CategorieData,
     public produitData: ProduitData,
     public router: Router,
     public modal: ModalService,
     public apiService: ApiService,
     public searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onGoToProduits(id: number) {
    this.router.navigate(['private/marchandises/produits/',id]);
  }

  
  onEdit(item: any) {
    this.modal.setData(item);
    $("#myModal").show();
  }

  onAdd() {
    $("#myModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    this.apiService.getRoute('categorie', item.id).subscribe(
      (res: any) => {
        console.log(res);
        this.modal.setHistoriques(res.historiques);
      },
      (error) => console.log(error)
    );
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer la catégorie "+ item.nom + "?")) {
          this.catData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.catData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer la catégorie "+ item.nom + "?")) {
      this.catData.delete(item);
      this.onShowTrash();
    }
  }

}
