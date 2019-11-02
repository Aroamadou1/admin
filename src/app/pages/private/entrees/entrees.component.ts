import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EntreeData } from '../../../data/entities/entree.data';
import { ModalService } from '../../../services/modal.service';
import { SearchService } from '../../../services/search.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.scss']
})
export class EntreesComponent implements OnInit {
  annee = "2019";
  menu = 'now';
  data = ["2019"];
  searchValue: '';
  constructor(
     public entreeData: EntreeData,
     public modal: ModalService,
     public searchService: SearchService,
     public apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onEdit(item: any) {
    this.modal.setData(item);
    $("#myEditModal").show();
  }

  onAdd() {
    this.modal.setData({});
    $("#myEditModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer l'entree "+ item.nom + " "+ item.numero + "?")) {
          this.entreeData.delete(item);
    }
  }

  onSearch() {
    this.menu = "byDate";
    this.entreeData.getActivities(this.annee).subscribe(
      (res: any) => this.data = res
    );
  }
}
