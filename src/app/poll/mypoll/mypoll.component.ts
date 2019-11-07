import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Keuze } from '../models/keuze.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Stem } from '../models/stem.model';

@Component({
  selector: 'app-mypoll',
  templateUrl: './mypoll.component.html',
  styleUrls: ['./mypoll.component.css']
})
export class MypollComponent implements OnInit {
  allPolls:{
    pollId:number;
    titel:string;
  }[];

  constructor(private pollService:PollService) { 
    this.allPolls=[];
  }

  getPolls(){
    var teller = 0;
    this.pollService.getPolls().forEach(element =>{
      while (element[teller]){
        this.allPolls.push(element[teller])
        teller++;
        this.allPolls.sort(function(a,b){
          if(a.titel < b.titel) { return -1; }
          if(a.titel > b.titel) { return 1; }
          return 0;
        })
      }
    })
  }

  
  ngOnInit() {
    this.getPolls();
  }

}
