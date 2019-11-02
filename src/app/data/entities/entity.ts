import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class Entity {
    data: any[] = [];
    constructor(
    ) {
        
    }

    getAll() {
        return this.data;
    }

    getOne(id: number) {
        return this.data.find((item)=> item.id===id);
    }
    
   
} 
