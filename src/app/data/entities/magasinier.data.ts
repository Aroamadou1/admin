import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Magasinier } from '../../Models/magasinier.model';

@Injectable({providedIn: 'root'})

export class MagasinierData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.magasiniers.subscribe(
          data => this.data = data
      );
  }

  add(data: Magasinier) {
      this.api.post('magasinierAdd', data);
  }

  edit(data: Magasinier) {
      this.api.post('magasinierUpdate', data);
  }

  delete(data: Magasinier) {
      this.api.post('magasinierDestroy', data);
  }

  restore(data: Magasinier) {
      this.api.post('magasinierRestore', data);
  }

  changePassword(data: Magasinier) {
      this.api.post('magasinierChangePassword', data);
  }

  resetPassword(data: Magasinier) {
    this.api.post('magasinierResetPassword', data);
}

  changeIdentifiant(data: Magasinier) {
      this.api.post('magasinierChangeIdentifiant', data);
  }

  get() {
      this.api.get('magasinier').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      return this.api.getRoute('magasinier', id);
  }

  getTrash() {
      this.api.get('magasinierTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(id: number, date: string) {
      let params = id + "/" + date;
      return this.api.getRoute('magasinier', params);
  }
}