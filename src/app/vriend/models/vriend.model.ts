export class Vriend {
    gebruikerId1: number;
    gebruikerId2:number;
    geaccepteerd:boolean;

    constructor(gebruikerId1:number, gebruikerId2:number, geaccepteerd:boolean){
        this.gebruikerId1 = gebruikerId1;
        this.gebruikerId2 = gebruikerId2;
        this.geaccepteerd = geaccepteerd;
    }
}
