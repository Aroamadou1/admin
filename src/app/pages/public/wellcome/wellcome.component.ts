import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Admin } from '../../../Models/admin.model';
import { Registrer } from '../../../data/registrer.data';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {
  subs: Subscription;
  user: Admin;
  
  constructor(
     public registrer: Registrer,
     public router: Router,
     public auth: AuthService
  ) { }

  ngOnInit() {
    this.registrer.get().subscribe(
      user=> this.user = user
    );
  }

  onLogin() {
    this.router.navigate(['private']);
  }

  onLogout(){
    this.auth.logout().then(
      ok=>this.router.navigate(['public/login'])
    );
  }
}
