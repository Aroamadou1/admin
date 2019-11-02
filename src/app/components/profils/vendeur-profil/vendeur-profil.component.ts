import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Vendeur } from '../../../Models/vendeur.model';
import { ApiService } from '../../../services/api.service';
import { VendeurData } from '../../../data/entities/vendeur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-vendeur-profil',
  templateUrl: './vendeur-profil.component.html',
  styleUrls: ['./vendeur-profil.component.scss']
})
export class VendeurProfilComponent implements OnInit, OnDestroy {

  subs: Subscription;

  user: Vendeur;
  defaultItem = {id: null, nom:'', prenom:'', password: '', contact:'', identifiant:'', created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    private api: ApiService,
    private vendeurData: VendeurData,
    private modal: ModalService
  ) { }

  ngOnInit() {
    this.user = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (user) => {
        this.user = user;
        this.menu = 'infos';
        this.vendeurData.show(user.id).subscribe(
          (res: any) =>{
            this.historiques = res.historiques;
            this.activites = res.activites;
          }
        );
      }
    );

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onRestore(){
    if (window.confirm("Voulez vous restaurer cet utilisateur?")) {
      this.vendeurData.restore(this.user);
      this.onClose();
    }
  }

  onDelete() {
    this.vendeurData.delete(this.user);
    this.onClose();
  }

  onResetPassword(){
    this.vendeurData.resetPassword(this.user);
    this.onClose();
  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
