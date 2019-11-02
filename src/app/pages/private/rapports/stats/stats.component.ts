import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { Stats } from '../../../../data/stats.data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  jour: '';
  constructor(
     public statData: Stats,
     public searchService: SearchService 
  ) { }

  ngOnInit() {
  }

  search(){
    console.log(this.jour);
    this.statData.getActivities(this.jour);
  }

}
