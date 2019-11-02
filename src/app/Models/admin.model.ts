import { Identification } from './identification.model';
import { User } from '../Models/user.model';


export class Admin extends User implements Identification {
    identifiant;
    password;
 } 