import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  lastId: number;
  constructor(
    public api: ApiService
  ) { 
    
  }

  start() {
    window.setInterval(()=>{
      this.api.getLastOperationId(this.lastId).then(
        (data: any)=>{
         data.operationsId.forEach(element => {
           this.api.get(element.route);
         },30000);
         this.lastId = data.lastId;
        }
      );
    })
  }

  stop() {
    
  }
}
