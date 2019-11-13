import { Gebruiker } from 'src/app/security/models/gebruiker.model';

export class Vriend {
    id:number;
    gebruikerId1: number;
    gebruikerId2:number;
    geaccepteerd:boolean;
    gebruiker1: Gebruiker;
    gebruiker2:Gebruiker;

    constructor(gebruikerId1:number, gebruikerId2:number, gebruiker2:Gebruiker, gebruiker1:Gebruiker, geaccepteerd:boolean){
        this.gebruikerId1 = gebruikerId1;
        this.gebruikerId2 = gebruikerId2;
        this.gebruiker1 = gebruiker1;
        this.gebruiker2 = gebruiker2;
        this.geaccepteerd = geaccepteerd;
    }
}
