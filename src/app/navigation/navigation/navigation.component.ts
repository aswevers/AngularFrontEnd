import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
