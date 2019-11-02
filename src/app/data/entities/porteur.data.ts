import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Porteur } from '../../Models/porteur.model';

@Injectable({providedIn: 'root'})

export class PorteurData extends Entity {
  activities: any[];
    profil: any;
    archives: any[];

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.porteurs.subscribe(
            data => this.data = data
        );
    }

    add(data: Porteur) {
        this.api.post('porteurAdd', data);
    }

    edit(data: Porteur) {
        this.api.post('porteurUpdate', data);
    }

    delete(data: Porteur) {
        this.api.post('porteurDestroy', data);
    }

    restore(data: Porteur) {
        this.api.post('porteurRestore', data);
    }

    changePassword(data: Porteur) {
        this.api.post('porteurChangePassword', data);
    }

    changeIdentifiant(data: Porteur) {
        this.api.post('porteurChangeIdentifiant', data);
    }

    get() {
        this.api.get('porteur').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('porteur', id);
    }

    getTrash() {
        this.api.get('porteurTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(id: number, date: string) {
        let params = id + "/" + date;
        return this.api.getRoute('porteur', params);
    }
}