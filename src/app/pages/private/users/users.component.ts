import { Component, OnInit } from '@angular/core';
import { AdminData } from '../../../data/entities/admin.data';
import { VendeurData } from '../../../data/entities/vendeur.data';
import { MagasinierData } from '../../../data/entities/magasinier.data';
import { PorteurData } from '../../../data/entities/porteur.data';
import { FournisseurData } from '../../../data/entities/fournisseur.data';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  showArchive: boolean = false;
  fonction: string = 'admin';
  constructor(
     public adminData: AdminData,
     public vendeurData: VendeurData,
     public magasinierData: MagasinierData,
     public porteurData: PorteurData,
     public fournisseurData: FournisseurData,
     public searchService: SearchService
  ) {

  }

  ngOnInit() {

  }

}
