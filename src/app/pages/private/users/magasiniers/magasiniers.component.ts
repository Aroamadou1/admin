import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MagasinierData } from '../../../../data/entities/magasinier.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';


@Component({
  selector: 'app-magasiniers',
  templateUrl: './magasiniers.component.html',
  styleUrls: ['./magasiniers.component.scss']
})
export class MagasiniersComponent implements OnInit {

  archives: any[] = [];
  showArchive: boolean = false;
  constructor(
    public magasinierData: MagasinierData,
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
      this.magasinierData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.magasinierData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.magasinierData.restore(item);
      this.onShowTrash();
    }
  }

}
