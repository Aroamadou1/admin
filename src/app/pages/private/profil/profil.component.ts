import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  constructor(
    public modal: ModalService,
  ) { 

  }

  ngOnInit(
  ) {
    
  }

  onChangeIdentifiant(){
    $("#myIdentifiantModal").show();
  }
  
  onChangePassword(){
    $("#myPasswordModal").show();
  }

}
