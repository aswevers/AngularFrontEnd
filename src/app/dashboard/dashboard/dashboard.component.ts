import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Vriend } from 'src/app/vriend/models/vriend.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pendingRequests:number = 0;
  friendRequests:{
    gebruiker1Id:number;
    gebruiker2Id:number;
    gebruiker1:Gebruiker;
    gebruiker2:Gebruiker;
    geaccepteerd:boolean;
  }[];

  constructor(private dashboardService:DashboardService) {
    this.friendRequests=[];
   }


  ngOnInit() {
    this.getPendingFriendRequests();
  }
  logUit(){
    localStorage.removeItem("token");
  }

  getPendingFriendRequests(){
    var count = 0;
    this.dashboardService.getPendingFriendRequests(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while(element[count]){
        this.friendRequests.push(element[count]);
        count++;
      };
      console.log("count=" + count);
     //this.pendingRequests = count;
    });
    console.log(count);
    console.log(this.friendRequests);
    console.log("PR=" + this.pendingRequests);
  }
  //When sending a FR => set logged in user as gebruiker1 so that when showing pending requests gebruiker2 is always the receiver of the request
}
