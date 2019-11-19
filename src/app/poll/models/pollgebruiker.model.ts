import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Poll } from './poll.model';

export class Pollgebruiker {
    pollId: number;
    gebruikerId: number;
    heeftAangemaakt: boolean;
    poll : Poll;
    gebruiker: Gebruiker;

    constructor(pollId:number, gebruikerId:number, heeftAangemaakt:boolean){
        this.pollId = pollId;
        this.gebruikerId = gebruikerId;
        this.heeftAangemaakt = heeftAangemaakt;
    }
}
