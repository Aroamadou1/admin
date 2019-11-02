import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Porteur } from '../../../Models/porteur.model';
import { ApiService } from '../../../services/api.service';
import { PorteurData } from '../../../data/entities/porteur.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-porteur-profil',
  templateUrl: './porteur-profil.component.html',
  styleUrls: ['./porteur-profil.component.scss']
})
export class PorteurProfilComponent implements OnInit, OnDestroy {

  subs: Subscription;
  

  user: Porteur;
  defaultItem = {id: null, nom:'', prenom:'',  contact:'',  created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public porteurData: PorteurData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.user = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (user) => {
        this.user = user;
        this.menu = 'infos';
        this.porteurData.show(user.id).subscribe(
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
      this.porteurData.restore(this.user);
      this.onClose();
    }
  }

  onDelete() {
    this.porteurData.delete(this.user);
    this.onClose();
  }

  onResetPassword(){
    
  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
