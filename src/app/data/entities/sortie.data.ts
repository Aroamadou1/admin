import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Sortie } from '../../Models/sortie.model';

@Injectable({ providedIn: 'root' })

export class SortieData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.sorties.subscribe(
          data => this.data = data
      );
  }

  add(data: Sortie) {
      this.api.post('sortieAdd', data);
  }

  edit(data: Sortie) {
      this.api.post('sortieUpdate', data);
  }

  delete(data: Sortie) {
      this.api.post('sortieDestroy', data);
  }

  restore(data: Sortie) {
      this.api.post('sortieRestore', data);
  }


  get() {
      this.api.get('sortie').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      return this.api.getRoute('sortie', id);
  }

  getTrash() {
      this.api.get('sortieTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(date: string) {
      this.api.getRoute('sortieSearch', date).subscribe(
          (res: any) => this.activities = res
      );
  }
}