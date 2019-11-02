import { Identification } from './identification.model';
import { User } from '../Models/user.model';


export class Magasinier extends User implements Identification {
    identifiant;
    password;
 } 