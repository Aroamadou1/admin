import { Injectable } from '@angular/core';
import { Entity } from './entity';

@Injectable({providedIn: 'root'})

export class ConnexionData extends Entity {
   constructor() {
       super();
   }
 }