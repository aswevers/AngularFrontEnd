//Model om polls in het component te gebruiken
export class Poll {
    pollId:number;
    titel:string;

    constructor(pollId:number, titel:string){
        this.pollId = pollId;
        this.titel = titel;
    }
}
