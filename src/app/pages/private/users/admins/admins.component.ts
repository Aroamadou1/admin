import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdminData } from '../../../../data/entities/admin.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  archives: any[] = [];
  showArchive: boolean = false;
  constructor(
     public adminData: AdminData,
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
      this.adminData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.adminData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.adminData.restore(item);
      this.onShowTrash();
    }
  }

}
