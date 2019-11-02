import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../../data/registrer.data';
import { AdminData } from '../../../../data/entities/admin.data';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit, OnDestroy {

  activites = [];
  subs: Subscription;
  constructor(
     public registrer: Registrer,
     public adminData: AdminData
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      user => {
        this.adminData.show(user.id).subscribe(
          (res: any) => {
            console.log(res);
            this.activites = res.activites;
          },
          (error) => console.log(error)
        );
      }
    ); 
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}