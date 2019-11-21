import { Component, OnInit} from '@angular/core';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

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

  //Haalt alle pollGebruikers op waar gebruiker = de ingelogde gebruiker
  //Sorteert deze pollGebruiker in 3 categorieën: Polls die hij heeft aangemaakt, polls waarvoor hij een uitnodiging heeft 
  //en polls van zijn vrienden waarvan hij de uitnodiging al geaccepteerd heeft.
  getPolls(){
    var teller = 0;
    this.pollService.getPollsWhereGebruiker(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while (element[teller]){
        if(element[teller].heeftAangemaakt == true){
          this.allPollsAangemaakt.push(element[teller])
        }else if (element[teller].heeftGeaccepteerd == false){
          this.allPollRequests.push(element[teller])
        }else{
          this.allPolls.push(element[teller])
        }
        teller++;
      }
    });
  }



  ngOnInit(){    
    this.getPolls()

  }


}
