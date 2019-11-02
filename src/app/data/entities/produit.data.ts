import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Produit } from '../../Models/produit.model';

@Injectable({providedIn: 'root'})

export class ProduitData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.produits.subscribe(
          data => this.data = data
      );
  }

  add(data: Produit) {
      this.api.post('produitAdd', data);
  }

  edit(data: Produit) {
      this.api.post('produitUpdate', data);
  }

  delete(data: Produit) {
      this.api.post('produitDestroy', data);
  }

  restore(data: Produit) {
      this.api.post('produitRestore', data);
  }


  get() {
      this.api.get('produit').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
     return  this.api.getRoute('produit', id);
  }

  getTrash() {
      this.api.get('produitTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(id: number, date: string) {
      let params = id + "/" + date;
      return this.api.getRoute('produit', params);
  }
}