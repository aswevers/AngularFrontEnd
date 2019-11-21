import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { PollService } from 'src/app/poll/poll.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() itemtitel:string;
  @Input() itemdescription:string;
  @Input() itemlink:string;
  constructor(private dashboardService:DashboardService, private pollService: PollService) { 
    this.friendRequests=[];

  }

  pendingFriends:number = 0;
  friendRequests:{
    gebruiker1Id:number;
    gebruiker2Id:number;
    gebruiker1:Gebruiker;
    gebruiker2:Gebruiker;
    geaccepteerd:boolean;
  }[];
  pendingPolls:number=0;
  ngOnInit() {
    this.getPendingFriendRequests();
    this.getPollRequests();
  }
  
  logUit(){
    if(this.itemlink == ""){
      localStorage.removeItem("token");

    }
  }

  getPendingFriendRequests(){
    var count = 0;
    this.dashboardService.getPendingFriendRequests(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while(element[count]){
        this.friendRequests.push(element[count]);
        count++;
      };
     this.pendingFriends = count;
    });
  }

  getPollRequests(){
    var count = 0;
    this.pollService.getPollsWhereGebruiker(parseInt(localStorage.getItem("id"))).subscribe(result =>{
      while(result[count]){
        if(!result[count].heeftGeaccepteerd){
          this.pendingPolls++;
        }
        count++;
      }
    })
  }


}
