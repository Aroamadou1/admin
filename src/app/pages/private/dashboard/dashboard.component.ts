import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationData } from '../../../data/entities/notification.data';
import { SearchService } from '../../../services/search.service';
import { Stats } from '../../../data/stats.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public notData: NotificationData,
    public searchService: SearchService,
    public statData: Stats,
    public router: Router
  ) { }

  ngOnInit() {
  }

  gotToConfirm(type: string){
    switch(type) {
      case 'admin':
          this.router.navigate(['private/users/admins']);
      break;
      case 'vendeur':
          this.router.navigate(['private/users/vendeurs']);
      break;
      case 'magasinier':
          this.router.navigate(['private/users/magasiniers']);
      break;
      case 'porteur':
          this.router.navigate(['private/users/porteurs']);
      break;
      case 'fournisseur':
          this.router.navigate(['private/users/fournisseurs']);
      break;
      case 'vente':
          this.router.navigate(['private/sorties']);
      break;
      case 'entree':
          this.router.navigate(['private/entrees']);
      break;
      case 'sortie':
          this.router.navigate(['private/sorties']);
      break;
      case 'inventaire':
          this.router.navigate(['private/inventaires']);
      break;
    }
  }
}
