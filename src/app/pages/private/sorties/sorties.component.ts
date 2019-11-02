import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortieData } from '../../../data/entities/sortie.data';

@Component({
  selector: 'app-sorties',
  templateUrl: './sorties.component.html',
  styleUrls: ['./sorties.component.scss']
})
export class SortiesComponent implements OnInit {
    jour: string;
  constructor(
    public sortieData: SortieData,
    public router: Router
  ) { }

  ngOnInit() {
  }

  search(){
    console.log(this.jour);
    this.sortieData.getActivities(this.jour);
    this.router.navigate(['private/sorties/date']);
  }


}
