import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Entity } from './entities/entity';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class Stats extends Entity {
    usersOnline: number=0;
    bestSell: any ={nom:'', categorie: '', quantite: null};
    worstSell: any ={nom:'', categorie: '', quantite: null};
    admins =[];
    vendeurs=[];
    magasiniers=[];
    activities;
    constructor(
        private dataService: DataService,
        private api: ApiService
    ) {
        super();
        this.dataService.stats.subscribe(
            (res: any)=>{
                this.data = res;
                this.bestSell = res.reduce(function(prev, current) {
                    return (prev.quantite > current.quantite) ? prev : current
                },0); 
                this.worstSell = res.reduce(function(prev, current) {
                    return (prev.quantite < current.quantite) ? prev : current
                },0);  
            }
        );
        this.dataService.admins.subscribe(
            admins=>{
                this.admins =admins;
                this.online();
            }
        );
        this.dataService.vendeurs.subscribe(
            vendeurs=>{
                this.vendeurs=vendeurs;
                this.online();
            }
        );
        this.dataService.magasiniers.subscribe(
            magasinier=>{
                this.magasiniers=magasinier;
                this.online();
            }
        );
        
    }

    online() {
        this.usersOnline = this.admins.concat(this.vendeurs, this.magasiniers).filter(item=>item.isOnline).length;
    }

    get() {
        this.api.get('stat').subscribe(
          (res: any) => this.data = res
      );
      }
    
      getActivities(date: string) {
          this.api.getRoute('stat', date).subscribe(
              (res: any) => {
                this.activities = res
                this.bestSell = res.reduce(function(prev, current) {
                    return (prev.quantite > current.quantite) ? prev : current
                },0); 
                this.worstSell = res.reduce(function(prev, current) {
                    return (prev.quantite < current.quantite) ? prev : current
                },0); 
              }

             
          );
      }

}