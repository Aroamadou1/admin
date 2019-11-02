import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Categorie } from '../../Models/categorie.model';

@Injectable({ providedIn: 'root' })

export class CategorieData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.categories.subscribe(
          data => this.data = data
      );
  }

  add(data: Categorie) {
      this.api.post('categorieAdd', data);
  }

  edit(data: Categorie) {
      this.api.post('categorieUpdate', data);
  }

  delete(data: Categorie) {
      this.api.post('categorieDestroy', data);
  }

  restore(data: Categorie) {
      this.api.post('categorieRestore', data);
  }


  get() {
      this.api.get('categorie').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      return this.api.getRoute('Categorie', id);
  }

  getTrash() {
      this.api.get('CategorieTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(id: number, date: string) {
      let params = id + "/" + date;
      return this.api.getRoute('Categorie', params);
  }
}