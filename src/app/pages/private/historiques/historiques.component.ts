import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../../../data/entities/notification.data';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  type;
  jour;
  constructor(
    public notData: NotificationData,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.type='user';
  }

  search(){
    console.log(this.jour);
    this.notData.getActivities(this.jour);
  }

}
