import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Vente } from '../../Models/vente.model';

@Injectable({providedIn: 'root'})

export class VenteData extends Entity {
  item: any; 
   constructor(
    private api: ApiService,
    private dataService: DataService
   ) {
       super();
       this.dataService.sorties.subscribe(
        data => this.data = data
      );
   }

   getProduits(id: number) {
     return new Promise(
       (resolve, reject) => {
        this.api.getRoute('vente',id).subscribe(
          data =>  resolve(data)
        );
       }
     );
  }

   add(route: string, data: any) {
    return this.api.post(route, data).then(
      (res:any) => {
        this.item = res.data;
        return 'success';
      }
    );
  }

  edit(route: string, data: any) {
    console.log(data);
    this.api.post(route, data);
  }

  delete(route: string, data: Vente) {
    data.deleted_at = 'new';
    this.api.post(route, data);
  }

  validate(data: any){
    this.api.post('validateSortie', data);
  }
 }