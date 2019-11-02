import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Injectable({providedIn: 'root'})

export class BilanData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.bilans.subscribe(
          data => this.data = data
      );
  }

  add(data: any) {
      this.api.post('bilanAdd', data);
  }

  edit(data: any) {
      this.api.post('bilanUpdate', data);
  }

  delete(data: any) {
      this.api.post('bilanDestroy', data);
  }

  restore(data: any) {
      this.api.post('bilanRestore', data);
  }


  get() {
      this.api.get('bilan').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      this.api.getRoute('bilan', id).subscribe(
          (res: any) => this.profil = res
      );
  }

  getTrash() {
      this.api.get('bilanTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(date: string) {
      this.api.getRoute('bilan', date).subscribe(
          (res: any) => this.activities = res
      );
  }
}