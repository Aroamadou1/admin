import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PorteurData } from '../../../../data/entities/porteur.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-porteurs',
  templateUrl: './porteurs.component.html',
  styleUrls: ['./porteurs.component.scss']
})
export class PorteursComponent implements OnInit {

  archives: any[] = [];
  showArchive: boolean = false;
  constructor(
     public porteurData: PorteurData,
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
      this.porteurData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.porteurData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.porteurData.restore(item);
      this.onShowTrash();
    }
  }

}
