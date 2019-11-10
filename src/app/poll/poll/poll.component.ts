import { Component, OnInit, Input } from '@angular/core';
import { Keuze } from '../models/keuze.model';
import { PollService } from '../poll.service';
import { Stem } from '../models/stem.model';
import { Poll } from '../models/poll.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { StemMetAantal } from '../models/stem-met-aantal.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { KeuzeApi } from '../models/keuze-api.model';
import {Location} from '@angular/common'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  faTrash = faTrash;
  @Input() item: Keuze;
  @Input() pollId: number;
  voted:boolean = false;
  allKeuzes:{
    naam:string;
    keuzeId:number;
    pollId:number;
    poll: Poll;
  }[];
  allStemmen:{
    stemId;
    keuzeId:number;
    keuze: Keuze;
    gebruikerId:number;
    gebruiker: Gebruiker;
  }[];
  gesorteerdeStemmen:{
    naam:string;
    aantal:number;
  }[];
  totaalAantalStemmen:number;
  
  constructor(private pollService:PollService, private router:Router, private location:Location) { 
    this.allKeuzes=[];
    this.allStemmen=[];
    this.gesorteerdeStemmen=[];
  }

  ngOnInit() {
    this.getKeuzesByPollId(this.pollId);
    this.getStemmenByPollId(this.pollId);
  }
  
  addStem(keuzeId:number){
    var stem = new Stem(keuzeId, parseInt(localStorage.getItem('id')));
    this.pollService.addStem(stem).subscribe();
    this.voted = true;
    this.getKeuzesByPollId(this.pollId);
    this.sortStemmen();
  }

  getStemmenByPollId(pollId:number){
    var count = 0;
    this.pollService.getStemmenByPollId(pollId).forEach(element=>{
      while(element[count]){
        this.allStemmen.push(element[count])
        count++;
      }
    })
  }

  getKeuzesByPollId(pollId:number){
    var count = 0;
    this.pollService.getKeuzesByPollId(pollId).forEach(element=>{
      while(element[count]){
        this.allKeuzes.push(element[count])
        count++;
      }
    })
  }

  sortStemmen(){
    var aantal=1;
    this.allStemmen.sort()
    var titel = this.allStemmen[0].keuze.naam;
    for(var i=0; i < this.allStemmen.length; i++){
      if(this.allStemmen[i].keuze.naam == titel){
        aantal++;
      }
      else{
          this.gesorteerdeStemmen.push(new StemMetAantal(titel, aantal))
          aantal=1;
          titel = this.allStemmen[i].keuze.naam
      }
    }
    this.gesorteerdeStemmen.push(new StemMetAantal(this.allStemmen[this.allStemmen.length-1].keuze.naam, aantal))
    this.gesorteerdeStemmen.sort(function(a,b){
      if(a.aantal < b.aantal) { return 1; }
      if(a.aantal > b.aantal) { return -1; }
      return 0;
    })
  }
  
  setTotaalAantalStemmen(aantal:number){
    return this.allStemmen.length+1
  }

  deletePoll(){
    this.allStemmen.forEach(element=>{
      this.pollService.deleteStem(element.stemId).subscribe();
    })
    this.allKeuzes.forEach(element => {
      this.pollService.deleteKeuze(element.keuzeId).subscribe();
    })
    this.pollService.deletePoll(this.pollId).subscribe();   
    this.getStemmenByPollId(this.pollId); 
    window.location.reload();
  }

}
