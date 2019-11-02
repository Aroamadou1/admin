import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SortieData } from '../../../../data/entities/sortie.data';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  showArchive=false;
  archives : any[] = [];
  constructor(
    public sortieData: SortieData,
    public modal: ModalService,
    public searchService: SearchService,
    public apiService: ApiService
  ) { }

  ngOnInit(){

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
    if (window.confirm("Voulez vous supprimer la sortie "+ item.nom + "?")) {
          this.sortieData.delete(item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.sortieData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer la catégorie "+ item.nom + "?")) {
     this.sortieData.restore(item);
     this.onShowTrash();
    }
  }

}
