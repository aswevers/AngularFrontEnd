//Model dat toont hoeveel stemmen een bepaalde keuze heeft
export class StemMetAantal {
    naam:string;
    aantal:number;

    constructor(naam:string, aantal:number){
        this.naam = naam;
        this.aantal = aantal;
    }
}
