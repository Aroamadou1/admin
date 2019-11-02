import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Admin } from '../../Models/admin.model';

@Injectable({ providedIn: 'root' })
export class AdminData extends Entity {
    activities: any[];
    profil: any;
    archives: any[];

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.admins.subscribe(
            data => this.data = data
        );
    }

    add(data: Admin) {
        this.api.post('adminAdd', data);
    }

    edit(data: Admin) {
        this.api.post('adminUpdate', data);
    }

    delete(data: Admin) {
        this.api.post('adminDestroy', data);
    }

    restore(data: Admin) {
        this.api.post('adminRestore', data);
    }

    changePassword(data: any) {
        return this.api.post('adminChangePassword', data).then(
            (res) =>{
                if(res) return true;
            }
        );
    }

    changeIdentifiant(data: Admin) {
        this.api.post('adminChangeIdentifiant', data);
    }

    resetPassword(data: Admin) {
        this.api.post('adminResetPassword', data);
    }

    get() {
        this.api.get('admin').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('admin', id);
    }

    getTrash() {
        this.api.get('adminTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(id: number, date: string) {
        let params = id + "/" + date;
        this.api.getRoute('admin', params).subscribe(
            (res: any) => this.activities = res
        );
    }
}