import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VendeurData } from '../../../../data/entities/vendeur.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.scss']
})
export class VendeursComponent implements OnInit {

  archives: any[] = [];
  showArchive: boolean = false;
  constructor(
     public vendeurData: VendeurData,
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
      this.vendeurData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.vendeurData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.vendeurData.restore(item);
      this.onShowTrash();
    }
  }

}
