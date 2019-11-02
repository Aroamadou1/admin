import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Fournisseur } from '../../../Models/fournisseur.model';
import { ApiService } from '../../../services/api.service';
import { FournisseurData } from '../../../data/entities/fournisseur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-fournisseur-profil',
  templateUrl: './fournisseur-profil.component.html',
  styleUrls: ['./fournisseur-profil.component.scss']
})
export class FournisseurProfilComponent implements OnInit, OnDestroy {
  subs: Subscription;

  user: Fournisseur;
  defaultItem = {id: null, nom:'', contact:'', created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public fournisseurData: FournisseurData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.user = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (user) => {
        this.user = user;
        this.menu = 'infos';
        this.fournisseurData.show(user.id).subscribe(
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
      this.fournisseurData.restore(this.user);
          this.onClose();
    }
  }

  onDelete() {
    this.fournisseurData.delete(this.user);
    this.onClose();
  }

  onResetPassword(){
    
  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}

