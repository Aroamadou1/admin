import { Identification } from './identification.model';
import { User } from '../Models/user.model';


export class Vendeur extends User implements Identification {
    identifiant;
    password;
 } 