import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FournisseurData } from '../../../../data/entities/fournisseur.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {
  archives: any[] = [];
  showArchive: boolean = false;
  constructor(
     public fournisseurData: FournisseurData,
     public apiService: ApiService,
     public modal: ModalService,
     public searchService: SearchService
  ) {

  }

  ngOnInit() {

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
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer cet utilisateur?")) {
      this.fournisseurData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.fournisseurData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.fournisseurData.restore(item);
      this.onShowTrash();
    }
  }

}
