import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() itemtitel:string;
  @Input() itemdescription:string;
  @Input() itemlink:string;
  constructor(private dashboardService:DashboardService) { 
    this.friendRequests=[];

  }

  pendingRequests:number = 0;
  friendRequests:{
    gebruiker1Id:number;
    gebruiker2Id:number;
    gebruiker1:Gebruiker;
    gebruiker2:Gebruiker;
    geaccepteerd:boolean;
  }[];
  ngOnInit() {
    this.getPendingFriendRequests();

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
     this.pendingRequests = count;
    });
  }


}
