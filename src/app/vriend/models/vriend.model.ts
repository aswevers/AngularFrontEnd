export class Vriend {
    id:number;
    gebruikerId1: number;
    gebruikerId2:number;
    geaccepteerd:boolean;

    constructor(gebruikerId1:number, gebruikerId2:number, geaccepteerd:boolean, id:number){
        this.gebruikerId1 = gebruikerId1;
        this.gebruikerId2 = gebruikerId2;
        this.geaccepteerd = geaccepteerd;
        this.id = id;
    }
}
