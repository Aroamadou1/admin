import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public dataSubject = new Subject<any>();
  public historiquesSubject = new BehaviorSubject<any[]>([]);
  public activitesSubject = new BehaviorSubject<any[]>([]);
  public categorieId = new BehaviorSubject<number>(0);
  constructor() { }

  setHistoriques(item: any) {
    this.historiquesSubject.next(item);
  }

  getHistoriques() {
    return this.historiquesSubject.asObservable();
  }

  setActivites(item: any) {
    console.log(item);
    this.activitesSubject.next(item);
  }

  getActivites() {
    return this.activitesSubject.asObservable();
  }

  getData() {
    return this.dataSubject.asObservable();
  }

  setData(item: any) {
    this.dataSubject.next(item);
  }

  getCategorieId() {
    return this.categorieId.asObservable();
  }

  setCategorieId(id: number) {
    this.categorieId.next(id);
  }

}
