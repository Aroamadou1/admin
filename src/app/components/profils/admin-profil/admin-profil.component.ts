import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Admin } from '../../../Models/admin.model';
import { ApiService } from '../../../services/api.service';
import { AdminData } from '../../../data/entities/admin.data';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.scss']
})
export class AdminProfilComponent implements OnInit, OnDestroy {

  subs: Subscription;

  user: Admin;
  defaultItem = {id: null, nom:'', prenom:'', password: '', contact:'', identifiant:'', created_at: '', updated_at: '', deleted_at: ''};
  menu: string ='infos';
  historiques: any[]=[];
  activites: any[]=[];

  constructor(
    public api: ApiService,
    public adminData: AdminData,
    public modal: ModalService
  ) { }

  ngOnInit() {
    this.user = this.defaultItem;
    this.subs = this.modal.getData().subscribe(
      (user) => {
        this.user = user;
        this.menu = 'infos';
        this.adminData.show(user.id).subscribe(
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
      this.adminData.restore(this.user);
      this.onClose();
    }
  }

  onDelete() {
    this.adminData.delete(this.user);
    this.onClose();
  }

  onResetPassword(){
    this.adminData.resetPassword(this.user);
    this.onClose();
  }

  onClose() {
    $("#myProfilModal").hide();
    this.modal.setData({});
  }
}
