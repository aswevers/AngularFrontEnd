import { Poll } from './poll.model';

export class Keuze {
    naam: string;
    pollId: number;

    constructor(naam:string, pollId:number){
        this.naam = naam;
        this.pollId = pollId;
    }
}


