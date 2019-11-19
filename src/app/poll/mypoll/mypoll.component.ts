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

  constructor(private pollService:PollService, private router:Router) { 
    this.allPolls=[];
  }

  getPolls(){
    var teller = 0;
    this.pollService.getPolls().forEach(element =>{
      while (element[teller]){
        this.allPolls.push(element[teller])
        teller++;
      }
    });
  }

  
  ngOnChanges() {
    
  }

  ngOnInit(){    
    this.getPolls()

  }


}
