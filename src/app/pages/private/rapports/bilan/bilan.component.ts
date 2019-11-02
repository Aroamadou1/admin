import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { BilanData } from '../../../../data/entities/bilan.data';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {

  produits = [];
  jour: string;
  constructor(
     public searchService: SearchService,
     public bilanData: BilanData
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.bilanData.add([]);
  }

  search(){
    console.log(this.jour);
    this.bilanData.getActivities(this.jour);
  }
}
