import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Magasinier } from '../../../Models/magasinier.model';
import { ApiService } from '../../../services/api.service';
import { MagasinierData } from '../../../data/entities/magasinier.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-magasinier-profil',
  templateUrl: './magasinier-profil.component.html',
  styleUrls: ['./magasinier-profil.component.scss']
})
export class MagasinierProfilComponent implements OnInit, OnDestroy {

  subs: Subscription;

  user: Magasinier;
  defaultItem = {id: null, nom:'', prenom:'', password: '', contact:'', identifiant:'', created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public magasinierData: MagasinierData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.user = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (user) => {
        this.user = user;
        this.menu = 'infos';
        this.magasinierData.show(user.id).subscribe(
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
      this.magasinierData.restore(this.user);
      this.onClose();
    }
  }

  onDelete() {
    this.magasinierData.delete(this.user);
    this.onClose();
  }

  onResetPassword(){
    this.magasinierData.resetPassword(this.user);
    this.onClose();
  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
