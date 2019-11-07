import { Keuze } from './keuze.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

export class Stem {
    keuzeId: number;
    gebruikerId:number;
    constructor(keuzeId:number,gebruikerId:number){
        this.keuzeId = keuzeId;
        this.gebruikerId = gebruikerId;
    }
}
