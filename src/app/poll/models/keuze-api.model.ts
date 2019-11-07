import { Poll } from './poll.model';

export class KeuzeApi {
    naam: string;
    pollId: number;
    poll: Poll;

    constructor(naam:string, pollId:number, poll:Poll){
        this.naam = naam;
        this.pollId = pollId;
        this.poll = poll;
    }
}
