//Model om pollgebruikers in het component te gebruiker en weg te schrijven naar de API
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Poll } from './poll.model';

export class Pollgebruiker {
    pollGebruikerId : number;
    pollId: number;
    gebruikerId: number;
    heeftAangemaakt: boolean;
    poll : Poll;
    gebruiker: Gebruiker;
    heeftGeaccepteerd: boolean;

    constructor(pollId:number, gebruikerId:number, heeftAangemaakt:boolean, heeftGeaccepteerd:boolean){
        this.pollId = pollId;
        this.gebruikerId = gebruikerId;
        this.heeftAangemaakt = heeftAangemaakt;
        this.heeftGeaccepteerd= heeftGeaccepteerd;
    }
}
