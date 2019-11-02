import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../../services/modal.service';
import { Registrer } from '../../../../data/registrer.data';
import { Magasinier } from '../../../../Models/magasinier.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit, OnDestroy {

  subs: Subscription;
  user: Magasinier;
  constructor(
     public modal: ModalService,
     public registrer: Registrer,
  ) { 

  }

  ngOnInit(
  ) {
    this.subs = this.registrer.get().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}