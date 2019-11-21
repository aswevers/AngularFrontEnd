import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Keuze } from '../models/keuze.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Stem } from '../models/stem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypoll',
  templateUrl: './mypoll.component.html',
  styleUrls: ['./mypoll.component.css']
})
export class MypollComponent implements OnInit, OnChanges {
  allPolls:{
    pollId:number;
    titel:string;
  }[];
  allPollsAangemaakt:{
    pollId:number;
    titel:string;
  }[];
  allPollRequests:{
    pollId:number;
    titel:string;
  }[];

  constructor(private pollService:PollService, private router:Router) { 
    this.allPolls=[];
    this.allPollRequests=[];
    this.allPollsAangemaakt=[];
  }

  getPolls(){
    var teller = 0;
    this.pollService.getPollsWhereGebruiker(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while (element[teller]){
        if(element[teller].heeftAangemaakt == true){
          this.allPollsAangemaakt.push(element[teller])
          teller++;
        }else if (element[teller].heeftGeaccepteerd == false){
          this.allPollRequests.push(element[teller])
          teller++;
        }else{
          this.allPolls.push(element[teller])
          teller++;
        }
      }
      console.log(this.allPolls)
    });
  }

  
  ngOnChanges() {
    
  }

  ngOnInit(){    
    this.getPolls()

  }


}
