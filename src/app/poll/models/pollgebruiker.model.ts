export class Pollgebruiker {
    pollId: number;
    gebruikerId: number;
    heeftAangemaakt: boolean;

    constructor(pollId:number, gebruikerId:number, heeftAangemaakt:boolean){
        this.pollId = pollId;
        this.gebruikerId = gebruikerId;
        this.heeftAangemaakt = heeftAangemaakt;
    }
}
