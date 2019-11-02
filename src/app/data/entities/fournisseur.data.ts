import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Fournisseur } from '../../Models/fournisseur.model';

@Injectable({providedIn: 'root'})

export class FournisseurData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.fournisseurs.subscribe(
          data => this.data = data
      );
  }

  add(data: Fournisseur) {
      this.api.post('fournisseurAdd', data);
  }

  edit(data: Fournisseur) {
      this.api.post('fournisseurUpdate', data);
  }

  delete(data: Fournisseur) {
      this.api.post('fournisseurDestroy', data);
  }

  restore(data: Fournisseur) {
      this.api.post('fournisseurRestore', data);
  }

  changePassword(data: Fournisseur) {
      this.api.post('fournisseurChangePassword', data);
  }

  changeIdentifiant(data: Fournisseur) {
      this.api.post('fournisseurChangeIdentifiant', data);
  }

  get() {
      this.api.get('fournisseur').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      return this.api.getRoute('fournisseur', id);
  }

  getTrash() {
      this.api.get('fournisseurTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(id: number, date: string) {
      let params = id + "/" + date;
      return this.api.getRoute('fournisseur', params);
  }
}