import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Admin } from '../../Models/admin.model';
import { SearchService } from '../../services/search.service';
import { Registrer } from '../../data/registrer.data';
import { AuthService } from '../../services/auth.service';
import { NotificationData } from '../../data/entities/notification.data';
import * as $ from 'jquery';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: Admin;
  subs: Subscription;
  constructor(
    public searchService: SearchService,
    public registrer: Registrer,
    public authService: AuthService,
    public notData: NotificationData,
    public router: Router
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showDropdown() {
    $('.dropcard').toggle();
    $(".dropdown-item").click(
      function() {
        $('.dropcard').hide();
      }
    )
  }



  onLogout() {
    this.authService.logout().then(
      (ok) => {
        if (ok) {
          this.router.navigate(['/public']);
        }
      }
    );
  }

}
