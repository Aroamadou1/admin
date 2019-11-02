import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lastId: number;

  admins = new BehaviorSubject([]);
  vendeurs = new BehaviorSubject([]);
  porteurs = new BehaviorSubject([]);
  magasiniers = new BehaviorSubject([]);
  fournisseurs = new BehaviorSubject([]);
  categories = new BehaviorSubject([]);
  produits = new BehaviorSubject([]);
  sorties = new BehaviorSubject([]);
  entrees = new BehaviorSubject([]);
  inventaires = new BehaviorSubject([]);
  notifications = new BehaviorSubject([]);
  newNotifications = new BehaviorSubject([]);
  connexions = new BehaviorSubject([]);
  bilans = new BehaviorSubject([]);
  stats = new BehaviorSubject([]);

  constructor(
  ) { }

  setFirst(res: any) {
      if (res.admin)this.admins.next(res.admin);
      if(res.vendeur)this.vendeurs.next(res.vendeur);
      if(res.magasinier)this.magasiniers.next(res.magasinier);
      if(res.porteur)  this.porteurs.next(res.porteur);
      if(res.fournisseur)  this.fournisseurs.next(res.fournisseur);
      if(res.categorie)  this.categories.next(res.categorie);
      if(res.produit)  this.produits.next(res.produit);
      if(res.vente)  this.sorties.next(res.vente);
      if(res.entree)  this.entrees.next(res.entree);
      if(res.inventaire)  this.inventaires.next(res.inventaire);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.notifications.next(res.notification);
      }  
      if(res.bilan) this.bilans.next(res.bilan);
      if(res.stat) this.stats.next(res.stat);
    }

  setData(data: any[]) {
    data.forEach((res)=>{
      if (res.admin)this.admins.next(res.admin);
      if(res.vendeur)this.vendeurs.next(res.vendeur);
      if(res.magasinier)this.magasiniers.next(res.magasinier);
      if(res.porteur)  this.porteurs.next(res.porteur);
      if(res.fournisseur)  this.fournisseurs.next(res.fournisseur);
      if(res.categorie)  this.categories.next(res.categorie);
      if(res.produit)  this.produits.next(res.produit);
      if(res.vente)  this.sorties.next(res.vente);
      if(res.entree)  this.entrees.next(res.entree);
      if(res.inventaire)  this.inventaires.next(res.inventaire);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.newNotifications.next(res.notification);
      }  
      if(res.bilan) this.bilans.next(res.bilan);
      if(res.stat) this.stats.next(res.stat);
    });
    }
    
  }
