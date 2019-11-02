import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Injectable({providedIn: 'root'})

export class NotificationData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];

  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.notifications.subscribe(
          data => this.data = data
      );
      this.dataService.newNotifications.subscribe(
        data => data.reverse().forEach(item=>this.data.unshift(item))
    );
  }

  get() {
    this.api.get('notification').subscribe(
      (res: any) => this.data = res
  );
  }

  getActivities(date: string) {
      this.api.getRoute('notification', date).subscribe(
          (res: any) => this.activities = res
      );
  }
}