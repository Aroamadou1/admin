import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Inventaire } from '../../Models/inventaire.model';

@Injectable({ providedIn: 'root' })

export class InventaireData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.inventaires.subscribe(
          data => this.data = data
      );
  }

  add(data: any) {
      this.api.post('inventaireAdd', data);
  }

  edit(data: any) {
      this.api.post('inventaireUpdate', data);
  }

  delete(data: Inventaire) {
      this.api.post('inventaireDestroy', data);
  }

  restore(data: Inventaire) {
      this.api.post('inventaireRestore', data);
  }


  get() {
      this.api.get('inventaire').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      return this.api.getRoute('inventaire', id);
  }

  getTrash() {
      this.api.get('inventaireTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(date: string) {
      this.api.getRoute('inventaire', date).subscribe(
          (res: any) => this.activities = res
      );
  }
}