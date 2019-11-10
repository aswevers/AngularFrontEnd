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

  constructor(private dashboardService:DashboardService) {
    this.friendRequests=[];
   }

  friendRequests:Vriend[];

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
      }
    });
    console.log(this.friendRequests)
  }

}
