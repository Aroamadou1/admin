import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Registrer  {
    private userSubject = new BehaviorSubject(null);

    constructor(
    ) {
    }

    set(item) {
        this.userSubject.next(item);
    }

    get() {
        return this.userSubject.asObservable();
    }
}